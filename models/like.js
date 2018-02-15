module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define("like", {
    userId: {
      type: DataTypes.INTEGER,
      unique: "userIdpostId"
    },
    postId: {
      type: DataTypes.INTEGER,
      unique: "userIdpostId"
    }
  });

  Like.associate = function(models) {
    Like.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "CASCADE"
    });
    Like.belongsTo(models.post, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "CASCADE"
    });
  };

  return Like;
};
