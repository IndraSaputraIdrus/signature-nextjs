import uploadImage from "@/libs/uploadImage";
import { database } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(401).end();

  const { nama, barang, tanda_tangan, tanggal } = req.body;

  const imageName = uploadImage(tanda_tangan);

  const result = {
    nama,
    barang,
    tanda_tangan: imageName,
    tanggal: moment(tanggal).format("DD-MM-YYYY"),
  };

  const dbInstance = collection(database, "karyawan");

  try {
    await addDoc(dbInstance, result);
    res.status(200).json({ msg: "berhasil" });
  } catch (error) {
    console.log(error);
  }
}
