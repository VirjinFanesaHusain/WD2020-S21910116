function hitungBmi() {
    var beratBadan = document.bmiForm.beratBadan.value;
    var tinggiBadan = document.bmiForm.tinggiBadan.value;
        if(beratBadan > 0 && tinggiBadan > 0){ 
            var finalBmi = beratBadan/(tinggiBadan/100*tinggiBadan/100);
                document.bmiForm.bmi.value = finalBmi;
    if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "Kurus";
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "Ideal";
    }
    if(finalBmi > 25){
    document.bmiForm.meaning.value = "Obesitas";
    }
    }
    else{
    alert("Proses gagal!!");
    }
    }
    