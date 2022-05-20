import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { logger } from './logger.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [], // [{ provide: AppService, useClass: AppService }]
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE_NAME,
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   // consumer.apply(LoggerMiddleware).forRoutes('');
  //   consumer.apply(logger).forRoutes('');
  // }
}
