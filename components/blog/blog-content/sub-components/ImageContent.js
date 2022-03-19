import { urlFor } from "../../../../sanity"

const ImageContent = (props) => {
    return (
        <>
            <img src={urlFor(props.value).url()} />
        </>
    )
}

export default ImageContent