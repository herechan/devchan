import axios from "axios";
import Cookie from "js-cookie"
export default (context) => {
    
    // console.log(window)
    // console.log(localStorage)
    // if (context.route.path.match(/admin/)) {
    //     var token = window.localStorage.token;
    //     if(!token){
    //         context.redirect("/login");
    //         return;
    //     }
    //     axios.post(`${context.env.baseUrl}/auth`,{
    //         headers:{
    //             Authorization:`Bearer ${token}`
    //         }
    //     }).then(r=>{
    //         console.log(r)
    //     })
    // }
}