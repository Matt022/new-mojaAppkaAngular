/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-cvicny',
    templateUrl: './cvicny.component.html',
    styleUrls: ['./cvicny.component.scss'],

})
export class CvicnyComponent implements OnInit {
    booksApi: string = 'http://localhost:3000/books';
    books: { id: number, title: string, price: number; }[];
    currentBookId: number;
    editMode: boolean = false;
    @ViewChild('booksForm') booksForm: NgForm;

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.getAllBooks();
    }

    getAllBooks(): void {
        this.http.get(this.booksApi).subscribe((books: any) => {
            this.books = books;
            console.log(this.books);
        });
    }

    onBookCreate(book: { id: number, title: string, price: number; }): void {
        if (!this.editMode) {
            book.id = Math.floor(Math.random() * 100) + 1;
            this.http.post(this.booksApi, book).subscribe(() => {
                this.getAllBooks();
            });
            this.booksForm.resetForm();
        } else {
            this.http.put('http://localhost:3000/books/' + this.currentBookId, book).subscribe(() => {
                this.getAllBooks();
            });
            this.booksForm.resetForm();
            this.editMode = false;
        }
    }

    onBookUpdate(id: number): void {
        this.currentBookId = id;
        // get the product based on its id
        const currentProduct = this.books.find((product: { id: number, title: string, price: number; }) => {
            return product.id === id;
        });

        // set value of currentProduct
        this.booksForm.setValue({
            title: currentProduct!.title,
            price: currentProduct!.price
        });

        this.editMode = true;
    }

    onBookDelete(id: number): void {
        this.http.delete('http://localhost:3000/books/' + id).subscribe(() => {
            this.getAllBooks();
        });
    }

    cancelAllBooks(): void {
        this.books.forEach((book) => {
            this.http.delete('http://localhost:3000/books/' + book.id).subscribe(() => {
                this.getAllBooks();
            });
        });
    }
}
