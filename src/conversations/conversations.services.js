const e = require('express');
const conversationControllers = require('./conversations.controllers');

const getAllConversation = (req, res) => {
    const userId = req.user.id
    conversationControllers.getAllConversations(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postConversations = (req, res) => {
    const userId = req.user.id
    const { title, imageUrl } = req.body

    if (title, imageUrl) {
        conversationControllers.createConversation({ title, imageUrl, userId })
            .then(data => {
                res.status(201), json(data)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    }
    res.status(400).json({
        message: 'Missing Data',
        requiredFields: {
            title: 'string',
            imageUrl: 'string',
        }
    })
}


const getConversationById = (req, res) => {
    const id = req.params.conversation_id

    conversationControllers.getConversationById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const patchConversation = (req, res) => {

    const id = req.params.conversation_id

    const { title, imageUrl } = req.body;

    if (title, imageUrl) {
        conversationControllers.updateConversation(id, { title, imageUrl })
            .then((data) => {
                if (data[0]) {
                    res.status(200)
                        .json({ message: `Conversation with ID: ${id}, edited succesfully!` });
                } else {
                    res.status(404).json({ message: "Invalid ID" });
                }
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }
    else{
        res.status(400).json({
            message: 'Missing Data',
            requiredFields: {
                title: 'string',
                imageUrl: 'string',
            }
        })
    }
  
};

const deleteConversation = (req, res) => {
    const id = req.params.conversation_id

    conversationControllers.deleteConversation(id)
        .then((data) => {
            if (data) {
                res.status(204).json();
            } else {
                res.status(404).json({ message: "Invalid ID" });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
}

module.exports = {
    getAllConversation,
    postConversations,
    getConversationById,
    patchConversation,
    deleteConversation
}