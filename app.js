const rect = require('./rectangle');

const solveRect = (l, w) => {
    console.log(`Solving with dimesions: ${l}, ${w}`);

    if(l <= 0 || w <= 0) {
        console.log(`values must be greater than Zero : ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
