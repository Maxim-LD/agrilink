"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Building, CheckCircle2, ChevronRight, MapPin, Package, Phone, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { registerBuyer } from "@/lib/buyer/api";

export function BuyerRegistrationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    companyName: "",
    buyerType: "factory",
    address: "",
    contactName: "",
    contactPhone: "",
    logisticsMode: "mode_a",
    latitude: 9.0820,
    longitude: 8.6753
  });

  function updateForm(field: string, value: string | number) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await registerBuyer(formData);
      if (success) {
        setStep(4); // Success step
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
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Corporate Buyer Portal</p>
        <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
          {step === 4 ? "Registration Complete" : "Create Account"}
        </h1>
        {step < 4 && (
          <div className="mt-4 flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${step >= i ? "bg-blue-600" : "bg-slate-200"}`} />
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
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
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Company Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  placeholder="ACME Foods Ltd."
                  value={formData.companyName}
                  onChange={(e) => updateForm("companyName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Buyer Type</label>
              <select
                className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                value={formData.buyerType}
                onChange={(e) => updateForm("buyerType", e.target.value)}
              >
                <option value="factory">Factory</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">HQ Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  placeholder="123 Industrial Way, Lagos"
                  value={formData.address}
                  onChange={(e) => updateForm("address", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Logistics Mode</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={`rounded-xl border p-4 text-left transition ${
                    formData.logisticsMode === "mode_a"
                      ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                  onClick={() => updateForm("logisticsMode", "mode_a")}
                >
                  <Package className={`mb-2 h-6 w-6 ${formData.logisticsMode === "mode_a" ? "text-blue-600" : "text-slate-400"}`} />
                  <p className="text-sm font-bold text-slate-900">Mode A</p>
                  <p className="mt-1 text-xs text-slate-500">Platform handles logistics</p>
                </button>
                <button
                  type="button"
                  className={`rounded-xl border p-4 text-left transition ${
                    formData.logisticsMode === "mode_b"
                      ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                  onClick={() => updateForm("logisticsMode", "mode_b")}
                >
                  <Building className={`mb-2 h-6 w-6 ${formData.logisticsMode === "mode_b" ? "text-blue-600" : "text-slate-400"}`} />
                  <p className="text-sm font-bold text-slate-900">Mode B</p>
                  <p className="mt-1 text-xs text-slate-500">Self-arranged logistics</p>
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Procurement Contact Name</label>
              <input
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="Jane Doe"
                value={formData.contactName}
                onChange={(e) => updateForm("contactName", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase text-slate-500">Procurement Contact Phone</label>
              <input
                required
                type="tel"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="+234 800 000 0001"
                value={formData.contactPhone}
                onChange={(e) => updateForm("contactPhone", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center animate-in zoom-in-95">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
            <h2 className="mt-4 text-lg font-bold text-emerald-900">Application Submitted</h2>
            <p className="mt-2 text-sm leading-6 text-emerald-700">
              Your corporate buyer account has been registered successfully. An admin will review your application shortly.
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

        {step < 4 && (
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
              className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {step === 3 ? (
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
