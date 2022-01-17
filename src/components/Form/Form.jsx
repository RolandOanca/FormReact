import React from 'react';
import Hero from '../Hero/Hero';
import Input from '../../components/UI/Input/Input';
import FormButton from '../../components/UI/FormButton/FormButton';


import { Container , Row, Col} from 'react-bootstrap';
import classes from './Form.module.scss';

const Form = props => {
  return (
    <div className={classes.form_wrapper}>
      <Container>
        <Row>
          <Col sm={12}  md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 0 }} className={classes.inner}>
            <Hero></Hero>
          </Col>
          <Col sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 0 }} className={classes.inner}>
            <div className={classes.form}>
              <form className={classes.form}>
                <h1>Login</h1>

                  <Input label='Email' input = {{
                      
                      type: 'Email',
                      placeholder: 'john@example.com'
    
                  }}/>

                  <Input label='Password' input = {{
                      
                      type: 'password',
                      placeholder: 'At least 8 characters'
    
                  }}/>
                  <FormButton/>

             
              </form>
     
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form;

