const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const SERVER_ERROR = 500;

module.exports = {
  BAD_REQUEST,
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
  SERVER_ERROR,
  handleCatch
}


function handleCatch (err) {
  console.error(err);
  if (err.name === "ValidationError") {
    res.status(BAD_REQUEST).send({ message: err.message });
  } else if (err.name === "DocumentNotFoundError") {
    res.status(NOT_FOUND).send({ message: err.message });
  } else if (err.name === "CastError") {
    res.status(NOT_FOUND).send({ message: err.message });
  }

  return res.status(SERVER_ERROR).send({ message: err.message });
};