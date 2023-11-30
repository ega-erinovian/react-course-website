import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaQComponent from "../components/FaQComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Semua Testimonial</h1>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas?</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
             {testimonial.map((data) => {
                return(
                  <Col key={data.id} className="mb-5">
                    <p className="desc shadow-sm p-4 bg-light rounded-2">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="testi-people" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </Col>
                )
              })}
          </Row>
        </Container>
      </div>
      <FaQComponent/>
    </div>
  )
}

export default TestimonialPage