import FormInput from '.'
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.MOLECULES}/FormInput`,
  component: FormInput
}

const Template = args => <FormInput {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  label: 'Input de ejemplo',
  inputConfig: {
    placeholder: 'Ejemplo',
    color: 'info'
  }
}
