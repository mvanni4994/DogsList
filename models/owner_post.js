module.exports = (sequelize, DataTypes) => {
  const OwnerPost = sequelize.define("OwnerPost", {
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
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
    dog_size: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
    borough: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
    temperament_pets: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
    temperament_children: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
    vaccinations: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
    owners_contact: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      // allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  OwnerPost.associate = (models) => {
    // We're saying that a Post should belong to an Author --
    // A Post can't be created without an Author due to the foreign key constraint
    OwnerPost.belongsTo(models.Owner, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return OwnerPost;
};
