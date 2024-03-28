import {useSelector} from "react-redux";

export const useAuth = () => {
    const {isLogged} = useSelector((state)=>state.auth)
    return isLogged;
}
export const userName = () => {
    const {user} = useSelector((state)=>state.auth)
    return user;
}
