

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('email', {
      id_email: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'Le suject ne doit pas être vide'},
          notNull: {msg: 'Le suject  est une propriété requise'}
        }
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: `mail ne doit pas être vide`},
          notNull: {msg: `Votre mail est obligatoire merci de le renseigner`}
        }
      },
     adresse_expediteur: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: `adresse de l'esxpediteur ne doit pas être vide`},
          notNull: {msg: `adresse de l'esxpediteur est obligatoire merci de le renseigner`}
        }
      },
     
    }, {
      timestamps: true,
      createdAt: 'date_creation',
      updatedAt: false
    })
  }