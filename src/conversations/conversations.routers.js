const router = require('express').Router()

const passport = require('passport')
require('../middlewares/auth.middleware')(passport)

const conversationServices = require('./conversations.services');
const messageServices = require('../messages/messages.services')
const participantServices = require('../participants/participants.services')
//* rutas de conversations

router.route('/') //? /api/v1/conversations
    .get(
        passport.authenticate('jwt', { session: false }),
        conversationServices.getAllConversation)
    .post(
        passport.authenticate('jwt', { session: false }),
        conversationServices.postConversations)

router.route('/:conversation_id') //? /api/v1/conversations/:conversation_id
    .get(
        passport.authenticate('jwt', { session: false }),
        conversationServices.getConversationById)
    .patch(
        passport.authenticate('jwt', { session: false }),
        conversationServices.patchConversation)
    .delete(
        passport.authenticate('jwt', { session: false }),
        conversationServices.deleteConversation)



//* rutas de messages

router.route('/:conversation_id/messages')  //? /api/v1/conversations/:conversation_id/messages
    .get(
        passport.authenticate('jwt', { session: false }),
        messageServices.getAllMessagesByConversation)
    .post(
        passport.authenticate('jwt', { session: false }),
        messageServices.postMessage)

router.route('/:conversation_id/messages/:message_id') //? /api/v1/conversations/:conversation_id/messages/:message_id
    .get(
        passport.authenticate('jwt', { session: false }),
        messageServices.getMessagesById
    )
    .delete(
        passport.authenticate('jwt', { session: false }),
        messageServices.deteleMessage
    )

//* rutas de participants

router.route("/:conversation_id/participants") //? /api/v1/conversations/:conversation_id/participants
        .get(
            passport.authenticate('jwt', { session: false }),
            participantServices.getAllParticipantsByConversation
        )
        .post(
            passport.authenticate('jwt', { session: false }),
            participantServices.postParticipant
        )


router.route("/:conversation_id/participants/:participant_id") //? /api/v1/conversations/:conversation_id/participants/:participant_id
.get(
    passport.authenticate('jwt', { session: false }),
    participantServices.getPartcipantById
)
.delete(
    passport.authenticate('jwt', { session: false }),
    participantServices.deleteParticipant
)

module.exports = router