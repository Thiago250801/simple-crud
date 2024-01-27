import { Body, Controller, Get, ParseUUIDPipe, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from 'src/dtos/create-user-dto';
import { UserRepository } from 'src/repositories/user-repository';

@Controller('app')
export class AppController {
  constructor(
    private prisma: PrismaService,
    private userRepository: UserRepository
    ){}

  @Post('user')
  async getHello(@Body() body : CreateUserDto){
    const { name, function : userFunction} = body
    await this.userRepository.create(name, userFunction)
  }

  @Get('teste')
  getTeste():string {
    return "teste";
  }
  
}
 