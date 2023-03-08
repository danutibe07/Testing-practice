const Calculator = require("./Calculator.js")
  
  describe('calculator', () => {
    //Addition
    test('sum of a and b', () => {
        const calculator = new Calculator;
      expect(calculator.add(4, 7)).toBe(11);
    });

    test('sum of -ve numbers', () => {
    const calculator = new Calculator;
      expect(calculator.add(-7 , 5)).toBe(-2);
    });

    //Subtraction
    test('subtaction of a and b', () => {
      const calculator = new Calculator;
      expect(calculator.subtract(8, 7)).toBe(1);
    });

    test('subtacting -ve numbers', () => {
        const calculator = new Calculator;
      expect(calculator.subtract(-7 , -5)).toBe(-2);
    });

    //Division
    test('division of a and b', () => {
        const calculator = new Calculator;
      expect(calculator.divide(8, 2)).toBe(4);
    });

    test('division when the denominator is 0', () => {
    const calculator = new Calculator;
      expect(calculator.divide(7 , 0)).toBe(Infinity);
    });

    test('division when the denominator is greater than the numerator ', () => {
        const calculator = new Calculator;
          expect(calculator.divide(4 , 9)).toBe(0.4444444444444444);
    });

    test('multiplication that involves 0', () => {
        const calculator = new Calculator;
          expect(calculator.multiply(7 , 0)).toBe(0);
        });

        test('multiplication', () => {
            const calculator = new Calculator;
              expect(calculator.multiply(7 , 4)).toBe(28);
            });
            

  });