let array1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let array2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];
console.log(array1);
console.log(array2);
console.log("=============================")

for(i = 0; i < array1.length; i++){
    sum= array1[i]+array2[i];
    mult = array1[i]*array2[i];
    console.log(array1[i]+ " + "+ array2 [i] +" = "+sum);
    console.log(array1[i]+ " * "+ array2 [i] +" = "+mult);
    console.log("=============================")
}