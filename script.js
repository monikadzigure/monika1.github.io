
console.log('Script started');



function innit () {
    console.log('Adding listeners')
    addListeners();
    document.getElementById('elements');
    
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
    var submitCustom = document.getElementById('generate2');
    submitCustom.addEventListener("click", onClickCustom);
}







window.onload = function () {
    document.getElementById("fizzButton").addEventListener('click', function() {
        var buzz,			// the second divisor to test
            fizz,			// the first divisor to test
            showResult,		// the div to display the result of the calculation
            start,			// the beginning number
            stop;			// the last number

        buzz = document.getElementsByName('buzzValue').item(0).value;
        fizz = document.getElementsByName('fizzValue').item(0).value;
        start = document.getElementsByName('startValue').item(0).value;
        stop = document.getElementsByName('endValue').item(0).value;

        showResult = document.getElementById('showResult');
        showResult.textContent = '';

        if (!validNumbers()) {
              return;
        }

        for (var i = Number(start); i <= Number(stop); i++) {
            if (i % (fizz * buzz) == 0) {
                addItem('fizzBuzz', 'fizzBuzz');
            } else if (i % fizz == 0) {
                  addItem('fizz','fizz');
            } else if (i % buzz == 0) {
                addItem('buzz', 'buzz');
            } else {
                addItem(i, 'number');
            }
        }




    }, false );


   

    addItem = function (caption, typeName) {
        var newItem; 	// a bubble-shaped div displaying the current counting caption

        newItem = document.createElement('div');
        newItem.appendChild(document.createTextNode(caption));
        newItem.classList.add(typeName);
        newItem.classList.add('result');

        showResult.appendChild(newItem);
    };

    validNumbers = function () {
        var errMessage,	// text to display if an invalid entry is detected
            inputs;		// NodeList of textboxes whose contents are being tested

        inputs = document.querySelectorAll('input[type=text]');

        errMessage = document.getElementById('errorMessage');
        errMessage.style.visibility = 'hidden';

        for (var i = 0; i < inputs.length; i++) {
            if (isNaN(inputs[i].value) || inputs[i].value === '') {
                errMessage.style.visibility = 'visible';
                return false;
            }
        }

        return true;
    };
};
