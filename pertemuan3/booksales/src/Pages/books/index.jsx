import { useState } from "react";
import booksData from "../../utils/books";

export default function Books() {
  // Simpan state daftar buku
  const [books, setBooks] = useState(booksData);

  // Fungsi untuk menambah buku baru
  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Marvel Legacy " + (books.length + 1),
      author: "Marvel Comics",
      year: 2025,
      description: "Buku baru ditambahkan secara manual.",
      image: "https://picsum.photos/200/300?random=" + (books.length + 1),
    };

    // Update state dengan spread operator
    setBooks([...books, newBook]);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Marvel Books Collection</h2>

      {/* Tombol tambah buku */}
      <div className="text-center mb-4">
        <button className="btn btn-success" onClick={addBook}>
          + Tambah Buku
        </button>
      </div>

      {/* Daftar buku */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {book.author} - {book.year}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
