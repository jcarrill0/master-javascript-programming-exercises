// Write your function here


function countAllCharacters(myWord) {
    let newObj = {};
    let letra = '';
    let word = myWord.toLowerCase();

    if(word !== '') {
    	for(let i=0;i<word.length;i++) {
	    	letra = word.charAt(i); // Obtener la letra en la posicion 'i'
	    	if(!existProperty(newObj, letra)) {
	    		newObj[letra] = countCharacter(word, letra);
	    	}
	    }
    }
    return newObj;
}

// Defene si existe o no una key un objeto dado
function existProperty(obj, key) {
	return obj[key] !== undefined ? true : false;
}

function countCharacter(word, char) {
	let count = 0;
	let index = word.indexOf(char); // devuelve la posición de la primer aparición de un texto especificado

	while ( index != -1 ) {
	   count++;
	   index = word.indexOf(char, index+1); // que inicie a busca de la posicion actual + 1
	}
	return count;
}

var output = countAllCharacters('helol');
console.log(output); // --> {b: 1, a: 3, n: 2}