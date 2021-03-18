var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var fullName = firstNameValue+' '+lastNameValue;
    document.getElementById('fullName').value = fullName;
};

var btnAddition = document.getElementById('addition');
btnAddition.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber + lastNumber;
    document.getElementById('result').value = result;
};

var btnSubtraction = document.getElementById('subtraction');
btnSubtraction.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber - lastNumber;
    document.getElementById('result').value = result;
};

var btnMultiplication = document.getElementById('multiplication');
btnMultiplication.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber * lastNumber;
    document.getElementById('result').value = result;
};

var btnDivision = document.getElementById('division');
btnDivision.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber / lastNumber;
    document.getElementById('result').value = result;
};

var btnRemainder = document.getElementById('remainder');
btnRemainder.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber % lastNumber;
    document.getElementById('result').value = result;
};






// var paragraphElement = document.getElementsByTagName('p');
//
// for (var key=0; key<paragraphElement.length; key++){
//     document.write(paragraphElement[key].innerHTML+'<br/>');
// }

// var data = [10,20,30,40,50];
// data[0] = 10;
// data[1] = 20;
// data[2] = 30;
//
// data['name'] = 'Sumon';
// data['city'] = 'Uttara';
// data['country'] = 'Bangladesh';

// var data = ['Sumon', 'uttara', 'bangladesh'];
// document.write(data.length);
// for(var key in data)
// {
//     document.write(data[key]+'<br>');
// }

// function demo(){
//     var firstName = 'Sumon';
//     var lastName = "Khan";
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }

// function demo(firstName, lastName){
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }
// document.write('<br>==================<br>');
// demo('Sumon', 'Khan');
// document.write('<br>==================<br>');
// demo('Ashraful', 'Joy');
// document.write('<br>==================<br>');
// demo('Josim', 'Khan');