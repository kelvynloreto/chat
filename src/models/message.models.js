const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require('./users.models');
const Conversations = require("./conversations.models");

const Message = db.define('message',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true ,
        allowNull: false
    },
      userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: "user_id",
        references:{
            key: 'id',
            model: Users
        }
    },
    conversationId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: "conversation_id",
        references:{
            key: 'id',
            model: Conversations
        }
    },
     message: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
})

module.exports = Message