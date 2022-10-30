const Title = ({
  title = null,
  subtitle = null
}) => (
  <>
    { title && <h1 className="title">{title}</h1> }
    { subtitle && <h2 className="subtitle">{subtitle}</h2> }
  </>
);

export default Title;
