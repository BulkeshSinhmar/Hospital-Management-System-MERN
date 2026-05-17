import { config } from "dotenv";

// Load env FIRST
config({ path: "./env/config.env" });

import cloudinary from "cloudinary";

// Dynamic import AFTER dotenv
const { default: app } = await import("./app.js");

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});