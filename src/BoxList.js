import { useState } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = () => {
  const [boxes, setBoxes] = useState([])

  const addBox = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj])
  }

  const deleteBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id))
  }

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      backgroundColor={box.backgroundColor}
      width={box.width}
      height={box.height}
      handleRemove={deleteBox}
    />
  ))

  return (
    <>
      <h2>Let's Make Some Boxes 📦</h2>
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </>
  )
}

export default BoxList
