const messageControllers = require('./messages.controllers')

const getAllMessagesByConversation= (req, res) =>{
    const id = req.params.conversation_id
    
    messageControllers.getAllMessagesByConversation(id)
    .then(data => {
if (data) {
    res.status(200).json(data)
}
res.status(404).json({message:"Invalid ID"})
    })
    .catch(err => {
        res.status(400).json({ message: err.message })
    })
}

const postMessage = (req, res) => {
    const conversationId = req.params.conversation_id
    const userId = req.user.id
    const message  = req.body.message

    if (conversationId , message) {
        messageControllers.createMessage({userId, conversationId , message})
            .then(data => {
                res.status(201), json(data)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    }
else{
    res.status(400).json({
        message: 'Missing Data',
        requiredFields: {
            userId: "UUID",
            conversationId:"UUID",
            message: "STRING"
        }
    })
}
}

const getMessagesById  = (req, res)=>{
    const id = req.params.message_id
    messageControllers.getMessagesById(id)
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            res.status(404).json({message:err.message})
        })
}

const deteleMessage = (req, res )=>{
    const id = req.params.message_id
    messageControllers.deleteMessage(id)
    .then(() => {
        res.status(200).json({ message: `Message was deleted succesfully!` });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
}

module.exports= {
    getAllMessagesByConversation,
    postMessage,
    getMessagesById,
    deteleMessage
}