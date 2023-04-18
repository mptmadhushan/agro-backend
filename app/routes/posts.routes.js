module.exports = (app) => {
  const posts = require("../controllers/posts.controller");

  var router = require("express").Router();


  router.post("/add", posts.createPost);
  router.get("/getAll", posts.findAll);

  router.get("/findPostById/:postId", posts.findPostById);

  app.use("/api/post", router);
};
