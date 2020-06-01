QUnit.module('calculator model', {
    beforeEach: function () {
        this.calculator = new Calculator();
    },
    afterEach: function () {

    }
});

QUnit.test('should add numbers', function (assert) {
    console.log(this.calculator.add(Infinity, NaN));
    console.log(this.calculator.add(2, 3));
    assert.equal(this.calculator.add(2, 3), 5);
});

QUnit.test('should throw error when dividing by zero', function (assert) {
    var calculator = this.calculator;

    assert.throws(
        function () {
            calculator.divide(1, 0);
        },
        'Attempt to divide by zero'
    );

    // console.log(this.calculator.divide(2, 0));
    console.log(this.calculator.divide(0, 2));
    console.log(this.calculator.divide(2, -3));
});

QUnit.test('should divide number', function (assert) {
    assert.equal(this.calculator.divide(6, 2), 3);
});

QUnit.test('should subtract positive numbers', function (assert) {
    assert.equal(this.calculator.subtract(4, 2), 2);
});

QUnit.test('should multiply numbers', function (assert) {
    assert.equal(this.calculator.multiply(0, 3), 0);
    assert.equal(this.calculator.multiply(3, 0), 0);
});


QUnit.module('calculator view', {
    beforeEach: function () {
        $('body').append("<div id=\"calculator\"/>");
        $('#calculator').html(calculatorTemplate);
        initCalculator();
    },
    afterEach: function () {
        $('#calculator').remove();
    }
});

QUnit.test('should multiply numbers', function (assert) {

    console.log(window.document.body.clientHeight);

    $('#7').click();
    $('#plus').click();
    $('#9').click();
    $('#eval').click();

    assert.equal($('.screen').text(), '16');
});

QUnit.test('should divide numbers', function (assert) {
    $('#6').click();
    $('#divide').click();
    $('#3').click();
    $('#eval').click();

    assert.equal($('.screen').text(), '2');
});


QUnit.test('should multiply numbers', function (assert) {
    $('#7').click();
    $('#multiply').click();
    $('#8').click();
    $('#eval').click();

    assert.equal($('.screen').text(), '56');
});


QUnit.test('should subtract numbers', function (assert) {
    $('#7').click();
    $('#minus').click();
    $('#8').click();
    $('#eval').click();

    assert.equal($('.screen').text(), '-1');
});
