module.exports = {
    path : 'demo1',
    getComponent(nextState, cb) {
        require.ensure([], (require)=> {
            cb(null,require('./Example'))
        })
    }
}
