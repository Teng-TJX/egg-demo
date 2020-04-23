'use strict';

const Controller = require('egg').Controller

class UserController extends Controller{

    async getUserinfo(){
        const { ctx } = this;
        const userId = ctx.params.id;
        let result = await this.app.mysql.select('user', {
            where: { userId: userId},// WHERE 条件   
            limit: 1,
        })
        this.ctx.body= result
       
    }
}

module.exports = UserController