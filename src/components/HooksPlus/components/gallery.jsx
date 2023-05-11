import { useParams } from "react-router-dom"

 const Gallery = () => {
    
    const {dogId} = useParams()
        // useEffect(() => {
    //     HTTP запрос, если нужно
    // }, [])
    return <div>Gallery: {dogId}</div>
    
}

export default Gallery