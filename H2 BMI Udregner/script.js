function bmicalculator() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var bmi = weight / (Math.pow(height,2));
    
    var bmi = bmi * 10000;

    bmi = Math.round(bmi);

    document.getElementById("bmiresult").value = bmi;
}
