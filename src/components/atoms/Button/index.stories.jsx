import Button from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.ATOMS}/Button`,
  component: Button,
  argTypes: {
    text: {
      description: 'Texto del botón que se mostrará en la UI'
    },
    label: {
      description:
        'Valor en String que devolverá cuando se haga click. En caso de ser nulo, se enviará el valor del "text"'
    },
    isLoading: {
      description: 'Muestra una animación de carga en vez del texto'
    },
    color: {
      description: 'Color del botón',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.colors).join(' | ')
        }
      },
      options: Object.keys(bulmaStyles.colors)
    },
    isLightColor: {
      description: 'Cambia el color por una version más clara'
    },
    isOutlined: {
      description: 'El color principal pasa a estar en los bordes y el texto'
    },
    isRounded: {
      description: 'Hace el botón con bordes redondeados'
    },
    size: {
      description: 'Cambia el tamaño',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.commonSizes).join(' | ')
        }
      },
      options: Object.keys(bulmaStyles.commonSizes)
    },
    isDisabled: {
      description: 'Deshabilita el botón'
    },
    onClick: {
      description: 'Método que mandará el valor del label a los componentes padre'
    }
  }
}

const Template = args => <Button {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  text: 'Botón',
  color: 'info'
}
