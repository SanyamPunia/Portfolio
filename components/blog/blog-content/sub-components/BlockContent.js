const BlockContent = (props) => {
  console.log(props);
    return (
      <div>
          <h1 className={``}>{props.value}</h1>
      </div>
    )
  }
  
  export default BlockContent