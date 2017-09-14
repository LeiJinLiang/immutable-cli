import { Map , is , List , Range , Seq } from 'immutable'
const log = console.log.bind(console)

const map1 = Map({ a :1 , b : 2, c : 3})
const map2 = Map({ a :1 , b : 2, c : 3})

log('map1 !== map2',map1 !== map2)
log('is(map1, map2)', is(map1, map2))
log('map1.equals(map2)', map1.equals(map2))

const list1 = List([1 ,2 ,3])
const list2 = list1.withMutations((list) => {
    list.push(4).push(5).push(6)
})

log('list1',list1)
log('list2',list2)


const _range = Range(1, Infinity)
    .skip(1000)
    .map(n => -n)
    .filter( n => n%2 === 0)
    .take(2)
    .reduce((r, n) => r*n, 1)

log('_range------------',_range)


const oddSquares =  Seq([1,2,3,4,5,6,7,8])
     .filter( x=> x % 2) // [1,3,5,7]
     .map( x => x * x)
log('oddSquares',oddSquares.get(0)) //0
log('oddSquares',oddSquares.get(1)) //9
log('oddSquares',oddSquares.get(2)) //25


Object.prototype.deepCopy = (obj) => {
    let str, newobj = obj.constructor === Array ? [] : {}
    if(typeof obj !== 'object'){
        return
    }else if(window.JSON){
        str = JSON.stringify(obj)
        newobj = JSON.parse(str)
    }else{
        for(let key in obj){
            newobj[key] = typeof obj[i] === 'object'? Object.prototype.deepCopy(obj[key]) : obj[key]
        }
    }
    return newobj
}
var obj1 = { name : 'test1', age :25, b : { name : 'test2', age : 20}}
var obj2 = Object.prototype.deepCopy(obj1)
obj2.b.age = 21
log('obj2',obj2)
log('obj1',obj1)
