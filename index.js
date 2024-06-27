// 1
// let array = [5, 7, 4];
// array[1] = 10;
// console.log(array);


// 2
// let array = ['a', 'b', 'c'];
// array[3] = 'd';
// console.log(array);

// 3
// let array = [5, 7, 4];
// let sum = 0;
// for(let i = 0; i < array.length; i ++){
//     sum += array[i];
// }
// console.log(sum);

// 4
// let array = [5, 7, 4, 66, 3];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// 5
// let array = ['Dima', 'Aleksandr', 'Maxim', 'Andrey', 'Nikita'];
// for(let i = 0; i < array.length; i++){
//     if(array[i].length > 5){
//         console.log(array[i]);
//     }
//     else{
//         continue;
//     }
// }

// 6
// let array = [5, 7, 4, 66, 3, 77, 9, 6, 8, 16];
// let biggestNumber = array[0]; 
// for(let i = 0; i < array.length; i++){
//     if(biggestNumber < array[i]){
//         biggestNumber = array[i];
//     }
// }
// console.log(biggestNumber);

// 7
let array = [5, 7, 4, 66, 3, 77, 9, 6, 8, 16];
for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            console.log(array[i]);
        }
        else{
            continue;
        }
}