import { UserRepository } from "../user-repository";
import { PrismaService } from "src/database/prisma.service";
import { randomUUID } from "crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements UserRepository{
    constructor (private prisma: PrismaService){}
    async create(name: string, userFunction: string): Promise<void> {
        await this.prisma.user.create({
            data: {
                id: randomUUID(),
                name,
                function: userFunction
        },
        })
    }
}
    