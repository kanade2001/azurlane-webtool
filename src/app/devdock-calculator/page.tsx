"use client";

import { useState, useEffect } from "react";

import { Header, Footer } from "@/components/ui";
import { PreferenceField, AreaField, ResultField } from "./_components";

export default function DevDockCalculatorPage() {
  const [targetexp, setTargetExp] = useState<number>(0);
  const [obtainedExp, setObtainedExp] = useState<number[]>([0, 0]);
  const [count, setCount] = useState<number[]>([0, 0]);

  useEffect(() => {
    setCount([
      Math.ceil(targetexp / obtainedExp[1]),
      Math.ceil(targetexp / obtainedExp[0]),
    ]);
  }, [targetexp, obtainedExp]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header />
      <div className="flex w-full max-w-lg grow flex-col">
        <h1 className="my-10 text-4xl">開発ドック計算機</h1>
        <PreferenceField
          setTargetExp={(targetexp) => setTargetExp(targetexp)}
        />
        <AreaField setObtainedExp={(exp) => setObtainedExp(exp)} />
        <ResultField count={count} />
      </div>
      <Footer />
    </div>
  );
}
