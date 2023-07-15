import uploadImage from "@/libs/uploadImage";

export default function handler(req, res) {
  if (req.method !== "POST") res.status(401).end();

  const { data } = req.body;

  uploadImage(data);

  res.json({ msg: "berhasil" });
}
