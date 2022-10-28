import Title from ".";

export default {
  title: `Atoms/Title`,
  component: Title
}

const Template = args => <Title {...args} />

export const Minimal = Template.bind({})
Minimal.storyName = 'Prueba'