/*
 * :file description: 
 * :name: /association/app/controller/default/information.js
 * :author: 张德志
 * :copyright: (c) 2021
 * :date created: 2021-05-28 23:55:16
 * :last editor: 张德志
 * :date last edited: 2021-05-29 10:20:01
 */

'use strict';
const BaseController = require('./base');

class RegistController extends BaseController {
    async index() {
        await this.ctx.render("/default/information")
    }
   
}
module.exports = RegistController