function rotateLeft(arr, n) {
    // create a copy of the array and save it in a temporary variable
    var temp = arr.slice(0);
    // loop through the array as many times as we need to do rotations
    for (var i = 0; i < n; i++) {
        // remove the first item of the array, store it in a temporary variable
        var first = temp.shift();
        // add that temporary variable back at the end of the array
        temp.push(first);
    }
    // once completed, return the the newly rotated array
    return temp;
}

// inputs
// arr = [1,2,3,4,5];
// n = 2;


// Optimized version
rotateLeft = (arr, n) => {
    let temp = arr.slice(0);
    for (let i = 0; i < n; i++) {
        let first = temp.shift();
        temp.push(first);
    }
    return temp;
}