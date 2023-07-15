import Link from "next/link";

export default function Home() {
  return (
    <main className="p-20">
      <h1>List</h1>
      <Link className="px-3 py-1 bg-blue-500 text-white rounded" href="/insert">
        Tambah
      </Link>
    </main>
  );
}
