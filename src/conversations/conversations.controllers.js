const uuid = require("uuid");

const Conversations = require("../models/conversations.models");
const Users = require("../models/users.models");

const getAllConversations = async (id) => {
    const data = await Conversations.findAll({
        where:{
            userId: id
        },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
    }
    })
    return data
}

const createConversation = async (data) => {
    const response =  await Conversations.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId
    })
    return response
}

const getConversationById = async (id) => {
    const data = await Conversations.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        },
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ["firstName", "lastName", "email", 'profileImage']

            }]
    })
    return data
}

const updateConversation = async (id, data) => {
    const response = await Conversations.update(data, {
        where: {
            id
        }
    })
    return response
}

const deleteConversation = async (id) => {
    const data = await Conversations.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllConversations,
    createConversation,
    getConversationById,
    updateConversation,
    deleteConversation
}