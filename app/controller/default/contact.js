/*
 * :file description: 
 * :name: /association/app/controller/default/contact.js
 * :author: 张德志
 * :copyright: (c) 2021
 * :date created: 2021-05-28 23:55:16
 * :last editor: 张德志
 * :date last edited: 2021-05-29 10:31:41
 */
'use strict';
const Controller = require('egg').Controller;
class ContactController extends Controller {
    async index() {
       await this.ctx.render('/default/contact')
    }
}

module.exports = ContactController