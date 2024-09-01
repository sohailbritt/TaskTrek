
import './InputField.css'
const InputField = ({getInputData}) => {

    const updateInputData = (e) => {
      getInputData(e.target.value);
      e.target.value = '';
    }
  return (
    <>
    <input
    type='text'
    className='input'
    placeholder='Add Task'
    onBlur ={(e)=>updateInputData(e)}/>
    </>
  )
}

export default InputField