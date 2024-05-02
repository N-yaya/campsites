

export const validateContactForm = (values) => {
    //errors its a object that will error messages for different filds 
    const errors={};
    if(!values.firstName){
        errors.firstName='Require';
    }else if(values.firstName.length<2){
         errors.firstName='Must be at least 2 characters';
    }else if(values.firstName.length>15){
        errors.firstName='Must be  15 characters or less';
    }

    if(!values.lastName){
        errors.lastName='Require';
    }else if(values.lastName.length<2){
         errors.lastName='Must be at least 2 characters';
    }else if(values.lastName.length>15){
        errors.lastName='Must be  15 characters or less';
    }

    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)){
        errors.phoneNum='The phone number should contain only numbers.';
    }
    if(!values.email.includes('@')){
        errors.email='Email should contain a @';
    }
    //errors object will be retrun from this fuction that we can use its proparties.
    return errors;
}