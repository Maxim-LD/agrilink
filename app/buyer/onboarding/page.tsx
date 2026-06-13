import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BuyerRegistrationForm } from "@/features/buyer/components/buyer-registration-form";

export default function BuyerOnboardingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col px-4 py-8 relative">
      <div className="absolute top-6 left-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-700">
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>
      </div>

      <div className="mt-12 flex-1 w-full">
        <BuyerRegistrationForm />
      </div>
    </main>
  );
}
