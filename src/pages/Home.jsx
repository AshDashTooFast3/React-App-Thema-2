import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedButton from "../AnimatedButton.jsx";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Form,
} from "react-bootstrap";

export default function Home() {
  return (
    <Container className="pt-3 h-100">
      <Row>
        {/* hoofdcontent */}
        <Col lg={8}>
          <Card className="mb-4 shadow-sm card-theme">
            <Card.Img src="https://picsum.photos/id/1043/1200/400" />
            <Card.Body>
              <Card.Title>
                <h5>
                  Breakthrough in Renewable Energy: Solar Panels Now 50% More
                  Efficient!
                </h5>
              </Card.Title>
              <Card.Text>
                Scientists at the forefront of renewable energy research have
                announced a groundbreaking advancement in solar panel
                technology. The new panels boast a remarkable 50% increase...
              </Card.Text>
              <AnimatedButton className="w-100 btn-theme">
                Read more
              </AnimatedButton>
            </Card.Body>
          </Card>

          <Row className="g-3">
            <Col md={6}>
              <Card className="mb-0 shadow-sm card-theme">
                <Card.Img src="https://picsum.photos/id/1027/600/300" />
                <Card.Body>
                  <Card.Title>
                    <h5>
                      Researchers Develop Self-Learning Robots Capable of
                      Human-like Adaptation
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    In a significant leap forward for artificial intelligence,
                    researchers have unveiled...
                  </Card.Text>
                  <AnimatedButton className="w-100">
                    Read more
                  </AnimatedButton>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="mb-0 shadow-sm card-theme">
                <Card.Img src="https://picsum.photos/id/1050/600/300" />
                <Card.Body>
                  <Card.Title>
                    <h5>
                      Astronauts Successfully Establish Permanent Colony on Mars
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                  <AnimatedButton className="w-100">Read more</AnimatedButton>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* sidebar */}
        <Col lg={4}>
          <Card className="mb-4 shadow-sm card-theme">
            <Card.Body>
              <Card.Title>
                <h5>Catch up on the latest global news</h5>
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="list-theme">
                  <strong>Global Health Crisis:</strong> New Pandemic Strain
                  Emerges
                </ListGroup.Item>
                <ListGroup.Item className="list-theme">
                  <strong>Tech:</strong> Industry Giants Face Antitrust Probe
                  Over Market Dominance
                </ListGroup.Item>
                <ListGroup.Item className="list-theme">
                  <span className="text-danger fw-bold">LIVE:</span> Electric
                  Flying Cars Set to Take to the Skies
                </ListGroup.Item>
                <ListGroup.Item className="list-theme">
                  <strong>Climate:</strong> Environmental Activists Rally
                  Against Amazon Rainforest Deforestation (3 min.)
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-sm card-theme">
            <Card.Body>
              <Card.Title>Stay up-to-date with the latest news.</Card.Title>
              <Form.Control className="mb-2" placeholder="Enter email" />
              <Button className="w-100 rounded-0 btn-dark">Sign me up</Button>
            </Card.Body>
          </Card>

          <Card className="mb-5 shadow-sm card-theme">
            <Card.Body>
              <Card.Title>Trending articles</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="list-theme">
                  <strong>Medical:</strong> Gene Therapy Offers Hope for
                  Incurable Diseases
                </ListGroup.Item>
                <ListGroup.Item className="list-theme">
                  <strong>Tech:</strong> Emerging Cybersecurity Threats
                  Highlighted in International Conference
                </ListGroup.Item>
                <ListGroup.Item className="list-theme">
                  <strong>Science:</strong> Submersible Mission Uncovers Hidden
                  Ecosystems in Mariana Trench
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
