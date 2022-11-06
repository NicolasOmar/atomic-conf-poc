import ButtonGroup from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.MOLECULES}/ButtonGroup`,
  component: ButtonGroup,
  argTypes: {
    buttons: {
      description: 'Lista de botones',
      table: {
        type: {
          summary: `Button[]`,
          detail: null
        }
      }
    },
    isCentered: {
      description: 'Indica si los botones están centrados'
    },
    onClick: {
      description: 'Método que mandará el valor del label a los componentes padre'
    }
  }
}

const Template = args => <ButtonGroup {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  buttons: Array.from({ length: 5 }, (_, i) => ({
    text: `Botón ${++i}`,
    color: Object.keys(bulmaStyles.colors)[i + 5]
  }))
}
