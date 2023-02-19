import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ItemService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createItemDto: CreateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Item[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    update(id: number, updateItemDto: UpdateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
}
