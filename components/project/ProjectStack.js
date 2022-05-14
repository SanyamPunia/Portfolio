const ProjectStack = (props) => {
    const stacks = props.projectStack;
    console.log(stacks);

    return (
        <>
            {stacks.map(stack => (
                <div
                    key={stack._key}
                    className={
                        `${stack.style === 'h1' && 'text-bgBlack dark:text-mainWhite text-3xl font-mulish font-extrabold mb-3'}
                         ${stack.listItem === 'bullet' && 'list-item-stack ml-10 font-mulish text-lg text-divider text-md dark:text-blogDescriptionGray'}`
                    }>
                    {stack.children[0].text}
                </div>
            ))
            }
        </>
    )
}

export default ProjectStack