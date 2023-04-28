const config = {
  app: {
    port: process.env.PORT || 5050,
  },
  db: {
    uri: process.env.MONGODB_URI || "mongodb+srv://B2017044:EGXa8Mwc@cluster0.aiiqg4k.mongodb.net/Movies",
  },
  JWT_SECRET: "" + process.env.JWT_SECRET
  
};


module.exports = config;
