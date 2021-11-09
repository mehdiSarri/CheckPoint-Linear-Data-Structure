// let set1 = [3, 1, 7, 9]    //First exemple
// let set2 = [2, 4, 1, 9, 3]

let set1= [12, 13, 6, 10]   // second exemple
let set2= [13, 10, 16, 15]


let sumDist = 0
let sumDouble = 0
let index


for (let i = 0; i < set1.length; i++) {
    index = 1
    for (let j = 0; j < set2.length; j++) {
        if (set1[i] == set2[j]) {
            index = 0
            console.log("i = " + i + " set1[i] = " + set1[i] + " ; j = " + j + " set2[j] = " + set2[j])
            sumDouble += set1[i]*2
        }
    }
    
    if (index == 1) {
        console.log(set1[i])
        sumDist += set1[i]
        
    }
}
for (let i = 0; i < set2.length; i++) {
    index = 1
    for (let j = 0; j < set1.length; j++) {
        if (set1[j] == set2[i]) {
            index = 0
            console.log("i = " + i + " set2[i] = " + set2[i] + " ; j = " + j + " set1[j] = " + set1[j])
        }
    }
    
    if (index == 1) {
        console.log(set2[i])
        sumDist += set2[i]
        
    }
}
    
console.log("sumDistnct is : " + sumDist)
console.log("Sum of double : " + sumDouble)