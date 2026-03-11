function errorHandler(err, req, res, next) {
  console.error("[ERROR]", err.message);
  return res.status(err.status || 500).json({
    message: err.message || "Erro interno no servidor"
  });
}
module.exports = { errorHandler };
