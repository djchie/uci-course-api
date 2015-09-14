module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define('Inventory', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    productID: {
      type: DataTypes.INTEGER
    },
    storeID: {
      type: DataTypes.INTEGER
    },
    inventory: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.FLOAT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // Inventory.belongsTo(models.Product);
        // Inventory.belongsTo(models.Store);
      }
    }
  });

  return Inventory;
};