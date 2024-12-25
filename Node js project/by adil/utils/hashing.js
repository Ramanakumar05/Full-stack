const {createHmac} =require('crypto')
const {hash,compare} =require('bcryptjs')
exports.tohash=(value,saltvalue)=>
{
    const result=hash(value,saltvalue)
    return result
}

exports.dohashValidation=(value,hashvalue)=>
{
    const result=compare(value,hashvalue)
    return result
}

exports.hmacProcess=(value,key)=>
{
    const result=createHmac('sha256',key).update(value).digest('hex')
    return result
}