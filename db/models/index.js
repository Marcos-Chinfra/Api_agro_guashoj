const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Inventory, InventorySchema } = require('./inventory.model');
const { Product, ProductSchema } = require('./products.model');
const { Provider, ProviderSchema } = require('./providers.model');
const { Sales, SalesSchema } = require('./sales.model');
const { SoldProducts, SoldProductsSchema } = require('./soldProducts.mode');
const { Staff, StaffSchema } = require('./staff.model');
const { Supplies, SuppliesSchema } = require('./supply.model');
const { GoodsInTransit, GoodsInTransitSchema } = require('./goodsInTransit.model');
const { ReturnedProducts, ReturnedProductsSchema } = require('./returnedProducts.model');
const { Routes, RoutesSchema  } = require('./routes.model');
const { UnsoldProducts, UnsoldProductsSchema } = require('./unsoldProducts.model');
const { ShiftOutput, ShiftOutputSchema  } = require('./shiftOutput.model');


function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Inventory.init(InventorySchema, Inventory.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Provider.init(ProviderSchema, Provider.config(sequelize));
  Sales.init(SalesSchema, Sales.config(sequelize));
  SoldProducts.init(SoldProductsSchema, SoldProducts.config(sequelize));
  Staff.init(StaffSchema, Staff.config(sequelize));
  Supplies.init(SuppliesSchema, Supplies.config(sequelize));
  GoodsInTransit.init(GoodsInTransitSchema, GoodsInTransit.config(sequelize));
  ReturnedProducts.init(ReturnedProductsSchema, ReturnedProducts.config(sequelize));
  Routes.init(RoutesSchema, Routes.config(sequelize));
  UnsoldProducts.init(UnsoldProductsSchema, UnsoldProducts.config(sequelize));
  ShiftOutput.init(ShiftOutputSchema, ShiftOutput.config(sequelize));


  Category.associate(sequelize.models);
  Inventory.associate(sequelize.models);
  Product.associate(sequelize.models);
  Provider.associate(sequelize.models);
  Sales.associate(sequelize.models);
  Staff.associate(sequelize.models);
  Supplies.associate(sequelize.models);
  GoodsInTransit.associate(sequelize.models);
  ReturnedProducts.associate(sequelize.models);
  SoldProducts.associate(sequelize.models);
  UnsoldProducts.associate(sequelize.models);
  Routes.associate(sequelize.models);
  ShiftOutput.associate(sequelize.models);
};

module.exports = setupModels;
