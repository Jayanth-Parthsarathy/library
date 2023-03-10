const root = document.getElementById("root");
let myLibrary = [];
const warn = document.getElementById("warn");
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
  for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    div.className = "book";
    div.setAttribute("data-index", `${i}`);
    if (myLibrary[i].read) {
      div.innerHTML = `
    <h3>
      Title: ${myLibrary[i].title}
    </h3>
    <h5>Author: ${myLibrary[i].author}</h5>
    <p>No. of pages: ${myLibrary[i].pages}</p>
    <p>Read</p>
    <button id="read-btn" onclick=MakeRead(${i})>Already read</button>
    <button id="delete-btn" onclick=Remove(${i})>Remove</button>
    `;
    } else {
      div.innerHTML = `
    <h3>
      Title: ${myLibrary[i].title}
    </h3>
    <h5>Author: ${myLibrary[i].author}</h5>
    <p>No. of pages: ${myLibrary[i].pages}</p>
    <p>Not yet read</p>
    <button onclick=MakeRead(${i})>Already read</button>
    <button onclick=Remove(${i})>Remove</button>
    `;
    }

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
  if (titleVal == "" || authorVal == "" || pagesVal == "") {
    warn.innerText = "All fields are required";
    return;
  } else {
    warn.innerText = "";
  }
  let book = new Book(titleVal, authorVal, pagesVal, readVal);
  myLibrary.push(book);
  printBooks(myLibrary);
};

function Remove(i) {
  // let index = div.getAttribute("data-index");
  // console.log(index);
  myLibrary.splice(i, 1);
  printBooks(myLibrary);
}

function MakeRead(i) {
  myLibrary[i].read = !myLibrary[i].read;
  printBooks(myLibrary);
}
