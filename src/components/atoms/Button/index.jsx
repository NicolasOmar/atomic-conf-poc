import { oneOf } from 'prop-types'
import { string, bool } from 'prop-types'
import bulmaStyles from '../../../constants/bulma-styles.json'

const { colors, buttonSizes } = bulmaStyles

const Button = ({
  text = null,
  isLoading = false,
  color = 'white',
  isLightColor = false,
  isOutlined = false,
  isRounded = false,
  size = 'default',
  isDisabled = false
}) => {
  const btnColor = `
    ${color ? ` ${colors[color]}` : ''}
    ${isLightColor ? ' is-light' : ''}
    ${isOutlined ? ' is-outlined' : ''}
    ${isRounded ? ' is-rounded' : ''}
    ${isLoading ? ' is-loading' : ''}
  `
  const btnSize = `${size ? ` ${buttonSizes[size]}` : ''}`
  const buttonStyles = `button${btnColor}${btnSize}`

  return (
    <button className={buttonStyles} disabled={isDisabled}>
      {text}
    </button>
  )
}

export default Button

Button.propTypes = {
  text: string.isRequired,
  isLoading: bool,
  color: oneOf(Object.keys(colors)),
  isLightColor: bool,
  isOutlined: bool,
  isRounded: bool,
  size: oneOf(Object.keys(buttonSizes)),
  isDisabled: bool
}
