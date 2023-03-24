const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const cloudinaryUploadImg = async (fileToUploads) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      fileToUploads,
      (result) => {
        resolve(
          {
            url: result.secure_url,
          },
          {
            resource_type: "auto",
          }
        );
      },
      { folder: "/digitic", use_filename: true }
    );
  });
};

// const cloudinaryUploadImg = cloudinary.uploader
//   .upload(fileToUploads, {
//     folder: "digitic",
//   })
//   .then((result) => {
// return {
//     {
//         url : result.secure_url
//     },
//     {
//         resource_type: "auto",
//     }
// }
//     console.log("cloudinaryUploadImg", cloudinaryUploadImg);
//     console.log(result);
//     console.log(result.secure_url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = cloudinaryUploadImg;
