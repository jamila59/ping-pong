export function Entry(title, body){
  this.title = title;
  this.body = body;
}


Entry.prototype.countVowels = function(array){

  var vowelCount = 0;
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < vowels.length; j++){
      if (array[i] === vowels[j]){
        vowelCount += 1;
      }
    }
  }
  return vowelCount;
};


Entry.prototype.countConsonants = function(array){
  var length = array.length;
  var letterCounter = 0;

  array.forEach(function(item){
    if (item !== " "){
      letterCounter += 1;
    }
  })
  return letterCounter - countVowels(array);
};


Entry.prototype.getTeaser = function (array) {
  for (var i = 0; i < array.length; i++){
  if (array[i] === "." || array[i] === "!" || array[i] === "?") {
    var endpoint = i+1;
    var sliceInput = array.slice (0, endpoint);
    var joinedInput = sliceInput.join("");
  }
  }
  return joinedInput;
};
