const initial={
    user:[]
}
export const Profilereducer=function (state=initial,action){
    switch(action.type){
        case "Add_context":
            
            var object=state.user
            object.push(action.payload)
            localStorage.setItem("Profile", JSON.stringify(object));
            return{
                 ...state,
                 user:object
            };
        case "Delete_context":  
              var record=state.user
              
              record.splice(action.payload,1)
              return{
                  ...state,
                  user:record
              };
        case "Update_context":
            var book=state.user
            
            console.log("action.id",action.id)
            book.splice(action.id,1,{
            name:action.payload.name,
            email:action.payload.email,
            password:action.payload.password,
            number:action.payload.number
          })
         
          return {
            ...state,
            user:[...book]
            };
        default :return state    
    }
}
export default Profilereducer