
const { Sequelize } = require("sequelize")
const config = require("../config/config");


const db = new Sequelize("boyphone", "root", "Ngi@Admin/2022", {
    host: '192.168.0.204',
    dialect: 'mysql'
 }
 );

module.exports = db;



















// const { Sequelize } = require("sequelize")
// const config = require("../config/config");


// const db = new Sequelize("boyphone", "root", "Ngi@Admin/2022", {
//     host: '192.168.0.204',
//     dialect: 'mysql',
//     dialectOptions: {
//       ssl: {
//         rejectUnauthorized: true,

//       },
//     },
//     define: {
//       timestamps: false,
//     },
//  }
//  );

// module.exports = db;


