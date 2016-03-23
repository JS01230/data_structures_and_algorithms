function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var countRight = a.length;
    var countLeft = 0;
    var numbers1 = [];
    var numbers2 = [];
    for(j = 0; j<a.length; j++){
        numbers1.push(a[j][countRight -1]);
        numbers2.push(a[j][countLeft]);
        countRight --;
        countLeft ++;
    };
    var sum1 = numbers1.reduce(function(a,b){return a + b});
    var sum2 = numbers2.reduce(function(a,b){return a + b});


    console.log(Math.abs(sum1-sum2));
}