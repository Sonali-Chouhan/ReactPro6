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
