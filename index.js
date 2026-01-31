const myLibrary = [];
const saveBook = document.getElementById("saveBook");

function Book(title, author, pages) {
  this.id = crypto.randomUUID();
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const book = new Book(title, author, pages);

  const addNewBook = myLibrary.push(book);
}

const addNewBook = document.getElementById("addNewBook");
const bookForm = document.getElementById("bookForm");

addNewBook.addEventListener("click", function () {
  bookForm.style.display = "block";
});

saveBook.addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  if (!title || !author || !pages) {
    alert("Complete all the fields");
    return;
  }

  //new row

  const table = document.getElementById("table");

  const row = table.insertRow();

  const titleCell = row.insertCell(0);
  const authorCell = row.insertCell(1);
  const pagesCell = row.insertCell(2);
  const deleteCell = row.insertCell(3);

  titleCell.textContent = title;
  authorCell.textContent = author;
  pagesCell.textContent = pages;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    row.remove();
  });

  deleteCell.appendChild(deleteBtn);

  // clear form & hide it
  document.getElementById("bookForm").style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
});
