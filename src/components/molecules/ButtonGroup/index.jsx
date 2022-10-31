import { arrayOf, shape } from 'prop-types'
import Button from '../../atoms/Button'

const ButtonGroup = ({ buttons = null }) => {
  return buttons && Array.isArray(buttons) && buttons.length > 0 ? (
    <section class="buttons has-addons">
      {buttons.map((config, i) => (
        <Button key={`button-item-${i}`} {...config} />
      ))}
    </section>
  ) : null
}

export default ButtonGroup

ButtonGroup.propTypes = {
  buttons: arrayOf(shape(Button.propTypes))
}
