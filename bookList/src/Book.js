//To acces a children prop just add the special KEYWORD Children while destructuring

const Book = ( props ) =>{ //we can user destructuring hier but we can also user it directly instead of using props

    //console.log(props)
    const { title, author, img, description , preis } = props  /*** destructuring the props */
  
    const displayPreis = () =>{
      alert(preis+ "€")
    }
    return (
      <article className='book'>
       <img src= { img } className="imag" alt=' of the book'/>
       <h1 onClick={() => console.log(title)}>{title}</h1>
       <h3>{author}</h3>
       <p>{description}</p>
       <button type='button' onClick = {() => displayPreis()}>Preis</button>
      </article> 
    )
  }

  export default Book;