import { Model, DataTypes, Sequelize } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.UUIDV4,
                    defaultValue: sequelize.fn('uuid_generate_v4'),
                    primaryKey: true,
                    allowNull: false
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                password_hash: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                created_at: {
                    defaultValue: Sequelize.NOW,
                    allowNull: false,
                }
            }, {
            tableName: 'users'
        },
            {
                sequelize,
            });
    }
}
export default User;