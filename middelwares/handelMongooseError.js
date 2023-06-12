const handelMongooseError = (error, data, next) => {
  const { code, name } = error;

   error.status = (code === 1100 && name === "MongoServerError") ? 409 : 400;
  next();
}

module.exports = handelMongooseError;

