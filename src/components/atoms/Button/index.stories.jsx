import Button from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Button`,
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(bulmaStyles.colors)
    },
    size: {
      options: Object.keys(bulmaStyles.commonSizes)
    }
  }
}

const Template = args => <Button {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  text: 'Botón',
  color: 'info'
}
