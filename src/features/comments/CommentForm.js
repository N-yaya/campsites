import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { useState } from 'react';
import {validateCommentForm} from '../../utils/validateCommentForm'
import {useDispatch}  from 'react-redux';
import {addComment}  from  './commentsSlice';


const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (values) => {

     const comment={
                campsiteId: parseInt(campsiteId),
                rating: values.rating,
                author: values.author,
                text: values.commentText,
                date: new Date(Date.now()).toISOString()
            };
            console.log(comment);
            dispatch(addComment(comment)); // you have to use dispatch function so that the comment object can be used by the reducer to add new comment. that is in the commentsSlice file
            setModalOpen(false);
    }
    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
               <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                  <Formik 
                    initialValues={{
                        rating:undefined,
                        author:'', 
                        commentText:''}}
                    // The handleSubmit function name is a JavaScript expression use inside JSX that it should be between curly bracket'{}'.
                    onSubmit={handleSubmit}
                    validate={validateCommentForm}

                    >
                        <Form>
                           {/* The FormGroup component in Reactstrap  It groups together labels, controls, optional help text, and form validation messaging1 */}
                            <FormGroup>
                                <Label htmlFor='rating'> Rating</Label>

                                <Field
                                   name='rating'
                                   as='select'
                                   className='form-control'
                                   >
                                     <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>

                                </Field>
                                                              {/* this will pupup the error message using errors object retrun from the validateCommentForm an store in validate prop of Formik check above */}
                                <ErrorMessage name='rating' >  
                                   {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                       {/* htmlFor This attribute is used to associate a <label> element with an <input> element */}
                                <Label htmlFor='author'> Author</Label>

                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />

                                <ErrorMessage  name='author'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor='commentText'> Comment</Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    row='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>

                  </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};
export default CommentForm;