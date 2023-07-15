import fs from "fs";

export default function uploadImage(data) {
  const newData = data.split("base64,")[1];

  const buffer = Buffer.from(newData, "base64");

  const fileName = `${Date.now()}.jpg`;

  fs.writeFileSync(`public/upload/${fileName}`, buffer);
}
