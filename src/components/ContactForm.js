import {Button, Label, Col, FormGroup} from 'reactstrap';
import {Formik, Field, Form} from 'formik';

const ContactForm = () =>{
    const handleSubmit = (values, {resetForm}) =>{
        //We will console.log() the values object.
        console.log('form values:', values);
        //We will also console.log() the same object in JSON format.
        console.log('in JSON format:', JSON.stringify(values));
        //Then finally, we will call the resetForm() function to reset the ContactForm to its initial values so that we can input again 
        resetForm();
    }
 return(
    <Formik initialValues={{
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        agree: false,
        contactType: 'By Phone',
        feedback: ''}}
        onSubmit={handleSubmit}
        >
     <Form>
            <FormGroup row // "row" is used to specify that the children of this FormGroup should be aligned in a row
             >
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10' //md='10' means this column should take up 10 out of the 12 available column spaces.
                    >
                        <Field name='firstName'
                         placeholder='First Name'
                         className='form-control' />
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'   >
                     <Field name='lastName' placeholder='Last Name'
                     className='form-control'/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10' >
                     <Field name='phoneNum' 
                     placeholder='Phone  Number'
                     className='form-control'/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10' >
                     <Field name='email' 
                     placeholder='Email'
                     className='form-control'/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                    <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        May we contact you?
                    </Label>
                    <Col md='4' >
                     <Field name='contactType'
                            as='select'
                            className='form-control'
                            >
                            <option>By Phone</option>
                            <option>By Email</option>
                     </Field>   
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback
                    </Label>
                    <Col md='10' >
                      <Field name='feedback' 
                             as='textarea' 
                             rows='12'
                             className='form-control'
                        />
                    </Col>
            </FormGroup>
            <FormGroup row>
                    
                    <Col md={{ size: 10, offset: 2 }}>
                       <Button type='submit' color='primary'>
                           Send Feedback
                       </Button>
                    </Col>
            </FormGroup>
     </Form>
    </Formik>
 )
}
export default  ContactForm;