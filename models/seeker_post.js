module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    dog_breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    dog_age: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    dog_size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    borough: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    seeker_contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Post.associate = (models) => {
    // We're saying that a Post should belong to an seeker
    // A Post can't be created without an seeker due to the foreign key constraint
    Post.belongsTo(models.Seeker, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Post;
};
