// addTodo 
export const addData= (data) => {
    return {
      type: "Add_Data",
      payload: data,
    };
  };
export const loginData=(item)=>{
  return {
    type: "login_Data",
    payload: item,
  };

}
export const Add_Context=(user)=>{

  return{
    type:"Add_context",
    payload:user
  };
}
export  const Delete_Context=(id)=>{
  
  return{
    type:"Delete_context",
    payload:id
  }
}
export const Updata_User=(id,context)=>{
 return{
    type:"Update_context",
    payload:context,
    id:id
 }

}