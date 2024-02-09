import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // delete file from storage if upload failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};
const deleteOnCloudinary = async (fileUrl) => {
  try {
    fileUrl = fileUrl.split("/");
    let imageName = fileUrl[fileUrl.length - 1].split(".");
    const imageId = imageName[0];
    console.log(imageId);
    console.log(cloudinary.api);
    cloudinary.api
      .delete_resources(imageId, {
        type: "upload",
        resource_type: "image",
      })
      .then(console.log);
  } catch (error) {
    console.log("Error deleting old avatar from url");
  }
};
export { uploadOnCloudinary, deleteOnCloudinary };
