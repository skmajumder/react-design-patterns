const withConsoleLog = (WrapperComponent) => {
  return function HocComponent(props) {
    console.log("HOCs");
    return (
      <>
        <WrapperComponent {...props} />
      </>
    );
  };
};

export default withConsoleLog;
