const countConsistentStrings = (allowed, words) => {
    let allowedSet = new Set(allowed);
    let count = 0;

    for (let word of words) {
        if ([...word].every(char => allowedSet.has(char))) {
            count++;
        }
    }

    return count;
}
 
console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])); // Output: 2
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])); // Output: 7
console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])); // Output: 4
