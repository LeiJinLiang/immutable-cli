module.exports = {
    path : 'demo2',
    getComponent (nextState, cb){
        require.ensure([], (require)=> {
            cb(null,require('./Example'))
        })
    }
}
