import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/components/ProfileSection.tsx', import.meta.url), 'utf8');
const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const navbar = readFileSync(new URL('../src/components/Navbar.tsx', import.meta.url), 'utf8');
const dial = readFileSync(new URL('../src/components/RotaryDial.tsx', import.meta.url), 'utf8');
const sound = readFileSync(new URL('../src/utils/soundEffects.ts', import.meta.url), 'utf8');
const cvModal = readFileSync(new URL('../src/components/CvModal.tsx', import.meta.url), 'utf8');
const cvPdf = new URL('../public/assets/CV_M_Adhe_Akbar_ATS.pdf', import.meta.url);
const { existsSync } = await import('node:fs');

 test('CV action opens latest attached ATS PDF with view and download options', () => {
  assert.ok(existsSync(cvPdf), 'latest ATS PDF must be in public assets');
  assert.ok(cvModal.includes('<iframe'));
  assert.ok(cvModal.includes('/assets/CV_M_Adhe_Akbar_ATS.pdf'));
  assert.ok(cvModal.includes('download'));
  assert.ok(cvModal.includes('target="_blank"'));
});

 test('all CV buttons open the same PDF viewer modal', () => {
  assert.ok(app.includes('<CvModal'));
  assert.ok(app.includes('isOpen={isCvModalOpen}'));
  assert.ok(app.includes('onOpenCvModal={() => setIsCvModalOpen(true)}'));
});


test('profile slide is reachable through page and both navigation systems', () => {
  assert.ok(app.includes('<ProfileSection onOpenCvModal={() => setIsCvModalOpen(true)} />'));
  assert.ok(navbar.includes("{ id: 'profil', label: 'Profil', href: '#profil' }"));
  assert.ok(dial.includes("{ id: 'profil', label: 'Profil' }"));
});


test('navbar has no sound control and sound effects emit no audio', () => {
  assert.ok(!navbar.includes('Volume2'));
  assert.ok(!navbar.includes('VolumeX'));
  assert.ok(!navbar.includes('toggleMute'));
  assert.ok(!sound.includes('AudioContext'));
});

test('profile slide uses a broad, evidence-based headline and summary', () => {
  for (const text of [
    'Teknologi, operasi, riset &amp; layanan',
    'aplikasi web dan Android (26 repositori GitHub)',
    'operasional IT dan jaringan ISP',
    'SOP dan menyusun notulensi rapat di BAPPEDA',
    'survei dan validasi data lapangan',
    'riset machine learning SINTA 3',
    'sekitar 30 konten publikasi',
    '4.500+ pesanan digital',
    'rating bintang lima'
  ]) {
    assert.ok(source.includes(text), `missing profile coverage: ${text}`);
  }
});

test('profile slide exposes requested identity, measurements, and both portraits', () => {
  for (const text of [
    'id="profil"',
    'M. Adhe Akbar',
    '182 cm',
    '78 kg',
    '/assets/adhe_formal_red.jpg',
    '/assets/adhe_wisuda_full.jpg',
    'Cara saya bekerja',
    'Pahami alur',
    'Susun solusi',
    'Periksa hasil'
  ]) {
    assert.ok(source.includes(text), `missing profile content: ${text}`);
  }
});
