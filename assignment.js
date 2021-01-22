// https://github.com/nayancm/assignment-three


// kilometerToMeter function start here.=========01=========
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log("Your input is negative! please try with a positive number.");
    }
    else if(typeof kilometer == "string"){
        console.log("Your input is a string! please try with a positive number.");
    }
    else{
        var meter = kilometer * 1000;  // We know, 1km = 1000 meter.
        return  meter.toFixed(2);     // We show two digit after decimal point.
    }
    
}

//console.log(kilometerToMeter(5));
// kilometerToMeter function end here.==========01==========





// budgetCalculator function start here.========02==========
function budgetCalculator(watch, mobile, laptop){
    if((watch < 1 || mobile < 1 || laptop < 1) || (typeof wathch == 'string' || typeof mobile == 'string' || typeof laptop == 'string')){
        console.log("Please give all input, positive integer number.");
    }
    else{     // total price calculation below.
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + mobilePrice + laptopPrice;
        return totalPrice;
    }
    
}

//console.log(budgetCalculator(6, 4, 3));
// budgetCalculator function end here.===========02=========






// hotelCost function start here.============03=============
function hotelCost(days){
    // Declaration all variables.
    var oneToTenDays = 0;
    var elevenToTwentyDays = 0;
    var twentyOnePlusDays = 0;
    var remainingDays = 0;
    var totalCost = 0;

    if((days <= 0) || (typeof days == 'string')){
        console.log("Your input is negative or '0'(zero) or string. Please input a positive number.");
    }
    else{
        if(days <= 10){             //Cost of 1 to 10 days
            oneToTenDays = days * 100;
            totalCost = oneToTenDays;
            return totalCost;
        }
        else if(days <= 20){        // Cost of 11 to 20 days
            oneToTenDays = 10 * 100;
            remainingDays = days - 10;
            elevenToTwentyDays = remainingDays * 80;
            totalCost = oneToTenDays + elevenToTwentyDays;
            return totalCost;
        }
        else{                     // cost of after 20 days
            oneToTenDays = 10 * 100;
            elevenToTwentyDays = 10 * 80;
            remainingDays = days - 20;
            twentyOnePlusDays = remainingDays * 50;
            totalCost = oneToTenDays + elevenToTwentyDays + twentyOnePlusDays;
            return totalCost;
        }
    }
}

//console.log(hotelCost(22));
// hotelCost function end here.=============03==============





// megaFriend function start here.=============04============
// with some friends name
var friends = ["Nayan", "Sajal", "Rahman", "Abu Khayer", "Anuz"];
// without any name
//var friends = []; 

function megaFriend(friends){
    var bigName = friends[0];
    if(friends.length == 0){
        console.log("Your array is empty. Please write some name in 'friends' array.");
    }
    else{     //we know arry index start with 0(zero)
        for(var i = 0; i < friends.length; i++){
            if(friends[i].length > bigName.length){
                bigName = friends[i];
            }
        }
        return bigName;
    }

}

//console.log(megaFriend(friends));
// megaFriend function end here.=============04=============



