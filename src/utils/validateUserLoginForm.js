

 export const validateUserLoginForm = (values) =>{
   const errors={};
      if(!values.username){
         errors.username='Require';
      } else if(values.username.length<6){
        errors.username='username most be at least 6 characteres';
      } else if(values.username.length>15){
        errors.username='username must be 15 characteres or less';
      }

      if(!values.password){
        errors.password='Require';
     }else if(values.password.length<8){
        errors.password='Require the password to be at least 8 characters';
     }
   return errors;
}