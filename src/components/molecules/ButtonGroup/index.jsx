import { arrayOf, bool, func, shape } from 'prop-types'
// COMPONENTES
import Button from '../../atoms/Button'

const ButtonGroup = ({ buttons = null, isCentered = false, onClick = null }) => {
  const buttonGroupStyles = `buttons has-addons${isCentered ? ' is-centered' : ''}`

  return buttons && Array.isArray(buttons) && buttons.length > 0 ? (
    <section className={buttonGroupStyles}>
      {buttons.map((config, i) => (
        <Button key={`button-item-${i}`} {...{ ...config, onClick }} />
      ))}
    </section>
  ) : null
}

export default ButtonGroup

ButtonGroup.propTypes = {
  buttons: arrayOf(shape(Button.propTypes)),
  isCentered: bool,
  onClick: func
}
