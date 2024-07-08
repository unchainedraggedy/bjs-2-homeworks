class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(newState) {
		newState < 0 ? this._state = 0 : newState > 100 ? this._state = 100 :
			this._state = newState
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		book.state > 30 ? this.books.push(book) : undefined;
	}

	findBookBy(type, value) {
		let bookFound = null;
		for (const book of this.books) {
			book[type] === value ? bookFound = book : null;
		}
		return bookFound;
	}

	giveBookByName(bookName) {
		let bookSpliced = null;
		const bookIndex = this.books.findIndex(book => book.name === bookName);

		bookIndex !== -1 ? (bookSpliced = this.books[bookIndex], this.books.splice(bookIndex, 1)) : null;

		return bookSpliced;
	}
}