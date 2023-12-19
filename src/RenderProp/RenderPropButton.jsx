const RenderPropButton = ({ renderLabel, onClick }) => {
  const additionalInfo = 10;
  return <button onClick={onClick}>{renderLabel(additionalInfo)}</button>;
};

export default RenderPropButton;
