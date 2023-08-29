const Sequelize = require('sequelize')
const sequelize = require('../Config/Server')
const User = sequelize.define('JTodo_User',
    {
        userId: {   
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING,

        },
        FirstName: {
            type: Sequelize.STRING,
        },
        LastName: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.INTEGER
        },
        Image: {
            type: Sequelize.STRING,
        },

    },
    
    //THIS IS FOR SOFT DELETE
    {
        tableName: 'JTodo_User',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deletedAt',
        paranoid: true,
        timestamps: true,
    },
)

module.exports = User;