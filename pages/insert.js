import SignatureCanvas from "react-signature-canvas";
import { Inter } from "next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const canvasRef = useRef();

  const clear = () => {
    canvasRef.current.clear();
  };

  const submit = async () => {
    const data = canvasRef.current.toDataURL("image/jpeg", 0.5);

    const req = await fetch("/api/signature", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const res = await req.json();
    clear();
    return alert(res.msg);
  };

  return (
    <main className={`${inter.className} p-20 space-y-4`}>
      <h1 className="font-semibold text-2xl text-center max-w-[300px]">Add</h1>
      <div className="flex flex-col max-w-[300px]">
        <label htmlFor="nama">Nama: </label>
        <input id="nama" className="border rounded-md px-3 py-1 mt-1" />
      </div>
      <div className="flex flex-col max-w-[300px]">
        <label htmlFor="Barang">Barang: </label>
        <input id="Barang" className="border rounded-md px-3 py-1 mt-1" />
      </div>
      <div>
        <label>Tanda tangan:</label>
        <SignatureCanvas
          backgroundColor="rgb(255,255,255)"
          ref={canvasRef}
          canvasProps={{
            width: 300,
            height: 150,
            className: "mt-1 border border-black rounded-xl",
          }}
        />
      </div>
      <div className="space-x-3">
        <button
          onClick={clear}
          className="px-3 py-1 bg-red-500 rounded text-white"
        >
          Clear
        </button>
        <button
          onClick={submit}
          className="px-3 py-1 bg-green-500 rounded text-white"
        >
          Submit
        </button>
      </div>
    </main>
  );
}
