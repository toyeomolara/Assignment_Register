function Submit(){
    var formData = data();
    var readData = result(datagotten);
    insert(readData)
    
    // /alert("Your attendance has been submitted")
}


function data(){
// // Get data input
     var name = document.getElementById("name").value;
     var studClass = document.getElementById("class").value;
     var seatNo = document.getElementById("seatNo").value;
    //store data in array
    var arr= [name,studClass,seatNo];
    return arr
    }
   

//     store data in local storage
 function result(datagotten){
    var studname = localStorage.setItem("name",datagotten[0]);
   var studClasses = localStorage.setItem("studClass",datagotten[1]);
   var studSeatNo = localStorage.setItem("seatNo",datagotten[2]);

 }
   

    //retrieve data 
    
     var sName = localStorage.getItem("name",studname );
     var sClass =localStorage.getItem("studClass", studClasses);
     var sSeatNo =localStorage.getItem("seatNo", studSeatNo );
   
   var arr =[sName,sClass,sSeatNo];
 return arr

 
