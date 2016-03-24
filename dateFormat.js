function formatDate(userDate) {
   // format from M/D/YYYY to YYYYMMDD
   var date = userDate.split("/");
   var month = date[0];
   var day = date[1];
   var year = date[2];

   if(month.length < 2){
    month = "0" + month;
   }

   if(day.length < 2){
    day = "0" + day;
   }

   console.log(year + month + day);

}

// For testing purposes (do not submit uncommented):
// console.log(formatDate("12/31/2014"));

//example case
formatDate("04/04/1986");

//two-digit month
formatDate("12/04/1986");

//one-digit day:
formatDate("12/3/1988");

//one-digit month:
formatDate("1/1/1985")
