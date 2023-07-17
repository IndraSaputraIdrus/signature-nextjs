import Link from "next/link";
import { useEffect, useState } from "react";
import { database } from "@/firebase";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const dbInstance = collection(database, "karyawan");

  const router = useRouter();

  const deleteData = async (id) => {
    try {
      const collectionById = doc(database, "karyawan", id);
      await deleteDoc(collectionById);

      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    const result = await getDocs(dbInstance);
    setData(result.docs.map((item) => ({ ...item.data(), id: item.id })));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="p-5 sm:p-20">
      <h1 className="text-3xl mb-2 font-semibold">Table Hutang</h1>
      <Link
        className="inline-block mb-3 px-3 py-1 bg-blue-500 text-white rounded"
        href="/insert"
      >
        Tambah
      </Link>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-slate-800 text-white divide-x">
            <th className="w-1/4 px-3 text-center">Name</th>
            <th className="w-1/4 px-3 text-center">Barang</th>
            <th className="w-1/4 px-3 text-center">Date</th>
            <th className="w-1/4 px-3 text-center">Sign</th>
            <th className="w-1/4 px-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            data.map((karyawan) => (
              <tr key={karyawan.tanda_tangan} className="divide-x">
                <td className="mt-1 px-3 text-center">{karyawan.nama}</td>
                <td className="mt-1 px-3 text-center">{karyawan.barang}</td>
                <td className="mt-1 px-3 text-center">{karyawan.tanggal}</td>
                <td className="mt-1 px-3 text-center">
                  <img
                    src={`upload/${karyawan.tanda_tangan}`}
                    className="inline-block h-7 mt-1 object-cover"
                  />
                </td>
                <td className="mt-1 px-3 text-center flex justify-center items-center space-x-2">
                  <button
                    onClick={() => deleteData(karyawan.id)}
                    className="bg-red-500 text-white px-3 rounded"
                  >
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
