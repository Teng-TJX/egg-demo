module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)
    router.get('/getUserinfo/:id',controller.default.home.getUserinfo)
}