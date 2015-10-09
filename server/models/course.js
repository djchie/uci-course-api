module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define('Course', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'course',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    classMethods: {
      associate: function(models) {
        Course.hasMany(models.Session, {
          foreignKey: 'course_id',
          as: 'sessions'
        });
      }
    }
  });

  return Course;
};