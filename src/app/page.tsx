"use client";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
type uploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <>
      <CldUploadButton
        onUpload={(result: any, widget) => setImageId(result.info?.public_id)}
        uploadPreset="bd7g6gou"
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
  </>
  );
}
