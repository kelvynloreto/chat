const Conversations = require("./conversations.models");
const Message = require("./message.models");
const Participants = require("./participants.models");
const Users = require("./users.models");


const initModels = () => {

//* 1  -> muchos
    //? Una Conversations, pertenece a un Usuario
    Conversations.belongsTo(Users)
    //? Un usuario tiene muchas Conversations
    Users.hasMany(Conversations)

//* 1  -> muchos
    //? Una Participants, pertenece a un Usuario
    Participants.belongsTo(Users)
    //?Un usuario es participante de muchas conversaciones
    Users.hasMany(Participants)


//* 1  -> muchos
    //? Un Message, pertenece a un Usuario
    Message.belongsTo(Users)
    //? Un usuario envia muchos Message
    Users.hasMany(Message)


//* 1  -> muchos
    //? Un Participants, pertenece a una Conversations
    Participants.belongsTo(Conversations)
    //? Una Conversations  tiene muchos Participants
    Conversations.hasMany(Participants)



//* 1  -> muchos
    //? Una Message, pertenece a una Conversations
    Message.belongsTo(Conversations)
    //? Una Conversations tiene muchos Message
    Conversations.hasMany(Message)

}

module.exports = initModels
