import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-gray-300 p-2 dark:bg-gray-700">
      <h1>
        <Link href="/">Azurlane-Webtool</Link>
      </h1>
    </header>
  );
};

export default Header;
