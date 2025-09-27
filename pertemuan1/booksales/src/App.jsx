function App() {
  return (
    <>
      <div className="container">

        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Selamat Datang di Bookstore
              </h1>
              <p className="lead">
                Temukan berbagai koleksi buku terbaik mulai dari novel, teknologi, hingga pengembangan diri.  
                Belanja buku jadi lebih mudah, cepat, dan menyenangkan.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Belanja Sekarang</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3 img-fluid" src="https://picsum.photos/720/600?random=1" alt="Bookstore Banner" />
            </div>
          </div>
        </section>

        {/* Album Section */}
        <section className="album py-5 bg-body-tertiary">
          <div className="container">
            <h2 className="text-center mb-4">Koleksi Terbaru</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {/* Card 1 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/400/225?random=2" className="card-img-top" alt="Book 1"/>
                  <div className="card-body">
                    <p className="card-text">Buku Novel Inspiratif yang penuh dengan cerita menarik.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/400/225?random=3" className="card-img-top" alt="Book 2"/>
                  <div className="card-body">
                    <p className="card-text">Panduan teknologi terbaru untuk pengembangan diri.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">12 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/400/225?random=4" className="card-img-top" alt="Book 3"/>
                  <div className="card-body">
                    <p className="card-text">Koleksi buku bisnis yang membantu kamu sukses.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">15 mins</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Our Team</h2>
            <div className="row text-center">
              <div className="col-lg-4">
                <img src="https://picsum.photos/200/200?random=5" className="rounded-circle mb-3" alt="Team 1"/>
                <h5>Bagas Damar</h5>
                <p className="text-muted">Founder & CEO</p>
              </div>
              <div className="col-lg-4">
                <img src="https://picsum.photos/200/200?random=6" className="rounded-circle mb-3" alt="Team 2"/>
                <h5>Ayra Yio</h5>
                <p className="text-muted">Marketing Manager</p>
              </div>
              <div className="col-lg-4">
                <img src="https://picsum.photos/200/200?random=7" className="rounded-circle mb-3" alt="Team 3"/>
                <h5>Tony Stark</h5>
                <p className="text-muted">Lead Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5">
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

        {/* Footer */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 Bagas</p>
        </footer>

      </div>
    </>
  );
}

export default App;
