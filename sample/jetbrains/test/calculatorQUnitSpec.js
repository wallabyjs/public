module('calculator model', {
    beforeEach: function () {
        this.calculator = new Calculator();
    },
    afterEach: function () {

    }
});

test('should add numbers', function () {
    console.log(this.calculator.add(Infinity, NaN));
    console.log(this.calculator.add(2, 3));
    equal(this.calculator.add(2, 3), 5);
});

test('should throw error when dividing by zero', function () {
    var calculator = this.calculator;

    throws(
        function () {
            calculator.divide(1, 0);
        },
        'Attempt to divide by zero'
    );

    // console.log(this.calculator.divide(2, 0));
    console.log(this.calculator.divide(0, 2));
    console.log(this.calculator.divide(2, -3));
});

test('should divide number', function () {
    equal(this.calculator.divide(6, 2), 3);
});

test('should subtract positive numbers', function () {
    equal(this.calculator.subtract(4, 2), 2);
});

test('should multiply numbers', function () {
    equal(this.calculator.multiply(0, 3), 0);
    equal(this.calculator.multiply(3, 0), 0);
});


module('calculator view', {
    beforeEach: function () {
        $('body').append("<div id=\"calculator\"/>");
        $('#calculator').html(calculatorTemplate);
        initCalculator();
    },
    afterEach: function () {
        $('#calculator').remove();
    }
});

test('should multiply numbers', function () {

    console.log(window.document.body.clientHeight);

    $('#7').click();
    $('#plus').click();
    $('#9').click();
    $('#eval').click();

    equal($('.screen').text(), '16');
});

test('should divide numbers', function () {
    $('#6').click();
    $('#divide').click();
    $('#3').click();
    $('#eval').click();

    equal($('.screen').text(), '2');
});


test('should multiply numbers', function () {
    $('#7').click();
    $('#multiply').click();
    $('#8').click();
    $('#eval').click();

    equal($('.screen').text(), '56');
});


test('should subtract numbers', function () {
    $('#7').click();
    $('#minus').click();
    $('#8').click();
    $('#eval').click();

    equal($('.screen').text(), '-1');
});
