import  serialize from '../index'

import { expect } from 'chai'

describe('revert to custom string', function() {
    it('serialize incoming objects', function() {

        let result1 = serialize(1)        

        expect(result1).to.equal(true)
        
    })
    
})