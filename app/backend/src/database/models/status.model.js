module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, { timestamps: false, tableName: 'Status' });


  Status.associate = (models) => {
    Status.hasMany(models.Task, { foreignKey: 'statusId' });
  }

  return Status;
};
