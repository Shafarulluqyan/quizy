import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-5 w-3/4 font-bold justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </Link>
      <Link href="/quiz" className="bg-green-500 py-2 px-4 rounded-md">
        {"=> Take a Quiz"}
      </Link>
    </div>
  );
}
