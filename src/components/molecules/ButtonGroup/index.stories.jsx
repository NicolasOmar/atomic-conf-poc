import ButtonGroup from '.'
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.MOLECULES}/ButtonGroup`,
  component: ButtonGroup
}

const Template = args => <ButtonGroup {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  buttons: Array.from({ length: 5 }, (_, i) => ({
    text: 'Botón',
    color: Object.keys(bulmaStyles.colors)[i + 5]
  }))
}
