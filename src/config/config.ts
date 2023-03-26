import mysql from 'mysql2';

export const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password', // La contraseña que configuraste para tu usuario de MySQL
    database: 'la_buena.sql',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };