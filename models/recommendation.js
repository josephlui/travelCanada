module.exports = function(sequelize, DataTypes) {
  var Recommendation = sequelize.define("Recommendation", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    startDate: {
      type:DataTypes.DATEONLY,
      allowNull:true,
    },
    endDate:{
      type:DataTypes.DATEONLY,
      allowNull:true,
    },
    description: {
      type: DataTypes.STRING (500),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  Recommendation.associate = function(models) {
    Recommendation.belongsTo(models.Destination, {foreignKey: "city", targetKey: "city"});
  };

  return Recommendation;
};