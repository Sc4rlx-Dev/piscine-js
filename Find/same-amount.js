


function sameAmount(str , gtx , rtx){

let cart_graphic = new RegExp(gtx, 'g')
let cart_graphic2 = new RegExp(rtx, 'g')

 
    // res = gtx.test(str)
let check =  str.match(cart_graphic) 
let check2 =  str.match(cart_graphic2) 
if ( check == null) {

    check = []
}
if ( check2 == null) {

    check2 = []
}

    // res = rtx.test(str)
    // console.log()
    // console.log(rtx.test(str))
    // console.log(gtx.test(str))

return check.length == check2.length
    // return gtx.test(str) && rtx.test(str)
}
 



console.log(
sameAmount("string", /h/, /w/))