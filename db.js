const { Sequelize } = require('sequelize');

// Используем DATABASE_URL для подключения к базе данных
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,  // обязательное использование SSL
            rejectUnauthorized: false,  // нужно для Railway
        },
    },
});

module.exports = sequelize;
