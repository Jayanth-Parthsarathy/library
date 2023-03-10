const root = document.getElementById("root");
let myLibrary = [];
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit-btn");
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
  root.innerHTML = "";
  for (book of myLibrary) {
    console.log(book);
    const div = document.createElement("div");
    div.className = "book";
    const title = document.createTextNode(book.title);
    div.innerHTML = `
    <h3>
      ${book.title}
    </h3>
    <h5>${book.author}</h5>
    <p>${book.pages}</p>
    <p>${book.read}</p>
    `;
    // h1.appendChild(title);
    root.appendChild(div);
  }
}

function showForm() {
  form.style.display = "block";
}

submit.onclick = () => {
  event.preventDefault();
  let titleVal = title.value;
  let authorVal = author.value;
  let pagesVal = pages.value;
  let readVal = read.checked;
  let book = new Book(titleVal, authorVal, pagesVal, readVal);
  myLibrary.push(book);
  printBooks(myLibrary);
};
