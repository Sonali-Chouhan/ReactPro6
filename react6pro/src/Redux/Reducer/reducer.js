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
      var home
      var data = action.payload;
      var item = localStorage.getItem("record");
      var object = JSON.parse(item);
      console.log("44223",object)
      object.map((e) => {
        if (e.email === data.email && e.password === data.password) {
          // let token = random();
          // localStorage.setItem("Token",token)
          // let islogin = true
          message = "login";
         
        } else {
          home="not login"
          console.log("empty");
        }
      });
      return {
        ...state,
        data: [...object],
        Logintoken: message,
        home:home
      };

    default:
      return state;
  }
};

export default reducer;
