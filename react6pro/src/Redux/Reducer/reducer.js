const initialState = {
  List: [],
};
export const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "Add_Data":
      return {
        ...state,
        List: [...state.List, action.payload],
      };
    case "login_Data":
      var message;
      
      var data = action.payload;
      var item = localStorage.getItem("record");
      var object = JSON.parse(item);
      console.log("44223",object)
      object.map((e) => {
        if (e.email === data.email && e.password === data.password) {
            message = "login";
            localStorage.setItem("Token",message)
           } else {
             console.log("empty")
            //  error=" plzz check your email and password";
           }
      });
      return {
        ...state,
        data: [...object],
        Logintoken: message,
        
          
      };

    default:
      return state;
  }
};

export default reducer;
