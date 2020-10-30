const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin',
        email: 'admin@ecommerce.com',
        password: bcrypt.hashSync('admin12345', 10),
        isAdmin: true,
    },
    {
        name: 'User1',
        email: 'user1@ecommerce.com',
        password: bcrypt.hashSync('user1', 10),
    },
    {
        name: 'User2',
        email: 'user2@ecommerce.com',
        password: bcrypt.hashSync('user2', 10),
    },
];

module.exports = users;