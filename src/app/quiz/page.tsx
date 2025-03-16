import Link from "next/link";

export default function Quiz() {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* navbar */}
      <div className="flex p-5 bg-yellow-200 w-3/4 text-black justify-between">
        <Link href={"/"} className={""}>Logo</Link>
      </div>
      <div className="flex flex-col h-screen bg-blue-300 w-3/4 items-center justify-center ">
        <h1>Quizy Page</h1>
      </div>
    </div>
  );
}

