const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const TbUser = sequelize.define("tb_user", {
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    crop: {
      type: DataTypes.STRING,
    },

    weight: {
      type: DataTypes.STRING,
    },
    price: {
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

  return TbUser;
};
