import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private authRepository: Repository<User>, // private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    try {
      const user = await this.authRepository
        .createQueryBuilder('user')
        .where('user.username =:username', { username })
        .addSelect('user.password')
        .getOne();
      if (user && user.password === password) {
        const { password, ...userInfo } = user;
        return userInfo;
      }
      return null;
    } catch (err) {
      console.log('Ошибка при обращении к БД');
    }
  }

  // login(user) {
  //   const payload = { username: user.username, sub: user.id };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
