import dotenv from 'dotenv';

dotenv.config();

const getEnv = (name: string, defaultValue?: string): string => {
    const value = process.env[name] ?? defaultValue;
    if (value === undefined) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
};

export interface AppConfig {
    nodeEnv: string;
    port: number;
}

const config: AppConfig = {
    nodeEnv: getEnv('NODE_ENV', 'development'),
    port: Number(getEnv('PORT', '3000')),
};

if (Number.isNaN(config.port)) {
    throw new Error('PORT must be a number');
}

export default config;
