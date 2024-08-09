import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  await prisma.$transaction(async (prisma) => {
    try {
      const user = await prisma.user.create({
        data: {
          username: "dianerdiana",
          email: "dianerdiana@gmail.com",
          password: "123456",
        },
      });

      res.status(200).json({
        status: "Success",
        data: user,
      });
    } catch (error) {
      res.send(error);
    }
  });
};
