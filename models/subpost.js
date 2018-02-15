module.exports = function(sequelize, DataTypes) {
  var Subpost = sequelize.define("subpost", {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urlStill: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: DataTypes.STRING
  });

  Subpost.associate = function(models) {
    Subpost.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "CASCADE"
    });
    Subpost.belongsTo(models.post, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "CASCADE"
    });
  };

  return Subpost;
};
