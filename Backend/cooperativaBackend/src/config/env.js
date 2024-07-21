import { config } from "dotenv";

config();

export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASS;
export const DB_HOST = process.env.DB_HOST;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_SECRET_STUDENT = process.env.JWT_SECRET_STUDENT;
export const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH;