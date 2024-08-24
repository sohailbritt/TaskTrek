
import './InputField.css'
const InputField = ({getInputData}) => {

    let defaultData;
    const updateInputData = (e) => {
      getInputData(e.target.value);
      e.target.value = '';
    }
  return (
    <>
    <input type='text' className='input' onBlur ={(e)=>updateInputData(e)}/>
    </>
  )
}

export default InputField