module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", {
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
    comment: DataTypes.STRING,
    title: DataTypes.STRING
  });

  Post.associate = function(models) {
    Post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    Post.hasMany(models.like);
    Post.hasMany(models.subpost);
  };

  return Post;
};
