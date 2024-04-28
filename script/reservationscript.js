var date = new Date();
document.getElementById("bookingdate").value = new Date(date.setDate(date.getDate()+1)).toISOString().slice(0,10);
document.getElementById("bookingdate").min = document.getElementById("bookingdate").value;
document.getElementById("bookingdate").max = new Date(date.setMonth(date.getMonth()+2)).toISOString().slice(0,10);
document.getElementById("bookingtime").innerHTML= document.getElementById("bookingdate").value + ' at *: ';
function changeTime(e){
    document.getElementById("bookingtime").innerHTML= document.getElementById("bookingdate").value + ' at *: ';
}
function changeSeat(e){
    document.getElementById("childseats").max = document.getElementById("seats").value-1;

    if (document.getElementById("childseats").value >= document.getElementById("seats").value){
        document.getElementById("childseats").value = document.getElementById("seats").value-1;
    }
}
