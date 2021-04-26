type myObject = { [key in string | number]: any }

export default function serialize(value: number | string | myObject, level: number) {
    let serialized =''
    if (level) {           
        
        if (typeof(value) != "object") { 
            serialized = typeof(value) + '(' + `${value}` + ')' 
        } else if (Array.isArray(value)){
            serialized = 'Array('
            let valueArr: (string|number)[] = []
            value.forEach( (item: number | string | Object) => {
                if (typeof(item) != "object") {           
                    valueArr.push(item)
                } else  {
                    valueArr.push(serialize(item, level-1))
                } 
            } )
            serialized += valueArr.join(', ') 
            serialized += ')'        
        } else {
            serialized = 'Object('            
            let valueArr: (string|number)[] = []
            for (let key in value) {
                if (typeof(value[key]) != "object") {
                    valueArr.push(key+'='+value[key])
                } else {
                    valueArr.push( key + ' = ' + serialize(value[key], level-1))
                }         
            }
            serialized += valueArr.join(', ')
            serialized += ')'
        }
        return serialized   
    } else if (Array.isArray(value)){
        serialized += 'Array'
        return serialized 
    } else {
        serialized += 'Object'
        return serialized 
    }
}


/*console.log (serialize (1, 1))

console.log (serialize ([1, 2, 3], 1))

console.log (serialize ( [1, 2, {a: 3, b: 4}, [5, 6]], 2 ))

console.log (serialize ( {a: 1, b: 2, c: [5, {d:7, e:12}], d: {a: 3, b: 4}}, 2 ))

console.log (serialize ( {a: 1, b: 2, c: [5, {d:7, e:12}], d: {a: 3, b: 4}}, 3 ))*/