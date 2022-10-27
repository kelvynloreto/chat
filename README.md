# SKELETON

- Express
- PostgreSQL
- Sequelize ORM 
- Autenticación con Tokens
- Bcrypt para hashear contraseñas
- Uso de Json Web Token

---

# rutas de usuarios
- Rutas de Login y creación de usuario (register)
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autenticacion y manejo de permisos
- /users/:id DELETE, PUT
- /users/me

# rutas de conversaciones
- rutas donde se obtienen y se crean las conversaciones 
- /conversations
- /conversations/:conversation_id
# rutas de mensaje
- ruta donde se obtienen, se crean y se eliminan los mensajes de una conversacion
- /conversations/:conversation_id/messages
- /conversations/:conversation_id/messages/:message_id
# rutas de participantes
- ruta donde se obtienen, se crean y se eliminan los participantes de una conversacion
- /conversations/:conversation_id/participants
- /conversations/:conversation_id/participants/:participant_id

Orden
1. app.js
2. .env
3. config.js
4. database.js
5. modelos
6. controladores
7. servicios
8. rutas