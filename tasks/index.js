function serialize(value) { 
    const serialized = {type: '', resultValue: ''}
    
    if (typeof(value) != "object") {
        serialized.type = typeof(value)  
        serialized.resultValue = value     
    } else if (Array.isArray(value)){
        serialized.type = 'Array' 
        let valueArr = []
        value.forEach( (item) => {
            if (typeof(item) != "object") {
                valueArr.push(item)
            } else if (Array.isArray(item)) {
                valueArr.push('Array('+item+')')
            } else {
                let itemArr = []
                for (key in item) {
                    itemArr.push(key+'='+item[key])
                }
                valueArr.push('Object('+itemArr.join(', ')+')')
            }
        } )
        serialized.resultValue = valueArr.join(', ')           
    } else {
        serialized.type = 'Object'
        let valueArr = []
        for (key in value) {
            if (typeof(value[key]) != "object") {
                valueArr.push(key+'='+value[key])
            } else if (Array.isArray(value[key])) {
                valueArr.push(key+'=Array('+value[key]+')')
            } else {
                valueArr.push('Object('+value[key])
            }
        }
        serialized.resultValue = valueArr.join(', ')
    }
    
    console.log(`${serialized.type} (${serialized.resultValue})`)
}

//valueArr.push(serialize(value[key]))

serialize (1)
serialize ([1, 2, 3])
serialize ( [1, 2, {a: 3, b: 4}, [5, 6]] )
serialize ( {a: 1, b: 2, c: [5, 6]} )
