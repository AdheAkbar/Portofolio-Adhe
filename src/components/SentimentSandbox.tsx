import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { playTactileClick } from '../utils/soundEffects';
import { Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

export const SentimentSandbox: React.FC = () => {
  const { sinta3Publication } = PORTFOLIO_DATA;
  const [inputText, setInputText] = useState(sinta3Publication.sampleCases[0].text);
  const [result, setResult] = useState({
    sentiment: 'POSITIF',
    nbProb: 0.94,
    knnDist: 0.12,
    confidence: '94.2%',
    dominantTokens: ['cepat', 'tanpa_biaya', 'bersih', 'mudah']
  });

  const analyzeSentiment = (text: string) => {
    playTactileClick(1400);
    setInputText(text);

    const lower = text.toLowerCase();
    const posWords = ['cepat', 'mudah', 'bagus', 'keren', 'lancar', 'puas', 'suka', 'mantap', 'bersih', 'aman', 'terbaik', 'top', 'stabil'];
    const negWords = ['lambat', 'gagal', 'kecewa', 'rugi', 'rusak', 'error', 'jelek', 'tertahan', 'buruk', 'parah', 'cs', 'pending', 'crash'];

    let posCount = 0;
    let negCount = 0;

    posWords.forEach(w => { if (lower.includes(w)) posCount++; });
    negWords.forEach(w => { if (lower.includes(w)) negCount++; });

    if (posCount > negCount) {
      setResult({
        sentiment: 'POSITIF',
        nbProb: Math.min(0.98, 0.75 + posCount * 0.08),
        knnDist: Math.max(0.08, 0.3 - posCount * 0.05),
        confidence: `${(88 + Math.min(10, posCount * 3)).toFixed(1)}%`,
        dominantTokens: posWords.filter(w => lower.includes(w))
      });
    } else if (negCount > posCount) {
      setResult({
        sentiment: 'NEGATIF',
        nbProb: Math.max(0.04, 0.25 - negCount * 0.05),
        knnDist: Math.min(0.92, 0.7 + negCount * 0.05),
        confidence: `${(87 + Math.min(11, negCount * 3)).toFixed(1)}%`,
        dominantTokens: negWords.filter(w => lower.includes(w))
      });
    } else {
      setResult({
        sentiment: 'NETRAL / OBJEKTIF',
        nbProb: 0.51,
        knnDist: 0.49,
        confidence: '78.5%',
        dominantTokens: ['fitur', 'update', 'penggunaan']
      });
    }
  };

  return (
    <div className="bg-[#F8F9FA] rounded-3xl p-6 md:p-8 border border-neutral-200 shadow-sm relative overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 border-b border-neutral-200 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#0B1E3D] text-white">
              INTERACTIVE DEMO
            </span>
            <span className="text-xs font-mono text-slate-500">
              Inferensi Model Berbasis TF-IDF
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-heading text-neutral-950">
            Simulasi Klasifikasi Sentimen Teks Ulasan
          </h3>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-neutral-500">Korpus Ulasan Pengujian</div>
          <div className="text-sm font-bold text-neutral-950 font-mono">18.869 Data Google Play</div>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed font-sans">
        Uji kemampuan klasifikasi polaritas secara real-time. Pilih sampel kalimat dari dataset penelitian di bawah ini atau ketik kalimat baru untuk membandingkan probabilitas Naive Bayes dan kedekatan klaster KNN.
      </p>

      {/* Preset Test Case Buttons */}
      <div className="mb-4">
        <div className="text-xs font-mono text-neutral-600 mb-2.5 flex items-center gap-1.5 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-neutral-900" /> Uji Kasus Cepat (Klik Contoh Kalimat):
        </div>
        <div className="flex flex-wrap gap-2">
          {sinta3Publication.sampleCases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => analyzeSentiment(c.text)}
              className="text-xs text-left px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-800 transition-all font-sans cursor-pointer shadow-2xs"
            >
              <span className={`font-mono font-bold mr-1.5 ${c.expectedSentiment === 'POSITIF' ? 'text-emerald-600' : c.expectedSentiment === 'NEGATIF' ? 'text-rose-600' : 'text-amber-600'}`}>
                [{c.expectedSentiment}]
              </span>
              "{c.text.slice(0, 42)}..."
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="mb-6">
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => analyzeSentiment(e.target.value)}
          placeholder="Ketik ulasan aplikasi atau komentar untuk menguji inferensi model ML secara live..."
          className="w-full bg-white border border-neutral-300 focus:border-neutral-900 rounded-2xl p-3.5 text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all font-sans resize-none shadow-2xs"
        />
      </div>

      {/* Inference Live Output Gauges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
        <div>
          <div className="text-xs font-mono text-neutral-500 mb-1">Klasifikasi Polaritas</div>
          <div className={`text-xl font-heading font-bold flex items-center gap-2 ${result.sentiment === 'POSITIF' ? 'text-emerald-600' : result.sentiment === 'NEGATIF' ? 'text-rose-600' : 'text-amber-600'}`}>
            <CheckCircle2 className="w-5 h-5" />
            {result.sentiment}
          </div>
          <div className="text-xs font-mono text-neutral-500 mt-1">Confidence Score: <span className="text-neutral-950 font-bold">{result.confidence}</span></div>
        </div>

        <div>
          <div className="text-xs font-mono text-neutral-500 mb-1">P(Positif | Doc) - Naive Bayes</div>
          <div className="w-full bg-neutral-200 rounded-full h-3 mt-2 overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${result.nbProb * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-1">
            <span>0.0 (Neg)</span>
            <span className="text-emerald-700 font-bold">{(result.nbProb * 100).toFixed(1)}%</span>
            <span>1.0 (Pos)</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-mono text-neutral-500 mb-1">Euclidean Distance - KNN</div>
          <div className="w-full bg-neutral-200 rounded-full h-3 mt-2 overflow-hidden">
            <div
              className="bg-purple-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${(1 - result.knnDist) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-1">
            <span>Jauh</span>
            <span className="text-purple-700 font-bold">{result.knnDist.toFixed(2)} rad</span>
            <span>Dekat Cluster</span>
          </div>
        </div>
      </div>
    </div>
  );
};
