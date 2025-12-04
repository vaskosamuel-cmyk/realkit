import React, { useState } from 'react';
import { generateRealEstateScript } from '../services/aiService';
import { ScriptType } from '../types';
import { Bot, RefreshCw, Copy, Check } from 'lucide-react';
import { CONTENT } from '../constants';

export const AiDemo: React.FC = () => {
  const t = CONTENT.aiDemo;
  const [selectedType, setSelectedType] = useState<ScriptType>(ScriptType.EXPIRED);
  const [generatedScript, setGeneratedScript] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setCopied(false);
    const script = await generateRealEstateScript(selectedType, t.promptContext);
    setGeneratedScript(script);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="preview" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
              <Bot size={14} />
              {t.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.headline}</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              {t.description}
            </p>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">{t.label}</label>
              <div className="flex flex-wrap gap-2">
                {Object.values(ScriptType).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedType === type 
                        ? 'bg-slate-900 text-white shadow-lg' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? <RefreshCw className="animate-spin" size={18} /> : <Bot size={18} />}
                {isLoading ? t.generating : t.generateButton}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl transform rotate-3 scale-105 -z-10" />
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 min-h-[300px] flex flex-col">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.previewLabel}</span>
                {generatedScript && (
                  <button 
                    onClick={copyToClipboard}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                )}
              </div>
              
              <div className="flex-1">
                {isLoading ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-100 rounded w-full"></div>
                    <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-100 rounded w-4/5"></div>
                  </div>
                ) : generatedScript ? (
                  <p className="text-slate-800 text-lg leading-relaxed whitespace-pre-wrap font-medium">
                    "{generatedScript}"
                  </p>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400">
                    <Bot size={48} className="mb-4 opacity-20" />
                    <p className="text-center">{t.emptyState}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};