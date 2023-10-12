import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const NewBoxForm = ({ addBox }) => {
  // renders a form that takes as input color, height, and width and renders a Box with those features when submitted
  // inputs are cleared when submit button is clicked
  const INITIAL_STATE = {
    width: '',
    height: '',
    backgroundColor: '',
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addBox({ ...formData, id: uuidv4() })
    setFormData(INITIAL_STATE)
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData((formData) => ({ ...formData, [name]: value }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Make Box</button>
      </form>
    </>
  )
}

export default NewBoxForm
