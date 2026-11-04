import sys, json
sys.path.insert(0, '/root/.hermes/installs/8a4017c4cabfe15f/environments/3930601841a143cc9e1e68ac4fe11f0b/venv/lib/python3.14/site-packages')
from playwright.sync_api import sync_playwright

url = 'http://127.0.0.1:4173/?v=cv-pdf-v2'
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path='/root/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome', args=['--no-sandbox'])
    for width, height in [(390, 844), (1440, 900)]:
        page = browser.new_page(viewport={'width': width, 'height': height})
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.goto(url, wait_until='networkidle')
        
        button = page.locator('#cv-lengkap button:has-text("Buka Dokumen CV Standar ATS")').first
        button.scroll_into_view_if_needed()
        page.wait_for_timeout(200)
        button.click()
        page.wait_for_timeout(500)
        
        modal_info = page.evaluate('''() => {
            const iframe = document.querySelector('iframe[src*="CV_M_Adhe_Akbar_ATS.pdf"]');
            const downloadLinks = [...document.querySelectorAll('a[download*="CV_M_Adhe_Akbar_ATS.pdf"]')].map(a => a.href);
            const titleEl = document.querySelector('.fixed.inset-0 h3');
            return {
                isModalVisible: !!document.querySelector('.fixed.inset-0.z-50'),
                hasIframe: !!iframe,
                iframeSrc: iframe ? iframe.src : null,
                downloadLinksCount: downloadLinks.length,
                titleText: titleEl ? titleEl.innerText : null,
                docWidth: document.documentElement.scrollWidth,
                viewportWidth: innerWidth
            };
        }''')
        
        page.screenshot(path=f'/root/.hermes/cache/scratch/cv-modal-pdf-fixed-{width}.png')
        print(json.dumps({'width': width, 'modal_info': modal_info, 'errors': errors}))
        
        assert modal_info['isModalVisible'], f"Modal not visible on {width}"
        assert modal_info['hasIframe'], f"Iframe not present on {width}"
        assert modal_info['downloadLinksCount'] >= 2, f"Download links missing on {width}"
        assert modal_info['titleText'] == "CV Resmi Format ATS", f"Title text mismatch on {width}"
        assert not errors, f"Page errors: {errors}"
        
        page.close()
    browser.close()
print("Playwright CV PDF re-verification completed successfully.")
