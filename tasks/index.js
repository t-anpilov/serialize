function serialize(value) { 
    const serialized = {type: '', resultValue: ''}

    const iterArray = function (elem, result) {
        if (typeof(elem) != "object") {
            result.push(elem)
        } else if (Array.isArray(elem)) {
            result.push('Array('+elem+')')
        } else {
            let itemArr = []
            for (key in elem) {
                itemArr.push(key+'='+elem[key])
            }
            result.push('Object('+itemArr.join(', ')+')')
        }
    }
    
    const iterObj = function(elem, result) {
        if (typeof(elem) != "object") {
            result.push(key+'='+elem)
        } else if (Array.isArray(elem)) {
            result.push(key+'=Array('+elem+')')
        } else {
            let itemArr = []
            for (newKey in elem) {
                itemArr.push(newKey+'='+elem[newKey])
            }
            result.push(key+'=Object('+itemArr.join(', ')+')')
        }
    }
    
    if (typeof(value) != "object") {
        serialized.type = typeof(value)  
        serialized.resultValue = value     
    } else if (Array.isArray(value)){
        serialized.type = 'Array' 
        let valueArr = []
        value.forEach( (item) => {
            iterArray(item, valueArr)
        } )
        serialized.resultValue = valueArr.join(', ')           
    } else {
        serialized.type = 'Object'
        let valueArr = []
        for (key in value) {
            iterObj(value[key], valueArr)
        }
        serialized.resultValue = valueArr.join(', ')
    }
    
    console.log(`${serialized.type} (${serialized.resultValue})`)
}


serialize (1)
serialize ([1, 2, 3])
serialize ( [1, 2, {a: 3, b: 4}, [5, 6]] )
serialize ( {a: 1, b: 2, c: [5, 6], d: {a: 3, b: 4}} )
