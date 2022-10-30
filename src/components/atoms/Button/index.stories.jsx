import Button from '.'
import bulmaStyles from '../../../constants/bulma-styles.json'
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Button`,
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(bulmaStyles.colors)
    },
    size: {
      options: Object.keys(bulmaStyles.buttonSizes)
    }
  }
}

const Template = args => <Button {...args} />

export const Minimal = Template.bind({})
Minimal.storyName = 'Ejemplo'
Minimal.args = {
  text: 'Botón'
}
