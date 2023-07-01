import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  create(createUserDto): string {
    return 'This action adds a new user'
  }
}
