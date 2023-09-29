// Bai 1
let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
for ( i = 0;i < arr.length;i++){
    console.log('Phan tu thu %s = %s',i+1,arr[i])
}
let sum = 0
for (i = 0;i < arr.length;i++){
    sum = sum + arr[i]
}
console.log ('Tong cac phan tu trong mang = %s',sum)
let slt = arr[0]
let grt = arr[0]
for (i = 1;i < arr.length;i++){
    if (slt > arr[i]){slt = arr[i]}
    if (grt < arr[i]){grt = arr[i]}
}
console.log ('So lon nhat la %s',grt)
console.log ('So nho nhat la %s',slt)
let tbc = sum / arr.length
console.log('Trung binh cong = %s',tbc)
