import ColumnGrid from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.ORGANISMS}/ColumnGrid`,
  component: ColumnGrid,
  argTypes: {
    columns: {
      description: 'Lista de Columnas',
      table: {
        type: {
          summary: 'Column[]',
          detail: null
        }
      }
    },
    isVerticalCenter: {
      description: 'Alinea las columnas en forma vertical'
    },
    isHorizontalCenter: {
      description: 'Alinea las columnas en forma horizontal'
    },
    isMultiline: {
      description: 'Muestra las columnas juntas (siempre que de el ancho de la página)'
    }
  }
}

const Template = args => <ColumnGrid {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  columns: Array.from({ length: 5 }, () => ({
    size: '2',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
        vel, aliquet nec, vulputate
      </p>
    )
  }))
}
