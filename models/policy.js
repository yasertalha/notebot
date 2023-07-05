

module.exports = (sequelize, DataType) => {

    const policy = sequelize.define('policy', {
        policy_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        policy_name: {
            type: DataType.STRING(40),
            allowNull: false,
        },
        policy_holder_name: {
            type: DataType.STRING(40),
            allowNull: false,
        }
    })
    return policy;
}