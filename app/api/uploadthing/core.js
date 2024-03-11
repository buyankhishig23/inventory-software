import { createUploadthing} from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "1MB" }
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("File URL:", file.url,metadata);

    // return { fileUrl: file.url };
  })
};
