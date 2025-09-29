import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="w-75 mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nama</label>
              <input type="text" className="form-control" id="name" placeholder="Masukkan nama kamu"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="nama@email.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan kamu..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Kirim</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
