module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define('Store', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    streetAddress: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    zipCode: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    latitude: {
      type: DataTypes.FLOAT
    }
  }, {
    classMethods: {
      associate: function(models) {
        Store.hasMany(models.Inventory);
      }
    }
  });

  return Store;
};