/// Bai 1
// Cau a
let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
let i = 0
do{
    console.log('Phan tu thu %s:',i+1,arr[i])
    i++
}
while(i < arr.length)
// Cau b
i = 0
let sum = 0
do{
    sum = sum + arr[i]
    i++
}
while (i < arr.length)
console.log('Tong cac phan tu:',sum)
// Cau c
i = 0
let grt = arr[0]
let slt = arr[0]
do{
    if (grt < arr[i]){
        grt = arr[i]
    }
    if (slt > arr[i]){
        slt = arr[i]
    }
    i = i + 1
}
while (i < arr.length)
console.log('Phan tu lon nhat:',grt)
console.log('Phan tu nho nhat:',slt)
// Cau d
i = 0
sum = 0
do{
    sum = sum + arr[i]
    i++
}
while (i < arr.length)
let tbc = sum / i
console.log('Trung binh cong mang:',tbc)
// Cau e
i = 0
let revarr = []
do{
    revarr[i] = arr[arr.length - (i + 1)]
    i = i + 1
}
while (i < arr.length)
i = 0
console.log(revarr)
// Cau f
const appil = {}
i = 0
do{
    const num = arr[i]
    appil[num] = (appil[num] || 0) + 1
    i++
}
while (i < arr.length)
console.log (appil)
// Cau g
i = 0
let arr2 = []
do{
    arr2[i+1] = arr[i]
    i = i + 1 
}
while (i < arr.length)
arr2[0] = 117
i = 0
do{
    arr[i] = arr2[i]
    i = i + 1
}
while (i < arr.length)
console.log('Mang sau thay doi:',arr)
// Cau h
let check = true
i = 0
do{
    if (arr[i] > arr[i+1]){
        check = false
    }
    else {
        i = i + 1
    }
}
while(check && i < arr.length)
if (check){
    console.log('Mang tang dan')
}
else{
    console.log('Mang khong tang dan')
}
// Cau i
i = 0
let j = 1
let swp = 0
do{
    j = i + 1
    do{
        if (arr[i]>arr[j]){
            swp = arr[j]
            arr[j] = arr[i]
            arr[i] = swp
        }
        j = j + 1
    }
    while(j < arr.length)
    i = i + 1
}
while(i < arr.length - 1)
console.log('Mang so tang dan:',arr)
// Cau j
i = 0
revarr = []
do{
    revarr[i] = arr[arr.length - (i + 1)]
    i = i + 1
}
while (i < arr.length)
i = 0
console.log('Mang so giam dan:',revarr)
// Cau k va l
let oddarr = []
let odd = 0
let evvarr = []
let even = 0
i = 0
do{
    if (arr[i]%2 == 0){
        evvarr[even] = arr[i]
        even++
    }
    else{
        oddarr[odd] = arr[i]
        odd++
    }
    i = i+1
}
while(i < arr.length)
console.log('Mang so le:',oddarr)
console.log('Mang so chan:',evvarr)
/// Bai 2
// Cau a
arr2 = [5,-2,5,-6,23,69,100,-13,10,0,14]
i = 0
console.log('Cac cap so bang 10:')
do{
    j = i + 1
    do{
        if (arr2[i]+ arr2[j] == 10){
            console.log(arr2[i],'&',arr2[j])
        }
        j = j + 1
    }
    while(j < arr2.length)
    i = i + 1
}
while(i < arr2.length-1)
// Cau b
i = 0
let ers = 0
let k = 0
let c = 0
do{
    j = i + 1
    do{
        if (arr2[i] == arr2[j]){
            k = j
            ers = arr2[j]
            do{
                if (k == arr2.length - 1){
                    arr2[k] = ers
                }
                else{
                    arr2[k] = arr2[k+1]
                }
                k = k + 1
            }
            while (k < arr2.length)
        c = c + 1
        }
        j = j + 1
    }
    while(j < arr2.length)
    i = i + 1
}
while(i < arr2.length-1)
arr2.pop()
console.log(arr2)
// Cau d
i = 0
do{
    j = i + 1
    do{
        if (arr2[i]>arr2[j]){
            swp = arr2[j]
            arr2[j] = arr2[i]
            arr2[i] = swp
        }
        j = j + 1
    }
    while(j < arr2.length)
    i = i + 1
}
while(i < arr2.length - 1)
let gt1 = arr2[arr2.length-1]
let gt2 = arr2[arr2.length-2]
let gt3 = arr2[arr2.length-3]
sum = gt1 + gt2 + gt3
console.log('Tong ba so lon nhat:',sum)
// Cau e
console.log('Trung binh tong ba so lon nhat:',sum / 3)
// Cau f
let diff = arr2[arr2.length-1] - arr2[0]
console.log('Do lech lon nhat trong mang =',diff)