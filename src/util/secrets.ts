import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
}
export const ENVIRONMENT = process.env.NODE_ENV;
export const JWT_SECRET = process.env["JWT_SECRET"];
export const PORT = process.env["PORT"];

if (!JWT_SECRET) {
    logger.error("No client secret. Set JWT_SECRET environment variable.");
    process.exit(1);
}