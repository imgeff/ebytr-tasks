module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    statusId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    task: {
      type: DataTypes.STRING,
    },
  }, { tableName: 'Tasks' });

  Task.associate = (models) => {
    Task.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
    Task.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return Task;
};
