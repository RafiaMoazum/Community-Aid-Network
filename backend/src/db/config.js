import { Sequelize } from "sequelize";

const sequelize = new Sequelize('fundraisingnetwork', 'fundraisingadmin', 'Tv4j5BrATsQcAoPKVqTLgeprGzSEzC8M', {
  host: 'dpg-co19otgl6cac73cqe1fg-a.oregon-postgres.render.com',
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false 
      }
  }
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default sequelize;
export { connectDb };
