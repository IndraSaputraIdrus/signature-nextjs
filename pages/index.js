import Link from "next/link";
import karyawan from "@/public/karyawan.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(karyawan);
    setLoading(false);
  });

  return (
    <main className="p-5 sm:p-20">
      <h1>List</h1>
      <Link
        className="inline-block mb-3 px-3 py-1 bg-blue-500 text-white rounded"
        href="/insert"
      >
        Tambah
      </Link>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-slate-800 text-white divide-x">
            <th className="w-1/4 px-3 text-center">Name</th>
            <th className="w-1/4 px-3 text-center">Date</th>
            <th className="w-1/4 px-3 text-center">Sign</th>
            <th className="w-1/4 px-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading && <p>loading...</p>}
          {!loading &&
            data.map((karyawan) => (
              <tr key={karyawan.imageName}>
                <td className="mt-1 px-3 text-center">{karyawan.name}</td>
                <td className="mt-1 px-3 text-center">{karyawan.date}</td>
                <td className="mt-1 px-3 text-center">
                  <img
                    src={`upload/${karyawan.imageName}`}
                    className="inline-block h-7 mt-1 object-cover"
                  />
                </td>
                <td className="mt-1 px-3 text-center flex justify-center items-center space-x-2">
                  <button className="bg-red-500 text-white px-3 rounded">
                    Delete
                  </button>
                  <button className="bg-green-500 text-white px-3 rounded">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
