const withConsoleLog = (WrapperComponent) => {
  return function consoleLog(props) {
    console.log("HOCs");
    return (
      <>
        <WrapperComponent {...props} />
      </>
    );
  };
};

export default withConsoleLog;
