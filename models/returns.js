module.exports = (sequelize, Datatype) => {
    const due = sequelize.define('due', {
        date: {
            type: Datatype.DATE,
            allowNull: false
        },
        policy_id: {
            type: Datatype.INTEGER,
            allowNull: false,
        },
        returns_type: {
            type: Datatype.INTEGER,
            allowNull: false,
        },
    })
    return due
}