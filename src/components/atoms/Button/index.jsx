import { string, bool, oneOf, func } from 'prop-types'
// CONSTANTES
import bulmaStyles from '../../../constants/bulma-styles.json'

const { colors, commonSizes } = bulmaStyles

const Button = ({
  text = null,
  isLoading = false,
  color = 'white',
  isLightColor = false,
  isOutlined = false,
  isRounded = false,
  size = 'default',
  isDisabled = false,
  onClick = null
}) => {
  const btnColor = `
    ${color ? ` ${colors[color]}` : ''}
    ${isLightColor ? ' is-light' : ''}
    ${isOutlined ? ' is-outlined' : ''}
    ${isRounded ? ' is-rounded' : ''}
    ${isLoading ? ' is-loading' : ''}
  `
  const btnSize = `${size ? ` ${commonSizes[size]}` : ''}`
  const buttonStyles = `button${btnColor}${btnSize}`

  return (
    <button className={buttonStyles} disabled={isDisabled} onClick={() => onClick}>
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
  size: oneOf(Object.keys(commonSizes)),
  isDisabled: bool,
  onClick: func
}
