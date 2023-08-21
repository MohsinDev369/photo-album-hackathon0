'use server'
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function SetAsFavorite(publicId: string) {
    await cloudinary.v2.uploader.add_tag("fav", [publicId]);
    revalidatePath('/gallery')
    
}