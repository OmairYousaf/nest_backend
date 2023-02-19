"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const { name, email, password, bio } = createUserDto;
        const createdUser = await this.prisma.user.create({
            data: {
                name,
                email,
                password,
                profile: {
                    create: {
                        bio,
                    },
                },
            },
            include: {
                profile: true,
            },
        });
        return createdUser;
    }
    findAll() {
        return this.prisma.user.findMany({
            include: {
                profile: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.user.findUnique({
            where: { id: (id) },
            include: {
                profile: true,
            },
        });
    }
    update(id, updateUserDto) {
        const { name, email, password, bio } = updateUserDto;
        return this.prisma.user.update({
            where: { id: (id) },
            data: {
                name,
                email,
                password,
                profile: {
                    upsert: {
                        create: {
                            bio,
                        },
                        update: {
                            bio,
                        },
                    },
                },
            },
            include: {
                profile: true,
            },
        });
    }
    remove(id) {
        const userId = parseInt(id.toString(), 10);
        return this.prisma.$transaction(async (prisma) => {
            const profile = await prisma.profile.findUnique({
                where: { userId },
            });
            await prisma.profile.delete({
                where: { id: profile.id },
            });
            await prisma.user.delete({
                where: { id: userId },
            });
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map