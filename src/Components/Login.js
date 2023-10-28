import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css";
import BanImg from "./BanImg.jpg";

function BasicExample() {
  return (
    <Form className='login-page'>
        <img src={BanImg} className='BanImg'/>
        <div className='form-page'>
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='email-label'>Email address</Form.Label >
                <Form.Control type="email" placeholder="Enter email" className='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='pwd-label'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className='pwd' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" className='check' />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop:'15px' }}>
                Submit
            </Button>
            <p style={{ marginTop:'15px' }}>Don't have an Account?<a href='#'>Register</a></p>
      </div>
    </Form>
  );
}

export default BasicExample;
