// outer: for (let i = 0; i < 5; i++) {
//     console.log(i);
//     break outer
// }

let iterations = 0; 
top: for (let i = 0; i < 5; i++) { 
    inner: for (let j = 0; j < 5; j++) { 
                iterations++; 
                if (i === 2 && j === 2) { 
                    continue inner; 
            } 
        } 
    } 
console.log(iterations); // 13