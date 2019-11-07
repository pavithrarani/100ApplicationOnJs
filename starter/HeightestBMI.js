var john ={
    fullname: 'john smith',
    mass: 100,
    height: 165,
    calBMI: function(){
       this.BMI = (this.mass) / (this.height * this.height) ;
        return this.BMI;
    }
}

var martin ={
    fullname: 'martin kumar',
    mass: 90,
    height: 195,
    calBMI: function(){
    this.BMI = (this.mass) / (this.height * this.height) 
        return this.BMI;
    }
}

console.log(john,martin);
console.log(john.calBMI(), martin.calBMI());


console.log((john.BMI > martin.BMI )? john.fullname + ' has more BMI'+ john.BMI : martin.fullname + ' has less BMI: '+ martin.BMI );
