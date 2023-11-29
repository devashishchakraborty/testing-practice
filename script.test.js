const func = require('./script');
const sum = func.sum;
const capitalize = func.capitalize;
const reverse = func.reverse;
const calculator = func.calculator;
const caesarCipher = func.caesarCipher;
const analyzeArray = func.analyzeArray;


// Sum Tests
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//         for (let b = 1; b < 10; b++) {
//         expect(a + b).not.toBe(0);
//         }
//     }
// });
  

// Capitalize Tests
test('single letter return it capitalized', () => {
    expect(capitalize("a")).toBe("A");
})

test('empty string returns empty string', () => {
    expect(capitalize("")).toBe("");
})

test('Capitalized First Letter of string returns unchanged', () => {
    expect(capitalize("Devashish")).toBe("Devashish");
})

test("Normal String returns first letter Capitalized", () => {
    expect(capitalize("chakra")).toBe("Chakra");
})

test("Normal String with spaces returns first letter Capitalized", () => {
    expect(capitalize("this is a good day")).toBe("This is a good day");
})

// Reverse String Tests
test('normal string without spaces reversed', () => {
    expect(reverse("devashish")).toBe("hsihsaved");
})

test('normal string with spaces reversed', () => {
    expect(reverse("this is a great day")).toBe("yad taerg a si siht");
})

test('empty string return empty string', () => {
    expect(reverse("")).toBe("");
})

test('check palindrome', () => {
    expect(reverse("malayalam")).toBe("malayalam");
})


// Calculator Object Tests
test("Check Addition", () => {
    expect(calculator.add(-4, 21)).toBe(17);
})

test("Check Subtraction", () => {
    expect(calculator.subtract(-4, 21)).toBe(-25);
})

test("Check Division", () => {
    expect(calculator.divide(10, 4)).toBe(2.5);
})

test("Check Multiplication", () => {
    expect(calculator.multiply(-4, -21)).toBe(84);
})


// Caesar Cipher tests
test("'abcd' returns 'efgh' with shiftfactor of 4", () => {
    expect(caesarCipher("abcd", 4)).toBe("efgh");
})

test("'devashish' returns 'lmdiapqap' with shiftfactor of 34", () => {
    expect(caesarCipher("devashish", 34)).toBe("lmdiapqap");
})

test("'GARUDA_deva_2001!' returns 'LFWZIF_ijaf_2001!' with shiftfactor of 915", () => {
    expect(caesarCipher('GARUDA_deva_2001', 915)).toBe('LFWZIF_ijaf_2001');
})


// Analyze Array Tests
test("Normal Array with positive numbers", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})

test("Array with holes", () => {
    expect(analyzeArray([1,8,3, ,4, ,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 8
      });
})

test("Array with negative numbers and holes", () => {
    expect(analyzeArray([1,8,-3, ,4, ,2,-6])).toEqual({
        average: 1,
        min: -6,
        max: 8,
        length: 8
      });
})

test("Array with numbers in strings and holes", () => {
    expect(analyzeArray([1,'8',-3, ,4, ,2,"-6"])).toEqual({
        average: 1,
        min: -6,
        max: 8,
        length: 8
      });
})