import Title from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Title`,
  component: Title,
  argTypes: {
    title: {
      description: 'Texto del título'
    },
    titleSize: {
      description: 'Tamaño del título',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.textSizes).join(' | ')
        }
      },
      options: Object.keys(bulmaStyles.textSizes)
    },
    subtitle: {
      description: 'Texto del subtítulo'
    },
    subtitleSize: {
      description: 'Tamaño del subtítulo',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.textSizes).join(' | ')
        }
      },
      options: Object.keys(bulmaStyles.textSizes)
    },
    isCentered: {
      description: 'Indica si el texto están centrado'
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
