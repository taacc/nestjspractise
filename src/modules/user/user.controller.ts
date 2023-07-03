import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { User as UserModel } from '@prisma/client'
import { CreateUserDto } from './dtos/CreateUserDto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('User')
    @UsePipes(new ValidationPipe({ transform: true }))
    signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
        return this.userService.createUser(userData);
    }

}
