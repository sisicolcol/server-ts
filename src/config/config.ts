import * as dotenv from 'dotenv';
dotenv.config();

export const config= {
    development: {
        username:process.env.DB_USERNAME ||'server',
        password:process.env.DB_PASSWORD || '00000000',
        database : process.env.DB_DBNAME || 'kb',
        host : process.env.DB_HOST || 'kb-db.cncw5dvyumby.ap-northeast-2.rds.amazonaws.com',
        port : process.env.DB_PORT || 3306,
        dialect : 'mysql'
    }
}