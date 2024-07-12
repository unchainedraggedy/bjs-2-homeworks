function parseCount(arg) {
	if (isNaN(parseFloat(arg))) {
		throw new Error('Невалидное значение')
	}
	return parseFloat(arg)
}

function validateCount(arg) {
	try {
		return parseCount(arg)
	} catch (error) {
		return error
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.sideA = a;
		this.sideB = b;
		this.sideC = c;

	}

	get perimeter() {
		return this.sideA + this.sideB + this.sideC;
	}
	get area() {
		let p = (this.sideA + this.sideB + this.sideC) / 2;
		return +(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3)
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует'
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			}
		}
	}
}