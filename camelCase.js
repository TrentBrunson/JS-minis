function toCamelCase(str) {
    // take the input string, and split it where there is an underscore or    a dash
   var splitSentence = str.split(/[-_]/);
   // use a loop to go through each item of  the splitSentence
   for (var i = 1; i < splitSentence.length; i++) {
// take the first item in that sentence, capitalize it, and then remove the uncapitalized version
       splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() +    splitSentence[i].slice(1)

   }
   // join the  array back together
   var camelCaseStr = splitSentence.join('');

   // return the solved string
   return camelCaseStr;

}

// inputs
// toCamelCase("this-is-a-string")
// toCamelCase("This_is_not_an_integer")

// Optimized version
toCamelCase = str => {
    let splitSentence = str.split(/[-_]/);
    for (let i = 1; i < splitSentence.length; i++) {
        splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() +    splitSentence[i].slice(1)
    }
    const camelCaseStr = splitSentence.join('');
    return camelCaseStr;
}