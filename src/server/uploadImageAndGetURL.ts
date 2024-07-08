import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import "server-only";
import { env } from "~/env";

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});
export async function uploadImageAndGetURL({
  formData,
}: {
  formData: FormData;
}) {
  const file = formData.get("imageURL") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const result: UploadApiResponse | undefined = await new Promise(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { upload_preset: "Portfolio" },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          },
        )
        .end(buffer);
    },
  );
  return result?.secure_url;
}
