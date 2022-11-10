const overlay=document.getElementById('overlay')
const modal=document.getElementById('modal')
const books=document.querySelector('.library-list');
const myLibrary = [{
    title: "Gicu",
    author: "rapid",
    pages: 100,
    read: true,
},{
    title: "releu",
    author: "sdsd",
    pages: 88,
    read: false, 
},];


function createbookElement(el,content,className){
    const bookElem = document.createElement(el);
    bookElem.textContent=content;
    bookElem.setAttribute("class",className);
    return bookElem;
}
function createBookItem(book,index) {
    const bookItem=document.createElement("div");
    bookItem.setAttribute("id",index);
    bookItem.setAttribute("key",index);
    bookItem.setAttribute("class", 'bookk')
    bookItem.appendChild(
        createbookElement("h1", `Title: ${book.title}`, "book-title"));
    bookItem.appendChild(
        createbookElement("h1", `Author: ${book.author}`, "book-author"));
    bookItem.appendChild(
        createbookElement("h1", `Pages: ${book.pages}`, "book-pages"));

    books.insertAdjacentElement('afterbegin',bookItem);
}
function renderBooks(){
    myLibrary.map((book, index)=>{
        createBookItem(book,index);
    })
}
function addBookToLibrary(title,author,pages){
    myLibrary.push(new Book(title,author,pages))
    renderBooks();
}
const addBookForm=document.querySelector('.add-book-form')
addBookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=new FormData(e.target);
    let newBook={};
    for(let [name,value] of data){
        newBook[name]=value;}

})

const button=document.querySelector('.add');

button.addEventListener('click',()=>{
toggle_active()})
const submit=document.querySelector('form button');
submit.addEventListener('click',()=>{
    toggle_inactive()})
function toggle_active(){
    overlay.classList.add('active');
    modal.classList.add('active');
}
function toggle_inactive(){
    overlay.classList.remove('active');
    modal.classList.remove('active');
}
overlay.addEventListener('click', () =>
toggle_inactive())