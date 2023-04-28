const config = {
  app: {
    port: process.env.PORT || 5050,
  },
  db: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Movies",
  },
  JWT_SECRET: "" + process.env.JWT_SECRET
  
};


module.exports = config;
