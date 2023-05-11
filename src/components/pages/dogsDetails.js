import { Suspense, useEffect, useRef } from "react"
import { Link, Outlet, useParams, useLocation } from "react-router-dom"

const DogDetails = () => {

    const {dogId} = useParams()

    const location = useLocation()

    const backLinkLocationRef = useRef(location.state?.from ?? "/dogs")


    // useEffect(() => {
    //     HTTP запрос, если нужно
    // }, [])

    return (
        <div>
            <h1>DogDetails - {dogId}</h1>
            {/* <Link to={location.state && location.state.from} >Back to Collection</Link> */}
            <Link to={backLinkLocationRef.current} >Back to Collection</Link>
            <ul>
                <li>
                   <Link to='subbreeds'> subbreeds</Link>
                </li>
                <li>
                <Link to='gallery'> gallery</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>

        </div>

    )
}

export default DogDetails