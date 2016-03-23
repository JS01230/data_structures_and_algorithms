//String compile!

var myString = "aaabbbbcccc"
var results = "";

function compString(inputString){
    count = 1;
    for(i=0; i<inputString.length; i++){
        if(i+1 < inputString.length && inputString.charAt(i)== inputString.charAt(i+1)){
            count++;
        }
        else{
            results += inputString.charAt(i) + count;
            count = 1
        }
    }
    console.log(results);
}

compString(myString);