/**
 * @author:zhangdezhi
 * @date:2020-07-12
 * @desc:ๅๅๅ่กจ
*/
'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        await this.ctx.render("/default/product")
      
    }
    
   
}

module.exports = UserController