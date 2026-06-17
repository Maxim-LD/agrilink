"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, KeyRound, Phone, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/lib/auth/api";

export function LoginForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!phone || !password) {
      setError("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      // In a real scenario we might format the phone number appropriately
      const data = await loginUser({ phone, password });

      if (data && data.token) {
        const role = data.user.role?.toLowerCase();
        // Route based on role
        if (role === "aggregator") {
          router.push("/aggregator/home");
        } else if (role === "buyer") {
          router.push("/buyer/dashboard");
        } else if (role === "dealer") {
          router.push("/dealer/home");
        } else if (role === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/");
        }
      } else {
        setError("Invalid credentials or server unreachable. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-white/50">
            Phone Number
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Phone className="h-5 w-5 text-emerald-600/50" />
            </div>
            <input
              type="tel"
              className="block w-full rounded-xl border border-emerald-900/40 bg-[#142A14]/60 py-3 pl-10 pr-3 text-white placeholder-white/30 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"
              placeholder="+234 800 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-white/50">
            Password
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <KeyRound className="h-5 w-5 text-emerald-600/50" />
            </div>
            <input
              type="password"
              className="block w-full rounded-xl border border-emerald-900/40 bg-[#142A14]/60 py-3 pl-10 pr-3 text-white placeholder-white/30 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {error ? (
        <div className="flex items-start gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-xs font-medium leading-5 text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </div>
      ) : null}

      <Button
        className="min-h-12 w-full rounded-xl bg-emerald-600 font-bold text-white hover:bg-emerald-500"
        type="submit"
        disabled={isSubmitting}
      >
        <UserCircle className="mr-2 h-5 w-5" />
        {isSubmitting ? "Signing in..." : "Sign in to account"}
      </Button>
    </form>
  );
}
