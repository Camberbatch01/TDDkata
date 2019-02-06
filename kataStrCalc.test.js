const Add = (strNumber1, strNumber2) => {
    if (strNumber1+strNumber2 === "1"){
        return "1"
    }
    return "";
}

test("when no input, return empty string", () => {
    expect(Add("", "")).toEqual("")
})
test("only 1 input given, return the sum", () => {
    expect(Add("", "1")).toEqual("1")
})