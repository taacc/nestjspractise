import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsOptional, MaxLength, } from "class-validator";

@Injectable()

export class CreatePostDto {
    @MaxLength(255, {
        always: true,
        message: '文章标题长度最大为$constraint1'
    })
    @IsNotEmpty({ groups: ['create'], message: '文章标题必须填写' })
    @IsOptional({ groups: ['update'] })
    title!: string
}