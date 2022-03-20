const BlockContent = (props) => {
  console.log(props);
  return (
    <div>
      <h1
        className={
          `${props.style === 'h1' && 'text-mainWhite text-3xl font-mulish font-extrabold mb-3'}
           ${props.style === 'normal' && 'font-mulish text-blogDescriptionGray text-lg dark:text-blogDescriptionGray'}`
        }>
        {props.value}
      </h1>
    </div>
  )
}

export default BlockContent