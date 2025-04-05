export const checkValidData = (email,password,name=null)=>{
  console.log(name);
  if(name!=null){
    
    const isNameValid = /^([a-zA-Z ]){2,30}$/.test(name);
    if(!isNameValid){
      return 'Name is not valid';
    }
  }
  const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if(!isEmailValid && !isPasswordValid){
    return 'Email and Password are not valid';
  }
  if(!isEmailValid){
    return 'Email ID is not valid';
  }
  if(!isPasswordValid){
    return 'Password is not valid';
  }
  return null;
}