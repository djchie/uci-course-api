module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    section: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    units: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    instructor: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    instructor_2: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    day: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    time: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    day_2: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    time_2: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    location_2: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    final: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    maximum_enrollment_allowed: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    current_enrollment_count: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    current_waitlist_count: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    enrollment_requests: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    enrollment_restrictions: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    textbook_link: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    course_website: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    }
  }, {  
    tableName:'session',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    classMethods: {
      associate: function(models) {
        Session.belongsTo(models.Course, {
          foreignKey: 'course_id'
        });
      }
    }
  });

  return Session;
};
