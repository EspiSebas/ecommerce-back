import { Module } from '@nestjs/common';

import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { BrandsModule } from './brands/brands.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'stock',
      autoLoadEntities: true,
      synchronize: true,
    }),CategoriesModule, ArticlesModule, BrandsModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
