import ReactDom from 'react-dom';

import './index.css'


import { bookList } from './bookList';

import Book from './Book';

const BookList = () =>{

  //the paragraph in the first book is calles a children prop, only this book has thsi property 
  return (
    <section className='booklist'>
    {bookList.map((book) =>{
      //const {title, author, img, description } = book
      console.log(book)
      return (
        <Book key = {book.id } {...book} />
      )
    })}
    </section>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'))