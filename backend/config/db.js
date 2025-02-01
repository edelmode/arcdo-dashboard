import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const initializeConnection = async () => {
    try {
        const connectionConfig = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        };

        if (!connectionConfig.user) {
            throw new Error("Database user is missing! Check your .env file.");
        }

        const connection = await mysql.createConnection(connectionConfig);
        console.log("✅ Successfully connected to the database!");
        return connection;
    } catch (err) {
        console.error("❌ Database connection failed:", err.message);
        throw err;
    }
};

export default initializeConnection;