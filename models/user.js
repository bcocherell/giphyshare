module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: { type: DataTypes.STRING, primaryKey: true },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.follower);
    User.hasMany(models.follower, {
      foreignKey: "followerId"
    });
    User.hasMany(models.post);
    User.hasMany(models.like);
    User.hasMany(models.subpost);
  };

  return User;
};
