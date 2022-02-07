import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [  
  SequelizeModule.forRoot({
    dialect: 'sqlite',
    host: join(__dirname, 'database.sqlite'),
    autoLoadModels: true,
    synchronize: true
  }), TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
