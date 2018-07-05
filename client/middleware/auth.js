import axios from "axios";
import Cookie from "js-cookie"
export default (context) => {
    if (context.route.path.match(/admin/) && !context.store.state.userToken.match(/devchan_token/)) {
        context.redirect("/auth")
    }
}