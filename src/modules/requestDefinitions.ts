import { User } from "@prisma/client";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IGetUserAuthInfoRequest extends Request {
  user: string | JwtPayload;
}
