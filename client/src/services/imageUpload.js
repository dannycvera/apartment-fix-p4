import axios from "axios";

export const uploadImg = async (imgData) => {
  try {
    const data = new FormData();

    data.append("file", imgData);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
    const URLCloud = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_SERVER_NAME}/upload`;
    const resCloud = await axios.post(URLCloud, data);
    if (resCloud.data.secure_url) {
      return resCloud.data.secure_url;
    } else {
      return "failed upload";
    }
  } catch (error) {
    console.error(error);
  }
};
