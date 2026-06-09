import React, { useState } from 'react';

function Header() {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white text-base font-bold">✙</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">MediLink Hub</span>
        </div>
        <span className="bg-slate-100 text-slate-700 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md border border-slate-200/60">
          NGO Portal v1.0
        </span>
      </div>
    </header>
  );
}

function AiTriage({ message }: { message: string }) {
  const text = message.toLowerCase().trim();
  if (!text) return null;

  let category = 'General';
  let title = '🤖 Auto-Categorization';
  let bgClass = 'bg-slate-50 border-slate-200 text-slate-800';
  let badgeClass = 'bg-slate-200 text-slate-700';
  let summary = 'Analyzing your input... Form will route to general coordination.';
  let advisory = 'Expected response time: Under 2 hours.';

  if (text.match(/(pain|emergency|severe|chest|bleeding|breathing|accident|heart|stroke)/)) {
    category = 'Urgent';
    title = '🚨 High-Urgency System Alert';
    bgClass = 'bg-rose-50 border-rose-200 text-rose-900';
    badgeClass = 'bg-rose-100 text-rose-700';
    summary = 'Critical symptoms or acute healthcare needs detected.';
    advisory = 'Disclaimer: If this is an immediate life-threatening situation, please call local emergency services instantly.';
  } else if (text.match(/(volunteer|help|join|donate|contribute|hours|skills|drive|deliver)/)) {
    category = 'Volunteer';
    title = '💡 Volunteer Matching Engine';
    bgClass = 'bg-indigo-50 border-indigo-200 text-indigo-900';
    badgeClass = 'bg-indigo-100 text-indigo-700';
    summary = 'Support offer detected. System will queue this to our onboarding team.';
    advisory = 'Action: You will receive an automated logistics handbook post-submission.';
  }

  return (
    <div className={`p-4 rounded-xl border text-xs leading-relaxed transition-all ${bgClass}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold tracking-wide uppercase">{title}</span>
        <span className={`px-2 py-0.5 font-bold rounded text-[10px] uppercase tracking-wider ${badgeClass}`}>
          {category}
        </span>
      </div>
      <p className="font-medium text-slate-700 mb-1">{summary}</p>
      <p className="opacity-80 italic">{advisory}</p>
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', role: 'patient', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc] font-sans antialiased text-slate-900">
      <Header />
      <main className="flex-1 max-w-xl w-full mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Intelligent Support Intake</h1>
          <p className="mt-2 text-sm text-slate-500">Connecting resource seekers with verified community relief volunteers.</p>
        </div>

        {submitted ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-lg">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-lg font-bold border border-emerald-100 mb-4">✓</div>
            <h3 className="text-lg font-bold text-slate-900">Submission Route Secured</h3>
            <p className="text-slate-500 mt-2 text-xs">Thank you, {formData.name}. Your entry has been logged and routed successfully.</p>
            <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', role: 'patient', message: '' }); }} className="mt-6 text-xs text-indigo-600 font-semibold uppercase tracking-wide">← New Entry</button>
          </div>
        ) : (
          <div className="bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Registry Profile</label>
                <div className="grid grid-cols-2 gap-3 p-1 bg-slate-50 rounded-xl border border-slate-200/40">
                  <button type="button" onClick={() => setFormData({ ...formData, role: 'patient' })} className={`py-2 text-xs font-semibold rounded-lg ${formData.role === 'patient' ? 'bg-white text-slate-900 shadow-sm border' : 'text-slate-500'}`}>Patient</button>
                  <button type="button" onClick={() => setFormData({ ...formData, role: 'volunteer' })} className={`py-2 text-xs font-semibold rounded-lg ${formData.role === 'volunteer' ? 'bg-white text-slate-900 shadow-sm border' : 'text-slate-500'}`}>Volunteer</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/10" placeholder="Alex Chen" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/10" placeholder="alex@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Details</label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/10 resize-none" placeholder="Type info here... (e.g. 'severe pain' or 'want to volunteer')" />
              </div>

              <AiTriage message={formData.message} />

              <button type="submit" disabled={isSubmitting} className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs tracking-wide uppercase transition disabled:opacity-40">
                {isSubmitting ? 'Processing...' : 'Transmit Entry'}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}