// Challenge 1 - Your age in days

function ageInDays() {
    var birthYear = prompt('In ce an te-ai nascut?');  
    var date = new Date();
    var ageInDayss = (date.getFullYear() - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Varsta ta este de aproximativ ' + ageInDayss + ' zile');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}