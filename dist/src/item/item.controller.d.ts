import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(createItemDto: CreateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Item[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    update(id: string, updateItemDto: UpdateItemDto): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItemClient<import(".prisma/client").Item, never>;
}
