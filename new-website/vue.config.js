module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/capstone/projects/CS/2020/CartoCosmos-S20/"
      : "/"
};
