import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { Prisma, User } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data
        })
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput,
        data: Prisma.UserUpdateInput
    }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
            data,
            where
        })
    }
}