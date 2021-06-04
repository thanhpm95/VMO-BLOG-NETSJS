import { Sequelize } from 'sequelize-typescript';
import { Cat, User, Post, Tag, UserToken, Category } from "../entitys/index"


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Thanhkid1412ubqn@@',
        database: 'test',
      });
      sequelize.addModels([Cat, User, UserToken, Tag, Post, Category]);
      await sequelize.sync();
      return sequelize;
    },
  },
];