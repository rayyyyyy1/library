const overlay=document.getElementById('overlay');
const modal=document.getElementById('modal');

class Book{
    constructor ( title, author, pages){
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
    }
}

let library=[];
let newBook;

function addBooktoLibrary(){
    event.preventDefault();
    newBook = new Book(title,author,pages);
    library.push(newBook);
    render();
    form.reset();
}
function render(){
    const byebooks=document.querySelectorAll('.book')
    //byebooks.removeChild(book) //continue
    for(i=0;i<library.length;i++){
        addBook(library[i]);
    }   
}

function addBook(item){
    const library = document.querySelector('.library-list')
    const bookItem = document.createElement('div');
    const title=document.createElement('div'); 
    const author=document.createElement('div');
    const pages=document.createElement('div');

    bookItem.classList.add('bookk')

    title.textContent=item.title;
    title.classList.add('title')
    bookItem.appendChild(title);

    author.textContent=item.author;
    author.classList.add('author')
    bookItem.appendChild(author);
    
    pages.textContent=item.pages;
    pages.classList.add('pages')
    bookItem.appendChild(pages);
    
    library.appendChild(bookItem);


}

const button=document.querySelector('.add');

button.addEventListener('click',()=>{
toggle_active()})
const submit=document.querySelector('form button');
submit.addEventListener('click',()=>{
    toggle_inactive()
addBooktoLibrary()})
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