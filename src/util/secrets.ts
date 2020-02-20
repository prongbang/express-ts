import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
}
export const ENVIRONMENT = process.env.NODE_ENV;
export const JWT_SECRET = process.env["JWT_SECRET"];
export const PORT = process.env["PORT"];