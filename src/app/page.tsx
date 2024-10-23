import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <h1 className="m-10 text-4xl">アズールレーン WebTool</h1>
      <ul className="mx-10 flex w-full flex-col items-center gap-8 sm:items-start">
        <li className="my-2 w-full">
          <Link href="/exp-calculator">周回経験値計算機</Link>
        </li>
      </ul>
    </div>
  );
}
