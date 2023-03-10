const root = document.getElementById("root");
let myLibrary = [];
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = prompt("Enter the title");
  let author = prompt("Enter the author's name");
  let pages = prompt("Enter the no. of pages");
  let read = prompt("Have you read the book(yes/no)");
  read = read.toLowerCase();
  if (read === "yes") {
    read = true;
  } else {
    read = false;
  }
  let book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
}
function printBooks(myLibrary) {
  for (book of myLibrary) {
    console.log(book);
    const h1 = document.createElement("h1");
    const title = document.createTextNode(book.title);
    h1.appendChild(title);
    root.appendChild(h1);
  }
}

function showForm() {
  form.style.display = "block";
}
