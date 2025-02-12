function sum(a,b) {
    return a + b;
}

//Create a test
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// Este es un comentario

function res(a,b) {
    return a - b;
}

function div(a,b) {
    return a / b;
}

test('extract 4-2 to equal 2', () => {
    expect(res(4,2)).toBe(2);
});

//comentario

test('divide 4-2 to equal 2', () => {
    expect(div(4,2)).toBe(2);
});
