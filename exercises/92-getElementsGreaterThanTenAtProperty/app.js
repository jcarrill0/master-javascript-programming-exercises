// Write your function here

function getElementsGreaterThan10AtProperty (obj, key) {
    let arr = [];

    if(obj[key] !== undefined && Array.isArray(obj.key) && obj.key.length > 0 ) {
        arr = obj.key.filter(item => item > 10);
    }
    return arr;
}

var obj = {
    key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]