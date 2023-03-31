// otp generation
// var otp=Math.floor(Math.random()*1000000);
// console.log(otp);
// math random =0.45545453154  =0455.4554
// math floor=0 =0455

// console.log('otp')
// function otp(){
//  var digits='123456789';
//  var otp='';
//  var len=digits.length;
//  for(let i=0;i<6;i++){
//     otp += digits[Math.floor(Math.random()*len)]
//  }
 
//  return otp;
// }
// document.write('otp will be valid for 30sec only')
// document.write(otp());

// console.log(Math.floor(Math.random()*10));
// math random generates no 0.58961534
// pooja764
console.log('otp generation')
function otp(){
    var p='pooja178';
    var otp='';
    var len=p.length;
    for(let i=0;i<4;i++){
        otp += p[Math.floor(Math.random()*len)]
    }
    alert(`the otp is valid for 3o sec only : ${otp}`)
}
otp()
// template string - an variable