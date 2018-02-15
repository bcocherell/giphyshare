module.exports = function(sequelize, DataTypes) {
  var Follower = sequelize.define("follower", {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Follower.associate = function(models) {
    Follower.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    Follower.belongsTo(models.user, {
      foreignKey: {
        name: "followerId",
        allowNull: false
      }
    });
  };

  return Follower;
};
