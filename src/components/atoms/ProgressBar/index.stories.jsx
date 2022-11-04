import ProgressBar from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/ProgressBar`,
  component: ProgressBar,
  argTypes: {
    color: {
      options: Object.keys(bulmaStyles.colors)
    },
    size: {
      options: Object.keys(bulmaStyles.commonSizes)
    }
  }
}

const Template = args => <ProgressBar {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  value: 0
}
