const uuid = require("uuid");
const Users = require("../models/users.models");
const Message = require('../models/message.models');
const Conversations = require("../models/conversations.models");

const getAllMessagesByConversation = async (id) => {
    const data = await Message.findAll({
        where: {
            conversationId: id
        },
        include: [
            {
                model: Conversations,
                as: 'conversation',
                attributes: ["title"]
            },
            {
                model: Users,
                as: 'user',
                attributes: ["firstName", "lastName", "email"]
            }
        ],
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    })
    return data
}

const createMessage = async (data) => {
    const response = await Message.create({
        id: uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    })
    return response
}

const getMessagesById = async (id) => {
    const data = await Message.findOne({
        where: {
            id
        }
    })
    return data
}

const deleteMessage = async (id) => {
    const data = await Message.destroy({
        where: {
            id
        }
    })
    return data
}


module.exports = {
    getAllMessagesByConversation,
    createMessage,
    getMessagesById,
    deleteMessage
}