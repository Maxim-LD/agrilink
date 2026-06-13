"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, ChevronRight, Hash, MapPin, Phone, Store, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { registerDealer } from "@/lib/dealer/store";

export function DealerRegistrationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    shopName: "",
    dealerCode: "",
    zone: ""
  });

  function updateForm(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (step < 2) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await registerDealer(formData);
      if (success) {
        setStep(3); // Success step
      } else {
        setError("Registration failed. Please check your details and try again.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-700">Dealer Network</p>
        <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
          {step === 3 ? "Registration Complete" : "Agro-Dealer Sign Up"}
        </h1>
        {step < 3 && (
          <div className="mt-4 flex gap-2">
            {[1, 2].map((i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${step >= i ? "bg-indigo-600" : "bg-slate-200"}`} />
            ))}
          </div>
        )}
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Full Name</label>
              <div className="relative">
                <UserRound className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => updateForm("fullName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  type="tel"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Password</label>
              <div className="relative">
                <input
                  required
                  type="password"
                  minLength={6}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => updateForm("password", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Shop Name</label>
              <div className="relative">
                <Store className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  placeholder="Bello Agro Supplies"
                  value={formData.shopName}
                  onChange={(e) => updateForm("shopName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Dealer Code</label>
              <div className="relative">
                <Hash className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium uppercase outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  placeholder="DLR-XXXX"
                  value={formData.dealerCode}
                  onChange={(e) => updateForm("dealerCode", e.target.value.toUpperCase())}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Operating Zone</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  placeholder="Kano - Nassarawa LGA"
                  value={formData.zone}
                  onChange={(e) => updateForm("zone", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center animate-in zoom-in-95">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
            <h2 className="mt-4 text-lg font-bold text-emerald-900">Application Submitted</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-700">
              Your agro-dealer account has been registered. Our admin team will verify your shop location shortly.
            </p>
            <Button
              className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => router.push("/login")}
              type="button"
            >
              Go to Login
            </Button>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-xs font-medium text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {step < 3 && (
          <div className="flex gap-3">
            {step > 1 && (
              <Button
                type="button"
                variant="secondary"
                className="flex-1"
                onClick={() => setStep(step - 1)}
                disabled={isSubmitting}
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              className="flex-1 bg-indigo-600 text-white hover:bg-indigo-700"
              disabled={isSubmitting}
            >
              {step === 2 ? (
                isSubmitting ? "Submitting..." : "Complete Registration"
              ) : (
                <>
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
