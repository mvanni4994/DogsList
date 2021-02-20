module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
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
    temperament_pets: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    temperament_children: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    vaccinations: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    owners_contact: {
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
  return Post;
};
