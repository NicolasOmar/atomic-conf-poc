import Site from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.TEMPLATES}/Site`,
  component: Site,
  argTypes: {
    useDummyData: {
      description:
        'Usar una configuración falsa para mostrar mientras se esta trabajando en la configuración del componente padre que va a usar esta plantilla'
    },
    siteConfig: {
      description:
        'Configuración de la plantilla usando propiedades del componente Column junto con Title, ButtonGroup y CardList como children de cada columna',
      table: {
        type: {
          summary: '{title: Title, buttonGroup: ButtonGroup, cardList: CardList }'
        }
      }
    },
    cards: {
      description: 'Listado de Cards',
      table: {
        type: {
          summary: 'Cards[]'
        }
      }
    },
    isLoading: {
      description:
        'Muestra una animación de carga en vez de los resultados de búsqueda en Cards'
    },
    onClick: {
      description: 'Método que mandará el valor del label a los componentes padre'
    }
  }
}

const Template = args => <Site {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  useDummyData: true
}
