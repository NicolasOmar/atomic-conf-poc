import { bool, oneOf, string } from 'prop-types'
import bulmaStyles from '../../../constants/bulma-styles.json'

const { colors, commonSizes } = bulmaStyles

const Input = ({
  placeholder = null,
  isDisabled = false,
  color = 'white',
  size = 'default'
}) => {
  const inputStyles = `input${color ? ` ${colors[color]}` : ''}${
    size ? ` ${commonSizes[size]}` : ''
  }`
  return (
    <input
      type="text"
      disabled={isDisabled}
      className={inputStyles}
      placeholder={placeholder}
    ></input>
  )
}

export default Input

Input.propTypes = {
  placeholder: string,
  isDisabled: bool,
  color: oneOf(Object.keys(colors)),
  size: oneOf(Object.keys(commonSizes))
}
