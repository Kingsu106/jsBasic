// Bai 1
// Cau a
let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
for ( i = 0;i < arr.length;i++){
    console.log('Phan tu thu %s = %s',i+1,arr[i])
}
// Cau b 
let sum = 0
for (i = 0;i < arr.length;i++){
    sum = sum + arr[i]
}
console.log ('Tong cac phan tu trong mang = %s',sum)
// Cau c
let slt = arr[0]
let grt = arr[0]
for (i = 1;i < arr.length;i++){
    if (slt > arr[i]){slt = arr[i]}
    if (grt < arr[i]){grt = arr[i]}
}
console.log ('So lon nhat la %s',grt)
console.log ('So nho nhat la %s',slt)
//Cau d
let tbc = sum / arr.length
console.log('Trung binh cong = %s',tbc)
// Cau e
let arr2 = []
for (i = 0;i < arr.length;i++){
    arr2[i] = arr[arr.length-(i+1)]
}
for (i = 0;i < arr.length;i++){
    console.log(arr2[i])
}
// Cau f
let c = 0
let ex = 0
let exarr = []
let check = true
for (i = 0;i < arr.length;i++){
    c = 0
    check = true
    if (ex > 0){
    for(e = 0;e < exarr.length;e++){
        if(arr[i]==exarr[e]){
            check = false
        }
    }}
    if (check){
        for (j = 0;j < arr.length;j++){
        if (arr[i] == arr[j]){
            c= c+1
        }
    }}
    if (c > 0){
        exarr[ex]= arr[i]
        ex = ex+1
        console.log('So %s gom %s so',arr[i],c)
    }
}
// Cau g
let arr3 = []
for (i = 0;i < arr.length;i++){
    arr3[i+1]=arr[i]
}
arr3[0] = 117
for (i = 0;i < arr3.length;i++){
    arr[i]=arr3[i]
}
for (i = 0;i < arr.length;i++){
    console.log('Phan tu thu %s:%s',i+1,arr[i])
}
// Cau h
check = true
for (i = 0;i < arr.length-1;i++){
    if( arr[i]>arr[i+1]){
        check = false
    }
}
if (check){
    console.log('Mang la day so tang dan')
}
else{
    console.log('Mang khong la day so tang dan')
}
// Cau i
let swp = 0
for (i = 0;i < arr.length-1;i++){
    for(j = i+1;j < arr.length;j++){
        if (arr[i]>arr[j]){
            swp = arr[j]
            arr[j] = arr[i]
            arr[i] = swp
        }
    }
}
console.log('Mang so tang dan:')
for (i = 0;i < arr.length;i++){
    console.log(arr[i])
}
// Cau j
for (i = 0;i < arr.length;i++){
    arr2[i] = arr[arr.length-(i+1)]
}
console.log('Mang so giam dan:')
for (i = 0;i < arr.length;i++){
    console.log(arr2[i])
}
// Cau k va l
let oddarr = []
let odd = 0
let evvarr = []
let even = 0
for (i = 0; i < arr.length;i++){
    if (arr[i]% 2 == 0){
        evvarr[even]=arr[i]
        even = even + 1
    }
    else{
        oddarr[odd] = arr[i]
        odd = odd + 1
    }
}
console.log('Mang so chan :')
for (i = 0; i < evvarr.length;i++){
    console.log(evvarr[i])
}
console.log('Mang so le :')
for (i = 0; i < oddarr.length;i++){
    console.log(oddarr[i])
}
// Bai 2
// Cau a
arr2 = [5,-2,5,-6,23,69,100,-13,10,0,14]
console.log('Cap so co tong bang 10 la:')
for (i = 0;i < arr2.length-1;i++){
    for (j = i+1;j < arr2.length;j++){
        if (arr2[i]+arr2[j] == 10){
            console.log('%s va %s',arr2[i],arr2[j])
        }
    }
}
// Cau b
for (i = 0;i < arr2.length-1;i++){
    for (j = i + 1;j < arr2.length;j++){
        if (arr2[i] == arr2[j]){
            swp = arr2[j]
            for (k = j;k < arr2.length;k++){
                if (k == arr2.length-1){
                    arr2[k]=swp
                }
                else{
                arr2[k] = arr2[k+1]
                }
            }
        }
    }
}
swp = arr2.pop()
for (i = 0;i<arr2.length;i++){
    console.log(arr2[i])
}
// Cau d
let gt1 = arr2[0]
let gt2 = arr2[0]
let gt3 = arr2[0]
for (i = 0;i < arr2.length;i++){
    if (gt1 < arr2[i]){
        gt1 = arr2[i]
    }
}
for (i = 0;i < arr2.length;i++){
    if (gt2 < arr2[i] && arr2[i] < gt1){
        gt2 = arr2[i]
    }
}
for (i = 0;i < arr2.length;i++){
    if (gt3 < arr2[i] && arr2[i] < gt2){
        gt3 = arr2[i]
    }
}
console.log(' %s %s %s',gt1,gt2,gt3)