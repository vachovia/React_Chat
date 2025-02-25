// To start: npx sequelize init
// created two boilerplate files for sequelize:
// index under models and database under config folders

// creates model User and creates migration file
// npx sequelize model:create --name User --attributes firstName:string,lastName:string,email:string,password:string,gender:string,avatar:string

// then run which runs up: npx sequelize db:migrate
// to rollback which runs down: npx sequelize db:migrate:undo

// to create dummy seeder file users we need to run command: npx sequelize seed:create --name users

// to seed file we need to run command: npx sequelize db:seed:all
// to undo we need to run: npx sequelize db:seed:undo

// installed bcrypt to hash passwords
// we undo seed Users table to bcrypt password and seed again

// const secret = require('crypto').randomBytes(64).toString('hex');
// inside authController.js generated and returned by res.send(secret)
// to use it in .env file as an APP_KEY
