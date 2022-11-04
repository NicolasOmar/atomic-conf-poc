import ProgressBar from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/ProgressBar`,
  component: ProgressBar,
  argTypes: {
    value: {
      description: 'Valor numérico de 0 a 100 que muestra progreso'
    },
    isInLoop: {
      description:
        'Indica que la barra hará una animación en bucle (usado para procesos que demoren en terminar)'
    },
    color: {
      description: 'Color de la barra de carga',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.colors).join(', ')
        }
      },
      options: Object.keys(bulmaStyles.colors)
    },
    size: {
      description: 'Cambia el tamaño',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.commonSizes).join(', ')
        }
      },
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
