import { shape, string } from 'prop-types'
import Input from '../../atoms/Input'

const FormInput = ({ label = null, inputConfig = null }) => {
  const renderLabel = () => (label ? <label className="label">{label}</label> : null)
  const renderInput = () =>
    inputConfig ? (
      <section className="control">
        <Input {...inputConfig} />
      </section>
    ) : null
  return (
    <section className="field">
      {renderLabel()}
      {renderInput()}
    </section>
  )
}

export default FormInput

FormInput.propTypes = {
  label: string,
  inputConfig: shape(Input.propTypes)
}
