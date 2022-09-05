/*let num = [2,7,4,8,1,5]
let pos = 0
for (pos;pos<num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]} `)
}
*/
let num = [2,7,4,8,1,5]
let pos = 0
for(pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}