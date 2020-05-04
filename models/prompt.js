// Model for Prompt entries in our database
module.exports = function(sequelize, DataTypes) {
  var Prompt = sequelize.define("Prompt", {
    // The email cannot be null, and must be a proper email before creation
    question: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Prompt;
};
