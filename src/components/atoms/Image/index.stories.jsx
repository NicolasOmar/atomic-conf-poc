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
    src: {
      description: 'Link del origen de la imagen'
    },
    description: {
      description: 'Texto usado para mostrar en caso que no cargue la imagen'
    },
    isRounded: {
      description: 'Le da bordes redondeados a la imagen'
    },
    fixedSize: {
      description: 'Le da un formato de imagen en particular en base a varios ratios',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.imgSizes).join(', ')
        }
      },
      options: Object.keys(bulmaStyles.imgSizes)
    }
  }
}

const Template = args => <Image {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
