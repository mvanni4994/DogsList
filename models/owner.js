module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define(
    "Owner",
    {
      // Giving the owner model a name of type STRING
      name: DataTypes.STRING,
    },
    { freezeTableName: true }
  );

  Owner.associate = (models) => {
    // Associating owners with Posts --
    // When an owners is deleted, also delete any associated Posts
    Owner.hasMany(models.OwnerPost, {
      onDelete: "cascade",
    });
  };

  return Owner;
};
