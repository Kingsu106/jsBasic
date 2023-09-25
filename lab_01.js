function bai1caua(){
console.log('Hello world')
}
function bai1caub(){
console.log('LE QUANG THIEN')
}
function bai1cauc(){
console.clear()
} 
function bai1caud(){
console.log('*****')
console.log('*****')
console.log('*****')
console.log('*****')
console.log('*****')
}
function bai1caue(){
console.log('     *     ')
console.log('    ***    ')
console.log('   *****   ')
console.log('  *******  ')
console.log(' ********* ')
console.log('***********')
}
function bai1cauf(){
console.log(' ** ** ')
console.log('*  *  *')
console.log(' *   * ')
console.log('  * *  ')
console.log('   *   ')
console.clear()
}
function bai2(){
let a = 10
let b = '10'
// Cau a
console.log(a)
// Cau b
console.log(b)
// Cau c
a = 5
console.log(a)
// Cau d
const pi = 3.14
console.log(pi)
//  Cau e
// pi = 5
// console.log(pi)
// Cau f
dienthoai = new Object()
dienthoai.ten = 'Iphone 14'
dienthoai.hangsanxuat = 'Apple'
dienthoai.mausac = 'Trang'
dienthoai.gia = '1000 USD'
console.log(dienthoai)
// Cau g
dienthoai.gia = '750 USD'
console.log(dienthoai)
// Cau h
dienthoai.ten = 'Iphone 14 Promax'
console.log(dienthoai)
}
bai2()
// BAI 3
// Cau a
function bai3(){
let a = 5
let b = 2
function tong(a,b){
    tong = a + b
    return tong
}
function hieu(a=Number,b=Number){
    hieu = a - b
    return hieu
}
function tich(a,b){
    tich = a * b
    return tich
}
function thuong(a,b){
    thuong = a / b
    return thuong
}
console.log(tong(a,b))
console.log(hieu(a,b))
console.log(tich(a,b))
console.log(thuong(a,b))
// Cau b
a = 9
b = 7
function TBC(a,b){
    TBC = (a + b) / 2
    return TBC
}
console.log('TBC =',TBC(a,b))
// Cau c
let x = 3
let y = 4
let z = 6
function bai3cauc1(x,y,z){
c1=(x**2)+2*x+1
return c1
}
function bai3cauc2(x,y,z){
c2=x**3-3*x*y-5*y+3*y**2
return c2
}
function bai3cauc3(x,y,z){
c3=(x*y)**2-2*x**2*y+13*y
return c3
}
function bai3cauc4(x,y,z){
c4=4*x**3+3*x*y+y**2-(2*x**2-3*y)
return c4
}
function bai3cauc5(x,y,z){
c5=((5*x**2)/(4*x*y))+y**2
return c5
}
function bai3cauc6(x,y,z){
c6=x**2+(2*z*x*y)/(y**2)+5*x-2*y**2+4*x*z**3+z**3
return c6
}
console.log('BT1=',bai3cauc1(x,y,z))
console.log('BT2=',bai3cauc2(x,y,z))
console.log('BT3=',bai3cauc3(x,y,z))
console.log('BT4=',bai3cauc4(x,y,z))
console.log('BT5=',bai3cauc5(x,y,z))
console.log('BT6=',bai3cauc6(x,y,z))
// Cau d
let d = 5
function cvhtdk(d){
 c = d * 3.14
 return c
}
function dthtdk(d){
    s = (d/2)**2 * 3.14
    return s
}
console.log('Chu vi hinh tron =',cvhtdk(d))
console.log('Dien tich',dthtdk(d))
// Cau e
a = 15
b = 10
function cvhcn(a,b){
    c = (a+b)*2
    return c
}
function dthcn(a,b){
    s = a * b
    return s
}
console.log('Chu vi HCN =',cvhcn(a,b))
console.log('Dien tich HCN =',dthcn(a,b))
// Cau f
let dis = 120
let tim = 130
function vantoc(d,t){
    v = d / (t / 60)
    return v
}
console.log('Van toc =',vantoc(dis,tim),'km/h')
// Cau g
tim = 150
let vel = 60
function quangduong(v,t){
    d = v * (t / 60)
    return d
}
console.log('Quang duong =',quangduong(vel,tim),'km')
// Cau h
vel = 15.2
tim = 3 * 60
console.log('Quang duong =',quangduong(vel,tim),'km')
// Cau i
tim = (11*60) - ((8*60)+20)
vel = 42
console.log('Quang duong =',quangduong(vel,tim),'km')
// Cau j
function bai3cauj(){
console.log('The tich =',(5*6*(8**3))+5*6*8,'cm^3')
}
bai3cauj()
}
bai3()