const Sequelize = require('sequelize')
const sequelize = require('../Config/Server')
const User = require('./UserModel')
const JTask = sequelize.define('JTask',{
    TaskId :{
        type : Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement : true,
        allowNull : false
    },
    FirstName :{
        type : Sequelize.STRING,
    },
    LastName :{
        type: Sequelize.STRING
    },
    Task :{
        type : Sequelize.STRING
    },
    userId:{
        type: Sequelize.INTEGER,
        allowNull : false,
        references :{
            model: User,
            key:'userId'
        }
    }
});
User.hasMany(JTask,{foreignKey: 'userId'})
JTask.belongsTo(User,{foreignKey: 'userId'})
module.exports = JTask;