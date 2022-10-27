const e = require('express');
const participantControllers = require('./participants.controllers');

const getAllParticipantsByConversation = (req, res) => {
    const id = req.params.conversation_id

    participantControllers.getAllParticipantsByConversation(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            }
            else{
                res.status(404).json({ message: "Invalid ID" })
            }
           
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postParticipant = (req, res) => {
    const conversationId = req.params.conversation_id
    const userId = req.user.id
    if (conversationId) {
        participantControllers.createParticipant({ conversationId, userId })
            .then(data => {
                res.status(201), json(data)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    }
    else{
        res.status(404).json({ message: 'Invalid ID' })
    }
    

}

const getPartcipantById = (req, res) => {
    const id = req.params.participant_id
    participantControllers.getPartcipantById(id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
}

const deleteParticipant = (req, res) => {
    const id = req.params.participant_id
    participantControllers.deleteParticipant(id)
        .then(() => {
            res.status(200).json({ message: `The Participant was removed from the conversation!` });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
}

module.exports = {
    getAllParticipantsByConversation,
    postParticipant,
    getPartcipantById,
    deleteParticipant
}