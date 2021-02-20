module.exports = (sequelize, DataTypes) => {
  const Seeker = sequelize.define("Seeker", {
    // Giving the seeker model a name of type STRING
    name: DataTypes.STRING,
  });

  Seeker.associate = (models) => {
    // Associating seekers with Posts
    // When an seeker is deleted, also delete any associated Posts
    Seeker.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  return Seeker;
};
