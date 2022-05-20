import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [
    TypeOrmModule.forFeature([User]),
    // JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
