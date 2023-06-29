const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const tipo = require('./tipo')
const usuario = require('./usuario')

class Tarefa extends Model{}
Tarefa.init({
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      data_conclusao:{
        type:Sequelize.DATEONLY,
        allowNull: true
      },
      prioridade: {
        type: DataTypes.STRING,
        allowNull:false
      },
      data_criacao: {
        type:Sequelize.DATEONLY,
        defaultValue: DataTypes.NOW
      },
},{
    sequelize,
    modelName:'tarefa'
  }
)
tipo.hasOne(Tarefa)
Tarefa.belongsTo(tipo)

usuario.hasMany(Tarefa)
Tarefa.belongsTo(usuario)

sequelize.sync()
 module.exports = Tarefa   

