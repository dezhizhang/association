/*
 * :file description: 
 * :name: /association/app/controller/default/expert.js
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-05-28 23:55:16
 * :last editor: 张德志
 * :date last edited: 2021-05-29 10:42:32
 */
'use strict';
const Controller = require('egg').Controller;

class ExpertController extends Controller {
    async index() {
        await this.ctx.render("/default/expert")
      
    }
    
   
}

module.exports = ExpertController