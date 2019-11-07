var totalBill = [124, 48, 268];
var tip1, tip2, tip3;



function tipCalculator(bill)
{
    if(bill <50)
        {
            return bill * 0.2;
        
        }
    else if(bill >= 50 && bill <200)
            {
            return bill * 0.15;
            }
    else 
        {
            return bill * 0.1;
        }
}
tipCalculator(totalBill[0]);

var finalTips = [tipCalculator(totalBill[0]), tipCalculator(totalBill[1]), tipCalculator(totalBill[2])];
var finalSpent = [ finalTips[0]+totalBill[0], finalTips[1]+totalBill[1], finalTips[2]+totalBill[2]];
console.log("final spent");
console.log(finalSpent[0], finalSpent[1], finalSpent[2]);