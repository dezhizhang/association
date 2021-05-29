/*
 * :file description: 
 * :name: /association/app/controller/default/about.js
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-05-28 23:55:16
 * :last editor: 张德志
 * :date last edited: 2021-05-29 10:15:21
 */
/**
 * @author:zhangdezhi
 * @date:2020-07-12
 * @desc:登录
*/
'use strict';
const BaseController = require('./base');

class LoginController extends BaseController {
    //登录
    async index() {
        await this.ctx.render("/default/about");
    }
   
}

module.exports = LoginController