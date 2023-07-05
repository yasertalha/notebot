module.exports = (sequelize, Datatype) => {
    const due = sequelize.define('due', {
        date: {
            type: Datatype.DATE,
            allowNull: false,
            primaryKey: true
        },
        policy_id: {
            type: Datatype.INTEGER,
            allowNull: false,
        },
        due_amount: {
            type: Datatype.INTEGER,
            allowNull: false,
        },
    })
    return due
}