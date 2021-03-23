const serialized = {type: '', resultValue: ''}

function serialize(value) {   
    if (typeof(value) != "object") {
        serialized.type = typeof(value)  
        serialized.resultValue = value     
    } else {
        if (Array.isArray(value)){
            serialized.type = 'Array'
            serialized.resultValue = value.join(', ')           
        } else {
            serialized.type = 'Object'
            let valueArr = []
            for (key in value) {
                valueArr.push(key+'='+value[key])
            }
            serialized.resultValue = valueArr.join(', ')
        }
    }
    console.log(`${serialized.type} (${serialized.resultValue})`)
}


serialize (1)
serialize ([1, 2, 3])
serialize ( [1, 2, {a: 3, b: 4}, [5, 6]] )
serialize ( {a: 1, b: 2, c: [5, 6]} )
