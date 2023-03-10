import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): Promise<import(".prisma/client").Profile>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Profile[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    update(id: string, updateProfileDto: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
}
