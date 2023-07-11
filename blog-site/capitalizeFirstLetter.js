export function capitalizeFirstLetter(str, id) {
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }

    const str2 = arr.join(" ");
console.log('capitalizeFirstLetter test', str2);
return {str2, id};
}