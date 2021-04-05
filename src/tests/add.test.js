const add = (a, b) => a + b;
test("shouls add", () => {
    const result = add(2, 4)
    expect(result).toBe(6)
})