module.exports = {
  reactStrictMode: true,
  target: "serverless",
  images: {
        loader: "cloudinary",
        path: "https://res.cloudinary.com/CLOUD_NAME/image/upload/"
  },
}
