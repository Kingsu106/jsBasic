function Bai1caua(a){
    if (a > 0)
    {
          console.log('So',a,'la so duong')
    }
    else if (a < 0){
        console.log('So',a,'la so am')
    }
    else {
        console.log('Day la so 0')
    }
}
function Bai1caub(a){
    if (a % 2 == 0){
        console.log('So',a,'la so chan')
    }
    else {
        console.log('So',a,'la so le')
    }
}
function Bai1cauc(a,b,c){
    max = a
    if (max < b){
        max = b
    }
    if (max < c){
        max = c
    }
    console.log('So lon nhat la:',max)
}
function Bai1caud(a){
    if (a % 4 == 0 || a % 100 != 0){
        console.log('Nam nay la nam nhuan')
    }
    else {
        console.log('Nam nay khong phai la nam nhuan')
    }
}
function Bai1caue(a){
    if (a == 'a'||a == 'e'|| a == 'i'|| a == 'o'|| a == 'u'){
        console.log('Ki tu nay la mot nguyen am')
    }
    else if ((a.length) > 1 || a == ''|| a == ' '){
        console.log('Day khong phai la mot ki tu')
    }
    else if (a == '0' || a == '1' || a == '2'|| a == '3'||a == '4'||a == '5'||a == '6'||a == '7'||a == '8'||a == '9'){
        console.group('Day la 1 chu so')
    }
    else {
        console.log('Ki tu nay la mot phu am')
    }
}
function Bai2caua(a,b,c){
    delta = b*b - 4*a*c
    if (a == 0 && b == 0||delta < 0){
        console.log('Phuong trinh vo nghiem')
    }
    else if (a == 0 ){
        console.log('Phuong trinh co nghiem duy nhat:',-c/b)
    }
    else if (delta == 0){
        console.log('Phuong trinh co nghiem kep:',-b/(2*a))
    }
    else {
        console.log('Phuong trinh co hai nghiem:')
        console.log('Nghiem thu nhat =',(-b - Math.sqrt(delta))/(2*a))
        console.log('Nghiem thu hai =',(-b + Math.sqrt(delta))/(2*a))
    }
}
function Bai2caub(a){
    tax = 0
    if (a > 15){
        tax = (a / 100) * 20
    }
    else if (a > 8){
        tax = (a / 100) * 15
    }
    console.log('Luong nhan vien =',a)
    console.log('Thue thu nhap =',tax)
}
function Bai2cauc(a,b,c){
    dtb = (a + b + c)/3
    if (dtb >= 9){
        console.log('Hoc luc hang A')
    }
    else if(dtb >= 7){
        console.log('Hoc luc hang B')
    }
    else if(dtb >= 5){
        console.log('Hoc luc hang C')
    }
    else {
        console.log('Hoc luc hang F')
    }
}
function Bai2caud(a){
    fee = 25000
    if (a <=50){
        fee = fee + a*600
    }
    else if (a <= 200){
        fee = fee + 600*50 + (a-50)*400
    }
    else {
        fee = fee + 600*50 + 150*400 + (a-200)*200
    }
    console.log('Tong phi cuoc goi :',fee)
}