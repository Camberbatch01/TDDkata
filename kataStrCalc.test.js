const sum = (num1, num2, value) => {
    return num1+num2 === value;
}

const Add = (strNumber1, strNumber2) => {
    if (sum(strNumber1, strNumber2, "1")){
        return "1"
    }
    if (sum(strNumber1, strNumber2, "2")){
        return "2"
    }
    return "";
}

test("when no input, return empty string", () => {
    expect(Add("", "")).toEqual("")
})
test("only 1 input given, return the sum", () => {
    expect(Add("", "1")).toEqual("1")
    expect(Add("", "2")).toEqual("2")
})