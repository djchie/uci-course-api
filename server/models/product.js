module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    pictureUrl: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    manufacturer: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Product.hasMany(models.Inventory)
      }
    }
  });

  return Product;
};