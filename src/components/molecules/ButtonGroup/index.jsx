import { arrayOf, func, shape } from 'prop-types'
// COMPONENTES
import Button from '../../atoms/Button'

const ButtonGroup = ({ buttons = null, onClick = null }) => {
  return buttons && Array.isArray(buttons) && buttons.length > 0 ? (
    <section className="buttons has-addons">
      {buttons.map((config, i) => (
        <Button key={`button-item-${i}`} {...{ ...config, onClick }} />
      ))}
    </section>
  ) : null
}

export default ButtonGroup

ButtonGroup.propTypes = {
  buttons: arrayOf(shape(Button.propTypes)),
  onClick: func
}
