const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    user_type: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
    },
    Latitude: {
      type: DataTypes.STRING,
    },
    Longitude: {
      type: DataTypes.STRING,
    },
    
    createdAt: {
      type: DataTypes.DATE,
      //note here this is the guy that you are looking for
      get() {
        return moment(this.getDataValue("createdAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("updatedAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
  });

  return Post;
};
