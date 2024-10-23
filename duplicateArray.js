function duplicateArray(arr) {
    let duplicatedArray = [...arr];  
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        duplicateArray[i] = item;
    }
    return duplicatedArray;
}

const originalArray = [1, 2, 3];
const duplicatedArray = duplicateArray(originalArray);
console.log(duplicatedArray); 