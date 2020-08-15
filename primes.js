function isPrime(integer) {
    // Check if the number is equal to, or less than, 1. If so, return false because it isn't prime
    if (integer <= 1) {
        return false;
    } else {

        // Otherwise, start to loop through the numbers that precede the given integer, starting with 2
        for (var i = 2; i < integer; i++) {
            // if the integer can be divisible  by [i], return false because it isn't prime
            if (integer % i === 0) {
                return false;
            }
        }
    }

    // Else, return true because the number IS prime
    return true;
}

// Optimized
isPrime = integer => {
    if (integer <= 1) {
        return false;
    } else {
        for (let i = 2; i < integer; i++) {
            if (integer % i === 0) {
                return false;
            }
        }
    }
    return true;
}