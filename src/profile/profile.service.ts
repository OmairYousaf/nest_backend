import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) { }


  async create(createProfileDto: CreateProfileDto) {
    // const user = await this.prisma.user.update({
    //   where: {
    //     id: createProfileDto.userId
    //   }, data: {
    //     profile: {
    //       create: { bio: createProfileDto.bio, }
    //     },

    //   }
    // });


    return this.prisma.profile.create({ data: createProfileDto })
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: number) {
    return this.prisma.profile.findUniqueOrThrow({ where: { userId: id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({ where: { userId: id }, data: updateProfileDto });
  }

  remove(id: number) {
    return this.prisma.profile.delete({ where: { userId: id } });
  }
}
