import { database } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "GET" || !req.query.id) return res.status(401).end();

  const { id } = req.query;

  const collectionById = doc(database, "karyawan", id);

  try {
    await deleteDoc(collectionById);
    res.json({ msg: "berhasil" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "gagal" });
  }
}
