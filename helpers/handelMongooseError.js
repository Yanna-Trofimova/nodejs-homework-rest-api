const handelMongooseError = (error, data, next) => {
  const { name, code } = error;

   error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next();
}


// const handleMongooseError = (error, data, next) => {
//   const { name, code } = error;
//   const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
//   error.status = status;
//   next();
// };

module.exports = handelMongooseError;

