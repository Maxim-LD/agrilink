import Link from "next/link";
import { ArrowRight, Leaf, ShoppingBasket, Store, Smartphone, BrainCircuit, Activity, Wallet, ShieldCheck, Cpu, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#081008] text-slate-200 overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* ── Navbar ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#081008]/80 backdrop-blur-md border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/40">
              <Leaf className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">AgriLink</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#ecosystem" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition">Ecosystem</Link>
            <Link href="#technology" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition">Technology</Link>
            <Link href="/login" className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">The SMS-to-Market Platform</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Turning every farmer's phone into a <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">full-stack marketplace.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-emerald-100/60 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            No smartphone. No internet. No middleman. Connecting rural farmers, aggregators, dealers, and corporate buyers across Nigeria's agricultural value chain.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#ecosystem" className="px-8 py-4 rounded-2xl bg-white text-[#081008] font-extrabold text-base hover:bg-emerald-50 transition flex items-center gap-2 group">
              Explore the Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: "40-50%", label: "Post-harvest loss eliminated for matched produce" },
            { value: "60M+", label: "Smallholder farmers connected via basic SMS" },
            { value: "70%", label: "Waste earnings automatically locked for inputs" }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md text-center hover:bg-white/10 transition duration-500">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-emerald-100/50 uppercase tracking-wide leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ecosystem Section ── */}
      <section id="ecosystem" className="py-24 px-6 bg-[#0B150B] relative border-y border-emerald-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3">The Architecture</h2>
            <h3 className="text-4xl font-black text-white tracking-tight">Four Players. One Supply Chain.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aggregator */}
            <div className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-[#112111] to-[#0A140A] border border-emerald-900/40 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 ring-1 ring-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Leaf className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Field Aggregator</h4>
                <p className="text-sm text-emerald-100/60 leading-relaxed mb-8 min-h-[60px]">
                  Log harvests and crop residue directly from the field. Auto-generate QR tickets and match with factory demand instantly.
                </p>
                <Link href="/aggregator/onboarding" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:text-emerald-300">
                  Join as Aggregator <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Corporate Buyer */}
            <div className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-[#0F1C28] to-[#091017] border border-blue-900/40 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 ring-1 ring-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                  <ShoppingBasket className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Corporate Buyer</h4>
                <p className="text-sm text-blue-100/60 leading-relaxed mb-8 min-h-[60px]">
                  Factories and restaurants. Set standing demand orders, confirm matches, structure invoicing, and scan QR receipts.
                </p>
                <Link href="/buyer/onboarding" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300">
                  Join as Corporate Buyer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Agro-Dealer */}
            <div className="group relative p-8 rounded-[2rem] bg-gradient-to-b from-[#161229] to-[#0D0B18] border border-indigo-900/40 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 ring-1 ring-indigo-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Store className="w-7 h-7 text-indigo-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Agro-Dealer</h4>
                <p className="text-sm text-indigo-100/60 leading-relaxed mb-8 min-h-[60px]">
                  Validate farmer OTP codes at the counter to supply seeds and fertilizer against locked Agri-Wallet credits.
                </p>
                <Link href="/dealer/onboarding" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 group-hover:text-indigo-300">
                  Join as Agro-Dealer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-2xl bg-[#142A14] border border-emerald-800/40 flex items-start gap-4">
             <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-1">
               <Smartphone className="w-5 h-5" />
             </div>
             <div>
               <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">What about the Farmer?</h4>
               <p className="text-sm text-emerald-100/70 leading-relaxed">
                 The farmer is the 4th player, but they don't need an app. They operate entirely via standard SMS, checking balances and initiating redemptions with simple text commands.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* ── Feature 1: SMS & Dual Wallet ── */}
      <section id="technology" className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3">Financial Inclusion</h2>
              <h3 className="text-4xl font-black text-white tracking-tight leading-[1.1]">Dual Wallets. <br/>Smart Money.</h3>
            </div>
            
            <p className="text-lg text-emerald-100/60 leading-relaxed">
              Every farmer has two wallets that serve two different life needs. No smartphone required. Controlled entirely via SMS.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center ring-1 ring-emerald-500/30">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Agri-Wallet (Locked)</h4>
                  <p className="text-sm text-emerald-100/60 leading-relaxed">
                    Funded by 70% of every agri-waste sale. Locked strictly for farming inputs. Redeemable only at verified Agro-Dealers for seeds, fertilizer, and tools. Guaranteed next-season input fund.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center ring-1 ring-indigo-500/30">
                  <Wallet className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Cash Wallet (Unlocked)</h4>
                  <p className="text-sm text-emerald-100/60 leading-relaxed">
                    100% of fresh produce and 30% of agri-waste sales land here. Spend freely. Withdraw instantly via OPay or Moniepoint. Covers harvest transport and household costs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative bg-[#111] border-[8px] border-[#222] rounded-[3rem] p-4 shadow-2xl h-[600px] flex flex-col">
              <div className="w-16 h-1 bg-[#333] rounded-full mx-auto mb-6" />
              <div className="flex-1 bg-[#d4f0d4] rounded-xl p-4 font-mono text-[#003300] overflow-hidden flex flex-col shadow-inner">
                <div className="text-xs border-b border-[#003300]/20 pb-2 mb-4 flex justify-between">
                  <span>14:30</span>
                  <span>📶 🔋</span>
                </div>
                <div className="space-y-4 text-sm flex-1">
                  <div className="bg-[#b3dcb3] p-3 rounded-lg rounded-tl-none w-5/6 shadow-sm">
                    AgriLink: You received N4,200 into Agri-Wallet & N1,800 into Cash Wallet.
                  </div>
                  <div className="bg-[#fff] p-3 rounded-lg rounded-tr-none w-2/3 self-end shadow-sm border border-[#b3dcb3]">
                    BAL
                  </div>
                  <div className="bg-[#b3dcb3] p-3 rounded-lg rounded-tl-none w-5/6 shadow-sm">
                    Agri-Wallet: N42,000<br/>Cash Wallet: N5,400<br/>Reply REDEEM [AMT] [CODE]
                  </div>
                </div>
              </div>
              <div className="h-48 mt-4 grid grid-cols-3 gap-2 px-2 pb-2">
                {Array.from({length: 12}).map((_, i) => (
                  <div key={i} className="bg-[#222] rounded-lg border-b-2 border-[#111]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature 2: AI Matching Engine ── */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0B150B] to-[#081008] border-t border-emerald-900/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3">Waste to Wealth</h2>
              <h3 className="text-4xl font-black text-white tracking-tight leading-[1.1]">AI Matching Engine. <br/>Scale with Intelligence.</h3>
            </div>
            
            <p className="text-lg text-emerald-100/60 leading-relaxed">
              Supply meets demand in minutes, not days. The engine routes fresh produce and agri-waste to the best buyers using deterministic rules that graduate to learned models.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <MapPin className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-white font-bold mb-1">Proximity Score</h4>
                <p className="text-xs text-emerald-100/50">GPS distance from log to buyer accounts for 40% of the match.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <Activity className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-white font-bold mb-1">Quantity Fit</h4>
                <p className="text-xs text-emerald-100/50">Supply weight vs. buyer minimum requirements (30%).</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <BrainCircuit className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-white font-bold mb-1">Demand History</h4>
                <p className="text-xs text-emerald-100/50">Buyer's historical fulfillment track record (30%).</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                <Cpu className="w-6 h-6 text-red-400 mb-3" />
                <h4 className="text-white font-bold mb-1">Urgency Multiplier</h4>
                <p className="text-xs text-red-100/70">Red-tier spoilage (under 12hrs) boosts match priority dramatically.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="relative p-8 rounded-3xl bg-[#0a120a] border border-emerald-900/50 shadow-2xl">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400">1</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Aggregator Logs Waste</h5>
                    <p className="text-xs text-emerald-100/50">GPS + Photo generates QR ticket.</p>
                  </div>
                </div>
                
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500/50 to-emerald-500/10 mx-auto rounded-full" />
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400">2</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">AI Maps to Factory</h5>
                    <p className="text-xs text-emerald-100/50">10% advance payout released instantly.</p>
                  </div>
                </div>
                
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500/30 to-emerald-500/10 mx-auto rounded-full" />
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400">3</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Factory Scans QR</h5>
                    <p className="text-xs text-emerald-100/50">Physical receipt confirms goods-in.</p>
                  </div>
                </div>

                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 mx-auto rounded-full" />
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400">4</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Farmer Payout Split</h5>
                    <p className="text-xs text-emerald-100/50">70% to Agri-Wallet, 30% to Cash Wallet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-emerald-900/30 bg-[#060B06] py-12 px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 mb-4 ring-1 ring-emerald-500/30">
          <Leaf className="w-6 h-6 text-emerald-500" />
        </div>
        <p className="text-sm font-bold text-white tracking-wide">AGRILINK PLATFORM</p>
        <p className="mt-2 text-xs text-emerald-100/40">Powered by Team AERM · Built for rural Nigeria</p>
      </footer>
    </main>
  );
}

