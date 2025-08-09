import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor (
        private readonly userService:UserService,
        private readonly jwtService: JwtService
    ){}

    async register(registerUserDto:RegisterUserDto) {
        const user = await this.userService.findOneByEmail(registerUserDto.email)
        if(user){
            throw new BadRequestException(`User already exists, ${
                user}`)

        }

        const hashpassword = await bcryptjs.hash(registerUserDto.password,12);


        const newUser = await this.userService.create({
            ...registerUserDto,
            password:hashpassword
        }) 

        return newUser;
    }

    async login(loginUserDto:LoginUserDto){
        const user = await this.userService.findOneByEmailWithPassword(loginUserDto.email)

        if(!user){
            throw new UnauthorizedException('Email is wrong')
        }

        const password = await bcryptjs.compare(loginUserDto.password,user.password)

        if(!password){
            throw new UnauthorizedException('Password is wrong');
        }

        const payload = {email:user.email,role:user.role,id:user.id}

        const token = await this.jwtService.signAsync(payload);

        return token;
    }   

    async getProfile(user){
        return await this.userService.findOneByEmail(user.email);
    }
}


