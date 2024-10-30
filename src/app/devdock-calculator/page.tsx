"use client";

import { Header, Footer } from "@/components/ui";
import { PreferenceField, AreaField } from "./_components";

export default function DevDockCalculatorPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header />
      <div className="flex w-full max-w-lg grow flex-col">
        <h1 className="my-10 text-4xl">開発ドック計算機</h1>
        <PreferenceField />
        <AreaField />
      </div>
      <Footer />
    </div>
  );
}
