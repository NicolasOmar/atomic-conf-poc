import Image from '.'
import bulmaStyles from '../../../constants/bulma-styles.json'
import ROUTES from '../../../constants/routes.json'

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

export const Minimal = Template.bind({})
Minimal.storyName = 'Ejemplo'
