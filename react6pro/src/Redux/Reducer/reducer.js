const initialState = {
  List: [],
  
};
export const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "Add_Data":
      var node=state.List
      node.push(action.payload)
      localStorage.setItem("record", JSON.stringify(node));
      return {
        ...state,
        List:node,
      };
    case "login_Data":
      var message;
      var error
      var data = action.payload;
      var item = localStorage.getItem("record");
      var object = JSON.parse(item);
      console.log("44223",object)
      object.map((e) => {
        if (e.email === data.email && e.password === data.password) {
            message = "login";
            localStorage.setItem("Token",message)
           } else {
             console.error("empty")
             error ="errors"
           }
      });
      return {
        ...state,
        data: [...object],
        Logintoken: message,
        error:error
        
          
      };

    default:
      return state;
  }
};

export default reducer;
