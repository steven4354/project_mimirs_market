"use strict";
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      foreignKey: "categoryId"
    });
  };

  return Category;
};
