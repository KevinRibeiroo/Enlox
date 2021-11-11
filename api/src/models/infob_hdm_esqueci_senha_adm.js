import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_esqueci_senha_adm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_esqueci_senha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nr_HDM_senha_adm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nm_HDM_nova_senha_adm: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_esqueci_senha_adm',
    timestamps: false
  });
  return infob_hdm_esqueci_senha_adm;
  }
}
