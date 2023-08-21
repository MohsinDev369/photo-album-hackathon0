"use client";
import { Heart } from "../../../node_modules/lucide-react";
import { CldImage } from "next-cloudinary";
import { SetAsFavorite } from "./actions";
import { useTransition } from "react";
export function CloudinaryImage(props: any & { publicId: string }) {
  const [transition, startTransition] = useTransition();
  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart
        className="absolute top-2 right-2"
        onClick={() => {
          startTransition(() => {
            SetAsFavorite(props.publicId);
          });
        }}
      />
    </div>
  );
}
