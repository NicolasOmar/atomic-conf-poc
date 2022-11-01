import Image from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Image`,
  component: Image,
  args: {
    src: 'https://bulma.io/images/placeholders/128x128.png'
  },
  argTypes: {
    fixedSize: {
      options: Object.keys(bulmaStyles.imgSizes)
    }
  }
}

const Template = args => <Image {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
