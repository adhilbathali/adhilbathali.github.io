import "../styles/TBR.css"
import books from "../assets/TBR"

export default function TBR(){
    return(
        <section className="tbr">
            <h1>My TBR</h1>
            <div className="tbr-container">
                {
                    books.map((book)=>{
                        return(
                            <a className="tbr-link" href={book.link} target="blank">
                                <div className="tbr-book">
                                    <h2>{book.title}</h2>
                                    <img className="tbr-book-image" src={book.image} alt={book.title} />
                                    <p>Author: {book.author}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}