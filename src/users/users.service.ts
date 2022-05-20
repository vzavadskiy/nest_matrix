import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepository.find();
  }

  getUser(id: string) {
    return this.usersRepository.findOne(id);
  }

  getUserByName(name: string) {
    const user = this.usersRepository
      .createQueryBuilder('user')
      .where('user.name =:name', { name })
      .addSelect('user.password')
      .getOne();
    return user;
    // return this.usersRepository.find({ name });
  }

  createUser(user: CreateUserDto) {
    return this.usersRepository.save(user);
  }
}
