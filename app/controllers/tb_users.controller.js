const db = require("../models");
const TbUsers = db.posts;


exports.createTbUser = async (req, res) => {
  console.log(
    "🚀 ~ fil: posts.controller.js ~ line 7 ~ exports.createTbUser= ~ req",
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
  TbUsers.create(photo)
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
exports.findTbUserById = (req, res) => {
  const postId = req.params.postId;

  return TbUsers.findByPk(postId)
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
  return TbUsers.findAll({
    limit: 1,
  }).then((package) => {
    console.log(">> All tutorials", JSON.stringify(package, null, 2));
    res.send(package);
    // console.log(package);
    // return package;
  });
};