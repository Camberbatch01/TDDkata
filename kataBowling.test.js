const bowling = (pinsDown) => {
    if (pinsDown !==10){
        return pinsDown;
    }
}

test("throw less that 10 total, returns number knocked down", () => {
    expect(bowling(8)).toEqual(8)
})