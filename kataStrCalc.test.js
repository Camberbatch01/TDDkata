const parseDelimiter = str => {
    let delimiter = /,|\n/;
    if(str.startsWith('//')) {
        delimiter = str.substring(2,3)
        str = str.substring(4)
    }
    return [delimiter, str];
}

const Add = (str) => {
    const [delimiter, numberString] = parseDelimiter(str)

    const numbers = numberString.split(delimiter)
        .map(s => Number(s));

    const negatives = numbers.filter(n => n<0);

    if(negatives.length) {
        throw new Error('negatives not allowed: ' + negatives);
    }

    return numbers.reduce((sum, number) => sum + number, 0);
}

test("When adding empty strings, returns 0", () => {
    expect(Add("")).toEqual(0)
})
test("Adding a string with 1 number returns that number", () => {
    expect(Add("1")).toEqual(1)
    expect(Add("2")).toEqual(2)
})
test("adding a string with 2 numbers, returning their sum", () => {
    expect(Add("1, 2")).toEqual(3)
    expect(Add("2, 2")).toEqual(4)
})
test("adding large amout of numbers, returning their sum", ()=> {
    expect(Add("1, 2, 3, 4")).toEqual(10)
})
test("add method returns sum even with new lines or commas. Not together though", () =>{
    expect(Add("1\n2,3")).toEqual(6)
})
test("delimiter at start, still returns sum", () =>{
    expect(Add("//;\n1;2;3")).toEqual(6)
    expect(Add("///\n1/2/3")).toEqual(6)
})
test("negatives throw an exception and show the number that was passed", ()=> {
    try {
        Add('-1,-3,-6,7,-1')
        fail()
    }
    catch(e)
    {
        expect(e.message).toEqual('negatives not allowed: -1,-3,-6,-1')
    }
})