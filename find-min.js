let x = [ 2 , 3 , -4 , ]
let i = 1

let min = x[0]
for (let i = 1 ; i < x.length ; i++){
    if (x[i] < min){
        min = x[i]
    }
}

min
