

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('formation', {
      id_formation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'Le suject ne doit pas être vide'},
          notNull: {msg: 'Le suject  est une propriété requise'}
        }},
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: `mail ne doit pas être vide`},
          notNull: {msg: `Votre mail est obligatoire merci de le renseigner`}
        }
      },
    
     
    }, {
      timestamps: true,
      createdAt: 'date_creation',
      updatedAt: false
    })
  }