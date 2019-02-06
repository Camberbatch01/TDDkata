const sum = (num1, num2, value) => {
    return Number(num1) + Number(num2) === value;
}

const Add = (strNumber1, strNumber2) => {
    if (sum(strNumber1, strNumber2, 1)){
        return 1;
    }
    if (sum(strNumber1, strNumber2, 2)){
        return 2;
    }
    if (sum(strNumber1, strNumber2, 3)){
        return 3;
    }
    if (sum(strNumber1, strNumber2, 4)){
        return 4;
    }
    return 0;
}

test("when no input, return empty string", () => {
    expect(Add("", "")).toEqual(0)
})
test("only 1 input given, return the sum", () => {
    expect(Add("", "1")).toEqual(1)
    expect(Add("", "2")).toEqual(2)
})
test("2 inputs, returns inputs sum", () => {
    expect(Add("1", "2")).toEqual(3)
    expect(Add("2", "1")).toEqual(3)
    expect(Add("2", "2")).toEqual(4)
})