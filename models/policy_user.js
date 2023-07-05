module.exports = (sequelize, Datatype) => {
    const policy_user = sequelize.define('policy_user', {
        policy_id: {
            type: Datatype.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: Datatype.SERIAL,
            allowNull: false,
        },
    })
    return policy_user
}