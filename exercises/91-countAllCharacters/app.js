// Write your function here
function countAllCharacters(myWord) {
    let newObj = {};
    let letra = '';
    let word = myWord.toLowerCase();

    if(word !== '') {
    	for(let i=0;i<word.length;i++) {
	    	letra = word.charAt(i);
	    	if(!getProperty(newObj, letra)) {
	    		newObj[letra] = countCharacter(word, letra);
	    	}
	    }
    }
    return newObj;
}

function getProperty(obj, key) {
	return obj[key] !== undefined ? true : false;
}

function countCharacter(word, char) {
	let count = 0;
	let index = word.indexOf(char);

	while ( index != -1 ) {
	   count++;
	   index = word.indexOf(char, index+1);
	}
	return count;
}

var output = countAllCharacters('otorrinolaringolo');
console.log(output); // --> {b: 1, a: 3, n: 2}