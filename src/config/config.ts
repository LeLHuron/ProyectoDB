import mysql from 'mysql2';
import path from 'path';

export const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password', // La contraseña que configuraste para tu usuario de MySQL
    database: path.join(__dirname, 'database', 'sql', 'la buena.sql'),
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };

  export const pool = mysql.createPool(dbConfig);