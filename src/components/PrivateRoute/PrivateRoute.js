import { Redirect, Route } from "react-router"
import useAuth from "../../hooks/useAuth"

function PrivateRoute({children, ...rest}) {
    const {user} = useAuth()
    return (
        <Route
            {...rest}
            render={({location}) => {
                return user.displayName ? (children) :
                (<Redirect 
                    to={{
                        pathname: '/login',
                        state: {from: location}
                    }}
                 />)
            }}
         /> 
    )
}

export default PrivateRoute