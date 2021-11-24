module.exports = {
  reactStrictMode: true,
  target: "serverless",

  //ngesolve problem image
  images: {
        loader: "cloudinary",
        path: "https://res.cloudinary.com/CLOUD_NAME/image/upload/"
  },
}
