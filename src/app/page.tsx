import Link from "next/link";

import { Header, Footer } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header />
      <div className="flex w-full max-w-lg grow flex-col">
        <h1 className="my-10 text-center text-4xl">アズールレーン WebTool</h1>
        <ul className="flex w-full flex-col items-center gap-8">
          <li className="my-2 w-full rounded-lg border border-gray-500 p-2">
            <Link href="/exp-calculator" className="flex flex-col gap-4">
              <h2 className="text-xl">周回経験値計算機</h2>
              <p>
                現在のレベル・経験値と目標のレベル・経験値から、必要な周回数を計算します。
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
