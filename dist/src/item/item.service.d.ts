import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ItemService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createItemDto: CreateItemDto): void;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateItemDto: UpdateItemDto): string;
    remove(id: number): string;
}
