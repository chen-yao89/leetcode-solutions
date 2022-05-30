var uniqueMorseRepresentations = function(words) {
    var morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    var lettersArr = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    var a = 0;
    let newWords = words.map((word, index) => {
        var wordArr = word.split('').map(x => lettersArr.indexOf(x))
        return wordArr.map(x => morseArr[x]).join('')
    }).sort()
    newWords.map((x, i) => {
        x !== newWords[i-1] ? a++ : null
    })
        
    return a

};
