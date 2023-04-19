const db = require("../models");
const Posts = db.posts;


exports.createPost = async (req, res) => {
  console.log(
    "🚀 ~ fil: posts.controller.js ~ line 7 ~ exports.createPost= ~ req",
    req.files
  );
  await upload(req, res);

  if (req.files == undefined) {
    return res.status(400).send({ message: "Please upload a file!" });
  }
  const photo = {
    name:req.body.name,
    lat:req.body.lat,
    lon:req.body.lon,
  
  };

  // Save Tutorial in the database
  Posts.create(photo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
exports.findPostById = (req, res) => {
  const postId = req.params.postId;

  return Posts.findByPk(postId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  return Posts.findAll({

  }).then((package) => {
    console.log(">> All tutorials", JSON.stringify(package, null, 2));
    res.send(package);
    // console.log(package);
    // return package;
  });
};