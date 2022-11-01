import Site from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.TEMPLATES}/Site`,
  component: Site
}

const Template = args => <Site {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  useDummyData: true
}
