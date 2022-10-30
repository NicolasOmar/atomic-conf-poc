import Title from '.'
import bulmaStyles from '../../../constants/bulma-styles.json'
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Title`,
  component: Title,
  argTypes: {
    titleSize: {
      options: Object.keys(bulmaStyles.size)
    },
    subtitleSize: {
      options: Object.keys(bulmaStyles.size)
    }
  }
}

const Template = args => <Title {...args} />

export const Minimal = Template.bind({})
Minimal.storyName = 'Ejemplo'
Minimal.args = {
  title: 'Título',
  subtitle: 'Subtítulo'
}
