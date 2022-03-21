import { urlFor } from "../../../../sanity"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ImageContent = (props) => {
    return (
        <Zoom>
            <img className="w-full my-3 rounded" src={urlFor(props.value).url()} />
        </Zoom>
    )
}

export default ImageContent