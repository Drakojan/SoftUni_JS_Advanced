let chart = function Solve (name, age, weight, height) {
    
    let patientChart = {};

    patientChart['name']=name;

    patientChart['personalInfo']={
        age,
        weight,
        height,
    }

    let heightMeters=height/100

    patientChart['BMI'] = Math.round(weight/Math.pow(heightMeters,2));

if (patientChart['BMI']>=30) {
    patientChart['status']='obese';
    patientChart['recommendation']='admission required';
}

if (patientChart['BMI']<30) {
    patientChart['status']='overweight';
}

if (patientChart['BMI']<25) {
    patientChart['status']='normal';
}

if (patientChart['BMI']<18.5) {
    patientChart['status']='underweight';
}
    return patientChart;
}

console.log(chart('“Honey Boo Boo”', 9, 57, 137));