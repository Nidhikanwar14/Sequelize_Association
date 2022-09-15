import

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.hasOne(models.User ,{
        foreignKey :'userId',
        onDelete : 'CASCADE'
      });

      Cart.belongsToMany(models.Products ,{
        foreignKey : 'productId',
        onDelete : 'CASCADE'
      })
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};