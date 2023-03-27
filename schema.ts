import { gql } from 'apollo-server-express';
import { connection } from './src/config/config';

// Definimos el tipo Usuario, el cual corresponde a la tabla 'usuario' de la base de datos
const Usuario = gql`
  type Usuario {
    id: Int
    nombre: String
    correo: String
  }

  extend type Query {
    usuarios: [Usuario]
    usuario(id: Int!): Usuario
  }

  extend type Mutation {
    agregarUsuario(nombre: String!, correo: String!): Usuario
    actualizarUsuario(id: Int!, nombre: String, correo: String): Usuario
    eliminarUsuario(id: Int!): Usuario
  }
`;

// Definimos los resolvers correspondientes al tipo Usuario
const UsuarioResolvers = {
  Query: {
    usuarios: () => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario', (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        });
      });
    },
    usuario: (root, args) => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario WHERE id = ?', [args.id], (err, rows) => {
          if (err) return reject(err);
          resolve(rows[0]);
        });
      });
    },
  },
  Mutation: {
    agregarUsuario: (root, args) => {
      return new Promise((resolve, reject) => {
        connection.query('INSERT INTO usuario (nombre, correo) VALUES (?, ?)', [args.nombre, args.correo], (err, result) => {
          if (err) return reject(err);
          connection.query('SELECT * FROM usuario WHERE id = ?', [result.insertId], (err, rows) => {
            if (err) return reject(err);
            resolve(rows[0]);
          });
        });
      });
    },
    actualizarUsuario: (root, args) => {
      return new Promise((resolve, reject) => {
        connection.query('UPDATE usuario SET nombre = ?, correo = ? WHERE id = ?', [args.nombre, args.correo, args.id], (err, result) => {
          if (err) return reject(err);
          connection.query('SELECT * FROM usuario WHERE id = ?', [args.id], (err, rows) => {
            if (err) return reject(err);
            resolve(rows[0]);
          });
        });
      });
    },
    eliminarUsuario: (root, args) => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario WHERE id = ?', [args.id], (err, rows) => {
          if (err) return reject(err);
          connection.query('DELETE FROM usuario WHERE id = ?', [args.id], (err, result) => {
            if (err) return reject(err);
            resolve(rows[0]);
          });
        });
      });
    },
  },
};

// Definimos el tipo Producto, el cual corresponde a la tabla 'producto' de la base de datos
const Producto = gql`
  type Producto {
    id: Int
    nombre: String
    precio: Float
  }

  extend type Query {
   
