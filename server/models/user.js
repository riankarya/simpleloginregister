'use strict';
const {
  Model
} = require('sequelize');
const hashPassword = require('../helpers/hashPassword');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    fullname: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          let reg = new RegExp(/^[a-z ,.'-]+$/i)
          if (value === '') {
            throw new Error('Full Name harus diisi')
          } else if (!reg.test(value)) {
            throw new Error('Full Name hanya boleh menggunakan huruf dan beberapa simbol')
          }
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          let reg = new RegExp(/^[a-zA-Z0-9]+$/)
          if (value === '') {
            throw new Error('Username harus diisi')
          } else if (!reg.test(value)) {
            throw new Error('Username hanya boleh menggunakan huruf dan angka')
          }
        }
      },
      unique: {
        args: true,
        msg: 'Username sudah dipakai!'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          let reg = new RegExp(/^[a-zA-Z0-9]+$/)
          if (value === '') {
            throw new Error('Password harus diisi')
          } else if (!reg.test(value)) {
            throw new Error('Password hanya boleh menggunakan huruf dan angka')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};