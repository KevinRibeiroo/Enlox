import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ecm_td_roupas_femi extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_roupa_femi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nm_roupa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ds_tamanho: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    nm_fornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ecm_td_roupas_femi',
    timestamps: false
  });
  return infod_ecm_td_roupas_femi;
  }
}
