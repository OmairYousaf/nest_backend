import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) { }
  create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({ data: createItemDto })
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: number) {
    return this.prisma.item.findUniqueOrThrow({ where: { id } })
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({
      where: { id },
      data: updateItemDto
    });
  }

  remove(id: number) {
    return this.prisma.item.delete({ where: { id } });
  }
}
