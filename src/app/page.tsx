import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <ul className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <li>
          <Link href="/page1">Page1</Link>
        </li>
        <li>
          <Link href="/page2">Page 2</Link>
        </li>
      </ul>
    </div>
  );
}
