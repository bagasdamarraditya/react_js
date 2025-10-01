export default function ProductList(){
    return(
        <>
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
        </>
    )
}