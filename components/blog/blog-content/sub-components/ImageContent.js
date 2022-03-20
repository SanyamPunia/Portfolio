import { urlFor } from "../../../../sanity"

const ImageContent = (props) => {
    return (
        <>
            <img className="w-full my-4 rounded" src={urlFor(props.value).url()} />
        </>
    )
}

export default ImageContent