
module.exports = (sequelize, DataType) => {
    const User = sequelize.define('user', {
        user_name: {
            type: DataType.STRING(40),
            allowNull: false,
        },
        user_id: {
            type: DataType.SERIAL,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        }
    })
    return User;
}