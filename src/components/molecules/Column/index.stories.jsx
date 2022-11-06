import Column from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.MOLECULES}/Column`,
  component: Column,
  argTypes: {
    size: {
      description: 'Cambia el tamaño de la columna',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.columnSizes).join(' | ')
        }
      },
      options: Object.keys(bulmaStyles.columnSizes)
    },
    offset: {
      description: 'Cambia el de margen de la columna con la página',
      table: {
        type: {
          summary: Object.keys(bulmaStyles.columnOffsets).join(' | ')
        }
      },
      options: Object.keys(bulmaStyles.columnOffsets)
    },
    children: {
      description: 'Contenido principal. Se le puede solo 1 componente de React o nativo'
    },
    styles: {
      description: 'Estilos de css (usados en React) para hacer una inyeccion directa'
    }
  }
}

const Template = args => <Column {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
      quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
      nec, vulputate
    </p>
  )
}
