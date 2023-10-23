const db = require('../../database/models');
const { hashSync } = require('bcryptjs');

const createUser = async (userData) => {
    try {
        const { name, lastName, email, password, rolesId, adressesId, birthday } = userData;
        const user = await db.User.create({
            name,
            lastName,
            email,
            password: hashSync(password, 10),
            rolesId,
            adressesId,
            birthday,
        });
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = createUser;