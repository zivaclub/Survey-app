import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bolt, CheckCircle, ChevronRight, Timer, Award, BarChart3, Lightbulb, Users, Gauge, Dumbbell, User, Share2, TrendingUp } from 'lucide-react';
import { QUESTIONS } from './constants';
import { AppState } from './types';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = () => {
    if (username.trim()) {
      setAppState('survey');
    }
  };

  const submitToGoogleSheets = async (finalAnswers: Record<number, number>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          answers: finalAnswers,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setAppState('complete');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit your results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      submitToGoogleSheets(answers);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setAppState('landing');
    }
  };

  const handleSelect = (value: number) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[currentStep].id]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto relative overflow-hidden bg-background selection:bg-primary selection:text-on-primary">
      <Header onExit={() => setAppState('landing')} />
      
      <main className="flex-1 flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          {appState === 'landing' && (
            <LandingPage 
              key="landing" 
              onStart={handleStart} 
              username={username} 
              setUsername={setUsername} 
            />
          )}
          {appState === 'survey' && (
            <SurveyPage 
              key="survey"
              currentStep={currentStep}
              totalSteps={QUESTIONS.length}
              question={QUESTIONS[currentStep]}
              selectedAnswer={answers[QUESTIONS[currentStep].id]}
              onSelect={handleSelect}
              onNext={handleNext}
              onBack={handleBack}
              isSubmitting={isSubmitting}
            />
          )}
          {appState === 'complete' && (
            <CompletionPage key="complete" onReset={() => {
              setAppState('landing');
              setCurrentStep(0);
              setAnswers({});
              setUsername('');
            }} />
          )}
        </AnimatePresence>
      </main>

      {appState !== 'survey' && <BottomNav activeTab={appState === 'landing' ? 'today' : 'insights'} />}
      
      {/* Decorative Background Elements */}
      <div className="fixed -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/2 -left-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </div>
  );
}

function Header({ onExit }: { onExit: () => void }) {
  return (
    <header className="bg-surface-container-low text-primary shadow-[0_32px_32px_rgba(186,246,245,0.08)] flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Bolt className="w-6 h-6" />
        <h1 className="font-manrope font-black uppercase tracking-tight text-xl">Performance Pulse</h1>
      </div>
      <button 
        onClick={onExit}
        className="font-manrope font-extrabold uppercase tracking-tight hover:text-secondary transition-colors duration-200 active:scale-95 text-sm"
      >
        Save & Exit
      </button>
    </header>
  );
}

function LandingPage({ 
  onStart, 
  username, 
  setUsername 
}: { 
  onStart: () => void; 
  username: string; 
  setUsername: (val: string) => void;
  key?: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col pb-32"
    >
      <section className="relative w-full h-[530px] flex flex-col justify-end px-6 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcYCIh5ktFpcmwor1i27j3-52gFf5G468ZGL3GVrzWoJWkoe9g0xB-73jPZ8FMBGgy9z7F7a7FMpaRKwMCREH1vr9qpLWzC3CeLS2oHqrDD1VuRc1kfXsPK7LK7cMn2pJ1UferlqUVLVO8vJWsAybbt8prPrIZ-0BOjQ3hjBGhksbKVaA_-HnWnREdCH47xEMp77QfhHCkZoE0Eu9wLrHGB9kp6mPkofB-SK_yUvNRzPJHNtbsxhfuXegR9iTl0pkUyRprPc8e9aE" 
            alt="Athletic performance" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#2efd7c]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Live Pulse Research</span>
          </div>
          <h1 className="text-[3.5rem] font-black leading-[0.9] tracking-tighter mb-4 italic">
            FUEL THE <span className="text-primary">DATA</span><br />BEHIND THE <span className="text-secondary">PROS.</span>
          </h1>
          <p className="text-on-surface-variant max-w-[85%] leading-relaxed">
            Contribute your vitals to our elite sports analytics engine and unlock precision insights tailored for your physiology.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-8 relative z-20 space-y-4">
        <div className="glass-card p-6 rounded-lg border-l-2 border-primary">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
            Athlete Username
          </label>
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name..."
            className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-6 rounded-lg border-l-2 border-secondary flex flex-col justify-between h-40">
            <Timer className="text-secondary w-6 h-6" />
            <div>
              <div className="text-3xl font-black text-on-surface">7:00</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Estimated Time</div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-lg flex flex-col justify-between h-40">
            <Award className="text-primary w-6 h-6" />
            <div>
              <div className="text-3xl font-black text-on-surface">FREE</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Custom Report</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 flex flex-col items-center">
        <button 
          onClick={onStart}
          disabled={!username.trim()}
          className="w-full bg-gradient-to-r from-primary to-primary-container py-6 rounded-full text-on-primary font-black uppercase tracking-[0.15em] text-lg shadow-[0_20px_40px_rgba(80,244,227,0.2)] active:scale-95 transition-all mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Survey
        </button>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-60">
          Secure & Anonymous Data Collection
        </p>
      </section>
    </motion.div>
  );
}

function SurveyPage({ 
  currentStep, 
  totalSteps, 
  question, 
  selectedAnswer, 
  onSelect, 
  onNext, 
  onBack,
  isSubmitting
}: { 
  currentStep: number;
  totalSteps: number;
  question: typeof QUESTIONS[0];
  selectedAnswer?: number;
  onSelect: (val: number) => void;
  onNext: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  key?: string;
}) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      className="flex-1 flex flex-col px-6 pt-12 pb-32 mesh-gradient"
    >
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <span className="font-bold text-primary uppercase tracking-widest text-xs">Progress</span>
          <span className="font-extrabold text-on-surface text-lg">
            {currentStep + 1}<span className="text-on-surface-variant font-normal text-sm ml-1">/ {totalSteps}</span>
          </span>
        </div>
        <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-secondary to-primary shadow-[0_0_15px_rgba(80,244,227,0.4)]"
          />
        </div>
      </div>

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-on-surface-variant text-sm font-bold uppercase tracking-[0.2em]">{question.category}</h2>
          <p className="font-extrabold text-2xl leading-tight text-on-surface">
            {question.text}
          </p>
        </div>

        {question.highlight && (
          <div className="bg-surface-container-low rounded-lg p-8 border-l-4 border-secondary kinetic-glow">
            <p className="text-xl font-bold italic text-tertiary">
              "{question.highlight}"
            </p>
          </div>
        )}

        {question.image && (
          <div className="rounded-lg overflow-hidden h-40 relative group">
            <img 
              src={question.image} 
              alt="Context" 
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            {question.hint && (
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <Lightbulb className="text-secondary w-4 h-4" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{question.hint}</p>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((opt) => (
            <button 
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              disabled={isSubmitting}
              className={`flex items-center justify-between p-5 rounded-lg transition-all active:scale-[0.98] group ${
                selectedAnswer === opt.value 
                  ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_0_20px_rgba(80,244,227,0.3)] transform scale-[1.02]' 
                  : 'bg-surface-container-high border border-outline-variant/20 hover:border-primary/50'
              }`}
            >
              <span className={`font-bold ${selectedAnswer === opt.value ? 'text-on-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                {opt.label}
              </span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold transition-colors ${
                selectedAnswer === opt.value 
                  ? 'bg-on-primary/20 text-on-primary' 
                  : 'bg-surface-container-highest text-on-surface group-hover:bg-primary group-hover:text-on-primary'
              }`}>
                {opt.value}
              </div>
            </button>
          ))}
        </div>

        <div className="pt-8 flex gap-4">
          <button 
            onClick={onBack}
            disabled={isSubmitting}
            className="flex-1 py-4 px-6 rounded-full bg-surface-container-highest text-primary border border-outline-variant/30 font-bold uppercase tracking-widest text-xs transition-all hover:bg-surface-variant disabled:opacity-50"
          >
            Back
          </button>
          <button 
            onClick={onNext}
            disabled={!selectedAnswer || isSubmitting}
            className={`flex-[2] py-4 px-6 rounded-full font-black uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-all ${
              selectedAnswer && !isSubmitting
                ? 'bg-gradient-to-r from-secondary to-primary-container text-on-primary' 
                : 'bg-surface-variant text-on-surface-variant cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Submitting...' : (currentStep === totalSteps - 1 ? 'Finish' : 'Next Question')}
          </button>
        </div>
      </section>
    </motion.div>
  );
}

function CompletionPage({ onReset }: { onReset: () => void; key?: string }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-24 relative"
    >
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-xl" />
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-[0_0_30px_rgba(46,253,124,0.4)]">
          <CheckCircle className="text-on-primary w-12 h-12" />
        </div>
      </div>

      <h2 className="text-4xl font-extrabold tracking-tight mb-4 leading-tight text-center">
        Progress Saved & <br />
        <span className="text-secondary">Survey Complete!</span>
      </h2>
      <p className="text-on-surface-variant text-lg max-w-xs mx-auto text-center mb-12">
        Your performance data has been synchronized with the cloud.
      </p>

      <div className="w-full grid grid-cols-2 gap-4 mb-10">
        <div className="col-span-2 relative overflow-hidden rounded-lg bg-surface-container-high p-6 flex flex-col justify-between h-48">
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-secondary rounded-r-full" />
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-surface-variant text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">New Report Ready</span>
            <h3 className="text-2xl font-extrabold leading-tight mb-2 text-on-surface">Custom Performance Insights</h3>
            <p className="text-sm text-on-surface-variant">We've analyzed your results against 1,200 pro data points.</p>
          </div>
          <BarChart3 className="absolute right-[-20px] bottom-[-20px] w-32 h-32 text-primary opacity-20 rotate-12" />
        </div>

        <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2 relative group overflow-hidden">
          <Gauge className="text-primary w-5 h-5" />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Flow State</div>
            <div className="text-2xl font-extrabold text-on-surface">94%</div>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2 relative group overflow-hidden">
          <TrendingUp className="text-secondary w-5 h-5" />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Efficiency</div>
            <div className="text-2xl font-extrabold text-on-surface">+12.4</div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <button 
          onClick={onReset}
          className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-extrabold uppercase tracking-widest text-sm shadow-[0_15px_30px_rgba(80,244,227,0.3)] active:scale-[0.98] transition-all"
        >
          Back to Dashboard
        </button>
        <button className="w-full py-4 rounded-full bg-surface-container-highest border border-outline-variant/20 text-on-surface font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          <Share2 className="w-4 h-4" />
          Share Achievements
        </button>
      </div>
    </motion.div>
  );
}

function BottomNav({ activeTab }: { activeTab: 'today' | 'insights' | 'training' | 'profile' }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-background/80 backdrop-blur-xl bg-gradient-to-t from-surface-container-low to-transparent">
      <NavItem icon={<Gauge className="w-6 h-6" />} label="Today" active={activeTab === 'today'} />
      <NavItem icon={<BarChart3 className="w-6 h-6" />} label="Insights" active={activeTab === 'insights'} />
      <NavItem icon={<Dumbbell className="w-6 h-6" />} label="Training" active={activeTab === 'training'} />
      <NavItem icon={<User className="w-6 h-6" />} label="Profile" active={activeTab === 'profile'} />
    </nav>
  );
}

function NavItem({ icon, label, active }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex flex-col items-center justify-center p-3 transition-all active:scale-90 ${
      active 
        ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-[0_0_15px_rgba(80,244,227,0.4)]' 
        : 'text-on-surface-variant hover:text-primary'
    }`}>
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest mt-1">{label}</span>
    </button>
  );
}
