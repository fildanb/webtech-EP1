let Sequelize = require('sequelize');
const sequelize = new Sequelize('bibl', 'root', '', {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;