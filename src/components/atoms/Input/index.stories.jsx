import Input from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Input`,
  component: Input,
  argTypes: {
    color: {
      options: Object.keys(bulmaStyles.colors)
    },
    size: {
      options: Object.keys(bulmaStyles.commonSizes)
    }
  }
}

const Template = args => <Input {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  color: 'info'
}
