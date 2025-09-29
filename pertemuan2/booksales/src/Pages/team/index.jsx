import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function Team() {
  return (
    <>
      <Header />
      <section className="py-5 bg-light">
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
      <Footer />
    </>
  );
}
