//first action 
export const LoginStart=() =>({
    type :"LoginStart"
})
//
export const LoginSuccess=(user) =>({
    type :"LoginSuccess", payload:user

})
//
export const LoginFailure=() =>({
    type :"LoginFailure"

})
export const LogOut=() =>({
    type :"LogOut"

})
