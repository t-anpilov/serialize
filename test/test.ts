import  serialize from '../index'

import { expect } from 'chai'

describe('revert to custom string', function() {
    it('serialize incoming objects', function() {

        let result1 = serialize(1, 1)
        let result2 = serialize ([1, 2, 3], 1)
        let result3 = serialize ( [1, 2, {a: 3, b: 4}, [5, 6]], 2 )
        let result4 = serialize ( {a: 1, b: 2, c: [5, {d:7, e:12}], d: {a: 3, b: 4}}, 2 )
        let result5 = serialize ( {a: 1, b: 2, c: [5, {d:7, e:12}], d: {a: 3, b: 4}}, 3 )      

        expect(result1).to.equal('number(1)')
        expect(result2).to.equal('Array(1, 2, 3)')
        expect(result3).to.equal('Array(1, 2, Object(a=3, b=4), Array(5, 6))')
        expect(result4).to.equal('Object(a=1, b=2, c = Array(5, Object), d = Object(a=3, b=4))')
        expect(result5).to.equal('Object(a=1, b=2, c = Array(5, Object(d=7, e=12)), d = Object(a=3, b=4))')
    })
    
})