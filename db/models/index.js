const { Provider, ProviderSchema } = require('./providers.model');
const { Supplies, SuppliesSchema } = require('./supply.model');
const { Product, ProductSchema } = require('./products.model');
const { Inventory, InventorySchema } = require('./inventory.model');


function setupModels(sequelize) {
  Provider.init(ProviderSchema, Provider.config(sequelize));
  Supplies.init(SuppliesSchema, Supplies.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Inventory.init(InventorySchema, Inventory.config(sequelize));


  Provider.associate(sequelize.models);
  Supplies.associate(sequelize.models);
  Product.associate(sequelize.models);
  Inventory.associate(sequelize.models);
};

module.exports = setupModels;
