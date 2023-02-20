import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): import(".prisma/client").PrismaPromise<(User & {
        profile: import(".prisma/client").Profile;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<User & {
        profile: import(".prisma/client").Profile;
    }, never>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<User, never>;
    remove(id: number): Promise<string | User>;
}
