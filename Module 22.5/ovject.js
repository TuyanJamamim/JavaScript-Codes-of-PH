const student = {
    name : "Tuan Jamamim",
    id : 121 ,
    address : "Alaipur,Natore",
    isSingle : true ,
    friends : ["Nadim" , "Rifat" , "Mahin" , "Shanto"] , //array property can be inside an object

    education : [{year: 2016, degree : "SSC" , result:"Gpa 5.00" } , 
       {year: 2018, degree : "HSC" , result:"Gpa 4.50" } ],//objects can be inside an array and it can be a property of another object
       
    car : {
        brand : "MG" ,
        price : 5000000 ,
        made : 2024 ,
        manufacturer : { 
            place: "UK" ,
            Owner : "China"

        } //even an object can be properties of another object

    },//objects can be inside an object

    study : function (){
        console.log("Act like Tuan")
    }//function can also be declared inside an object..giving function name is not mandatory
}

console.log(student.study());//here is how function inside an ovject is called