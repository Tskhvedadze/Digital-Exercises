import { Col, Container, Row } from 'react-bootstrap'

export function Footer() {
    return (
        <footer className='bg-primary text-white pt-4 pb-3'>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h5>About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequuntur nulla maiores deserunt
                            consectetur ab numquam animi sed explicabo iste
                            illo.
                        </p>
                    </Col>
                    <Col sm={2}>
                        <h5>Navigation</h5>
                        <p>
                            <a className='text-white' href='#'>
                                Home
                            </a>
                        </p>
                        <p>
                            <a className='text-white' href='#'>
                                About Us
                            </a>
                        </p>
                        <p>
                            <a className='text-white' href='#'>
                                Contact Us
                            </a>
                        </p>
                    </Col>
                    <Col sm={2}>
                        <h5>Services</h5>
                        <p>Lorem, ipsum.</p>
                        <p>Consectetur adipisicing</p>
                        <p>Mollitia explicabo atque voluptas</p>
                    </Col>
                    <Col sm={2}>
                        <h5>Address</h5>
                        <p>Washington</p>
                        <p>745 T Street Southeast</p>
                        <p>+63 791 675 8914</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
