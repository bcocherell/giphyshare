module.exports = function(sequelize, DataTypes) {
  var Subpost = sequelize.define("subpost", {
    url: {
      type: DataTypes.STRING
    },
    urlStill: {
      type: DataTypes.STRING
    },
    urlOriginal: {
      type: DataTypes.STRING
    },
    urlOriginalStill: {
      type: DataTypes.STRING
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
