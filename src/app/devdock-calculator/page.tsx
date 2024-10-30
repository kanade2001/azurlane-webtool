"use client";

import { Header, Footer } from "@/components/ui";
import { PreferenceField, AreaField } from "./_components";

export default function DevDockCalculatorPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header />
      <div className="flex w-full max-w-lg grow flex-col">
        <PreferenceField />
        <AreaField />
      </div>
      <Footer />
    </div>
  );
}
