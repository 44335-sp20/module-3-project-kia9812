/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
  
function genRand(){
        var rate = (math.floor((math.random() * 400) + 100));
        return rate;
    }

  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpires (myDate){
    
    var d = new Date();
    
    var dayResults = (d.getDay());
    
    if (d.getDay() == 0) {
        return "Sunday";
    }
     else 
         if (d.getDay() == 1){
         return "Monday";
     }
        else 
            if (d.getDay() == 2){
              return "Tuesday";
                
         else 
            if (d.getDay() == 3){
            return "Wednesday";
     }
        else 
            if (d.getDay() == 4){
              return "Thursday";
     }
       else 
            if (d.getDay() == 5){
            return "Friday";
     }
        else 
            if (d.getDay() == 6){
             return "Saturday";
     }
}
    return ("OFFER EXPIRES NEXT" + dayResult);

  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage

document.getElementById("offerEnds").innerHTML = myDate.genRand();

//create a new Date object

var myDate = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage

document.getElementById("offerEnds").innerHTML = myDate.getDate();
