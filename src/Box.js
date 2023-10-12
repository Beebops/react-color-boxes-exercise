const Box = ({ handleRemove, id, width, height, backgroundColor }) => {
  const boxStyles = {
    backgroundColor: backgroundColor,
    width: `${width}px`,
    height: `${height}px`,
  }

  const remove = () => handleRemove(id)

  return (
    <div>
      <div className="Box" style={boxStyles}></div>
      <button onClick={remove}>Remove Box</button>
    </div>
  )
}

export default Box
