const BlockContent = (props) => {
  return (
    <div>
      <h1
        className={
          `${props.style === 'h1' && 'text-bgBlack dark:text-mainWhite text-3xl font-mulish font-extrabold mt-14'}
           ${props.style === 'normal' && 'font-mulish text-divider text-md dark:text-blogDescriptionGray my-5'}
           ${props.style === 'h2' && 'font-mulish text-mainGreen text-xl'}
           ${props.listItem === 'bullet' && 'list-item ml-10'}`
        }>
        {props.value}
      </h1>
    </div>
  )
}

export default BlockContent

// ${props.listItem === 'bullet' && 'text-mainPurple'}