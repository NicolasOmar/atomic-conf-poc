import Title from '.'
import bulmaStyles from '../../../constants/bulma-styles.json'
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Title`,
  component: Title,
  argTypes: {
    titleSize: {
      options: Object.keys(bulmaStyles.textSizes)
    },
    subtitleSize: {
      options: Object.keys(bulmaStyles.textSizes)
    }
  }
}

const Template = args => <Title {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  title: 'Título',
  subtitle: 'Subtítulo'
}
