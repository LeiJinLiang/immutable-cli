// module.exports = {
//     path : 'demo2',
//     getComponent (nextState, cb){
//         require.ensure([], (require)=> {
//             cb(null,require('./components/Example'))
//         })
//     }
// }


module.exports = {
    path : 'demo3',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null,require('./containers/TodoCon'))
        })
    }
}