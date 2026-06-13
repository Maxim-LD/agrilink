import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";
import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a3a1a] via-[#2C4A1E] to-[#1a2e0a] flex flex-col px-4 py-8 relative">
      <div className="absolute top-6 left-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300">
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>
      </div>

      <div className="mx-auto w-full max-w-sm mt-16 flex-1">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-400/20 mb-5 ring-1 ring-emerald-400/30">
            <Leaf className="w-8 h-8 text-emerald-300" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Welcome back</h1>
          <p className="mt-2 text-white/50 text-sm max-w-xs mx-auto leading-relaxed">
            Enter your credentials to access your AgriLink dashboard.
          </p>
        </div>

        <LoginForm />

        <p className="mt-12 text-center text-sm text-white/50">
          Don't have an account? Choose a portal on the{" "}
          <Link href="/" className="font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
            home page
          </Link>{" "}
          to register.
        </p>
      </div>
    </main>
  );
}
