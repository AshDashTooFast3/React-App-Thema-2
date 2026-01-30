import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="my-5">
      {/* Header */}
      <div className="mb-5">
        <h1 className="fw-bold">
          Get in <span className="red">touch</span>
        </h1>
        <p className="text-muted mt-3">
          Welcome to Global News Wires contact page! We value your feedback and
          inquiries. Whether youre a member of the media seeking press
          information, an advertiser interested in partnership opportunities, or
          an individual with questions about our subscription services, were
          here to assist you.
        </p>
      </div>

      <Row className="g-4">
        {/* Contact form */}
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Your name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Your email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Your message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message here..."
                  />
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <Button className="rounded-0 btn-danger" type="submit">
                    Sign me up
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact info */}
        <Col lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              {/* Header: title + logo */}
              <Row className="d-flex justify-content-between align-items-center gap-2">
                <Col>
                  <h5 className="fw-bold mb-0">Headquarters</h5>
                </Col>
                <Col className="text-end">
                  <img
                    src="../src/assets/www.webp"
                    alt="Global News Wire Logo"
                    className="logo-big"
                  />
                </Col>
              </Row>
              <p className="mb-2">
                Global News Wire
                <br />
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                United States
              </p>

              <p className="mb-2">
                Global News Wire
                <br />
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                United States
              </p>

              <p className="mb-1">
                <strong>Phone:</strong> +1 (555) 555-5555
              </p>
              <p className="mb-3">
                <strong>Email:</strong>{" "}
                <a className="red" href="mailto:info@globalnewswire.com">
                  info@globalnewswire.com
                </a>
              </p>

              <hr />

              <h6 className="fw-bold">For Media Inquiries</h6>
              <p className="mb-1">Press Contact: Sarah Johnson</p>
              <p className="mb-1">
                Email:{" "}
                <a className="red" href="mailto:press@globalnewswire.com">
                  press@globalnewswire.com
                </a>
              </p>
              <p className="mb-3">Phone: +1 (555) 555-1234</p>

              <hr />

              <h6 className="fw-bold">For Advertising Opportunities</h6>
              <p className="mb-1">Advertising Department</p>
              <p className="mb-1">
                Email:{" "}
                <a className="red" href="mailto:advertise@globalnewswire.com">
                  advertise@globalnewswire.com
                </a>
              </p>
              <p>Phone: +1 (555) 555-5678</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
