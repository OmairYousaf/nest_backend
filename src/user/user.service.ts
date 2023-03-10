import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // const { name, email, password, bio } = createUserDto;

    const createdUser = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        // profile: {
        //   create: {
        //     bio,
        //   },
        // },
      },
      // include: {
      //   profile: true,
      // },
    });

    return createdUser;
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        profile: true
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id: (id) },
      include: {
        profile: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // const { name, email, password, bio } = updateUserDto;

    return this.prisma.user.update({
      where: { id: (id) },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
        // profile: {
        //   upsert: {
        //     create: {
        //       bio,
        //     },
        //     update: {
        //       bio,
        //     },
        //   },
        // },
      },
      // include: {
      //   profile: true,
      // },
    });
  }

  async remove(id: number) {

    const userId = parseInt(id.toString(), 10);
    // console.log(userId)
    const profile = await this.prisma.profile.findUnique({ where: { id } })
    if (!!profile) {
      return `Profile already exist against ID ${userId} \n Remove profile first.`
    }
    else {
      return this.prisma.user.delete({ where: { id: userId } })
    }
    // return this.prisma.user.delete({ where: { id } })
    // return this.prisma.$transaction(async (prisma) => {

    //   if (this.prisma.profile === null) {
    //     console.log('profile is null')
    //     this.prisma.user.delete({ where: { id: userId } })
    //   }
    //   else {
    //     // Find the user's profile
    //     const profile = await prisma.profile.findUnique({
    //       where: { userId },
    //     });

    //     // Delete the user's profile
    //     await prisma.profile.delete({
    //       where: { id: profile.id },
    //     });

    //     // Delete the user
    //     await prisma.user.delete({
    //       where: { id: userId },
    //     });
    //   }
    // });
  }
}
