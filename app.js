function calc(){
        var resultString = "";
        var Height = document.getElementById("HeightID");
        var Weigh = document.getElementById("WeighID");
        var hCalc = Height.value * Height.value;
        var result = parseInt(Weigh.value / hCalc); 
        resultString += result;

        if(result < 18)
                resultString += " | Zayıf"
        else if(result >= 18 && result <25)
                resultString += " | Normal"
        else if(result >= 25 && result <29)
                resultString += " | Fazla Kilo"
        else if(result >= 30)
                resultString += " | Obez"
        document.getElementById("resultDisplay").innerHTML = resultString ;
        
}
