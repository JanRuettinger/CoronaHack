import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Step2(props) {

  return(
    <Container>
      <Row style={{marginTop: '30px'}} className='h-100 justify-content-center align-items-center'>
        <Col md={{ span: 6 }} className='text-center my-auto'>
          <h3 style={{marginBottom: '1rem'}}> Personal information </h3>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  type='text' 
                  placeholder='Vorname' 
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type='text' 
                  placeholder='Nachname' 
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type='text' 
                  placeholder='Email' 
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type='text' 
                  placeholder='Telefonnummer' 
                  required
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}