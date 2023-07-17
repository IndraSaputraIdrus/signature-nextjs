import uploadImage from "@/libs/uploadImage";
import moment from "moment";
import fs from "fs";

export default function handler(req, res) {
  if (req.method !== "POST") res.status(401).end();

  const { name, barang, image, date } = req.body;

  const imageName = uploadImage(image);

  const karyawan = fs.readFileSync("public/karyawan.json", "utf-8");
  const data = JSON.parse(karyawan);

  const result = {
    name,
    barang,
    imageName,
    date: moment(date).format("DD-MM-YYYY"),
  };

  data.push(result);

  fs.writeFileSync("public/karyawan.json", JSON.stringify(data));

  res.json({ msg: "berhasil" });
}
