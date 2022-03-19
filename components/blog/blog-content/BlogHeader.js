const BlogHeader = (props) => {
    return (
        <div className="mb-4">
            <h1 className="mb-3 font-mulish text-4xl font-extrablack text-mainPurple dark:text-mainGreen leading-14">{props.title}</h1>
            <p className="mb-3 font-source_code_pro text-bgBlack dark:text-mainWhite">{props.description}</p>
            <p className="font-source_code_pro text-bgBlack dark:text-blogDate">Published on • {props.date}</p>
        </div>
    )
}

export default BlogHeader