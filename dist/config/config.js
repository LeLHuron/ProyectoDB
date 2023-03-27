import path from 'path';
export const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: path.join(__dirname, 'database', 'sql', 'la buena.sql'),
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};
