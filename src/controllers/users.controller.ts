import { Controller, Get, Param, Post, Body, Req, Query } from '@nestjs/common';
import { User } from 'src/entitys';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from "../services/users.service"


@Controller('users')
export class UsersController {

  constructor(private readonly usersService : UsersService){}


  @Get()
  async getAllUsers(@Req() Req, @Query() query){
    console.log("1")
    let users = await this.usersService.getAll();
    return users;
  }

  @Get(':id')
  getOneUser(@Param() params): string{
    const id = params.id;
    return `I'm a newbie ${id}`
  }


  @Post()
  createNewUser(@Body() body): Object{
    const username = body.username;
    const password = body.password;
    const fullName = body.fullName;
    const gender = body.gender;
    const type = body.type;

    const newData = {
      username,
      password,
      fullName,
      gender,
      type
    }

    return newData;
  }


  // @Get(':id')
  // getOneFile(@Param() params): string{
  //   const id = params.id;
  //   return `I'm a newbie ${id}`
  // }
}