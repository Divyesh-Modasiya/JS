let a = document.getElementById("in1").value
if (a=="") {
    document.getElementById("ans").innerHTML="Enter valid marks"
}
else{
    if (a>=90 && a<=100) {
        document.getElementById("ans").innerHTML="A grade"
    }
    else if(a>=80 && a<=89){
        document.getElementById("ans").innerHTML="B grade"
    }
    else if(a>=70 && a<=79){
        document.getElementById("ans").innerHTML="C grade"
    }
    else if(a>=60 && a<=69){
        document.getElementById("ans").innerHTML="D grade"
    }else{
        document.getElementById("ans").innerHTML="F grade"
    }
}