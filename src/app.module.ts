import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { Livro } from './livros.model';
import { LivrosService } from './livros.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: 'livros',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [
    AppController,
    LivrosController
  ],
  providers: [
    AppService,
    LivrosService
  ],
})
export class AppModule {}
