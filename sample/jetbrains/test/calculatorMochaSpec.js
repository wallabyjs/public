var should = chai.should();

describe('calculator model', function () {

    beforeEach(function () {
        this.calculator = new Calculator();
    });


    it('should add numbers', function () {
        console.log(this.calculator.add(Infinity, NaN));
        console.log(this.calculator.add(2, 3));

        this.calculator.add(2, 2).should.equal(4);
    });


    it('should throw error when dividing by zero', function () {
        var calculator = this.calculator;

        should.Throw(function () {
            calculator.divide(1, 0);
        });

        // console.log(this.calculator.divide(2, 0));
        console.log(this.calculator.divide(0, 2));
        console.log(this.calculator.divide(2, -3));
    });


    it('should divide number', function () {
        this.calculator.divide(6, 2).should.equal(3);
    });


    it('should subtract positive numbers', function () {
        this.calculator.subtract(4, 2).should.equal(2);
    });


    it('should multiply numbers', function () {
        this.calculator.multiply(0, 3).should.equal(0);
        this.calculator.multiply(3, 0).should.equal(0);
    });
});

describe('calculator view', function () {

    beforeEach(function () {
        $('body').append("<div id=\"calculator\"/>");
        $('#calculator').html(calculatorTemplate);
        initCalculator();
    });

    afterEach(function () {
        $('#calculator').remove();
    });

    it('should add numbers', function () {

        console.log(window.document.body.clientHeight);

        $('#7').click();
        $('#plus').click();
        $('#9').click();
        $('#eval').click();

        $('.screen').text().should.equal('16');
    });

    it('should divide numbers', function () {
        $('#6').click();
        $('#divide').click();
        $('#3').click();
        $('#eval').click();

        $('.screen').text().should.equal('2');
    });


    it('should multiply numbers', function () {
        $('#7').click();
        $('#multiply').click();
        $('#8').click();
        $('#eval').click();

        $('.screen').text().should.equal('56');
    });


    it('should subtract numbers', function () {
        $('#7').click();
        $('#minus').click();
        $('#8').click();
        $('#eval').click();
        $('.screen').text().should.equal('-1');
    });
});