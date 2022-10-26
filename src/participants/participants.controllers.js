const Participants = require("../models/participants.models");
const Users = require("../models/users.models");
const Conversations = require("../models/conversations.models");
const uuid = require("uuid");


const getAllParticipantsByConversation = async (id) => {
    const data = await Participants.findAll({
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

const createParticipant = async (data) => {
    const response = await Participants.create({
        id: uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId
    })
    return response
}

const getPartcipantById = async (id) => {
    const data = await Participants.findOne({
        where: {
            id
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

const deleteParticipant = async (id) => {
    const data = await Participants.destroy({
        where: {
            id
        }

    })
    return data
}

module.exports = {
    getAllParticipantsByConversation,
    createParticipant,
    getPartcipantById,
    deleteParticipant
}