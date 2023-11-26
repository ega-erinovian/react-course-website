import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../assets/img/hero.png'

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row className="header-box d-flex align-items-center justify-content-center">
            <Col lg="6">
              <h1 className="mb-4">
                Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!
              </h1>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut id, possimus quo necessitatibus sed.</p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 fw-bold">Lihat Kelas</button>
              <button className="btn btn-outline-danger btn-lg rounded-1 me-2 fw-bold">Lihat Promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="Hero" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  )
}

export default HomePage