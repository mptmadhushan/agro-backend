module.exports = (app) => {
  const tb_user = require("../controllers/tb_users.controller");

  var router = require("express").Router();

  router.get("/getAll", tb_user.findAll);
  app.use("/api/tbuser", router);
};
