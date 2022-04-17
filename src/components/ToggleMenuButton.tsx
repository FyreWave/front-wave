const ToggleMenuButton = (props: any) => {
  const isOpen = props.isOpen;
  const handleClick = props.handleClick;
  // const isShown = props.isShown;

  return (
    <>
      {
        <button className="z-40 text-white" onClick={handleClick}>
          {!isOpen && (
            <i className="fas fa-bars text-3xl text-secondary-500"></i>
          )}
        </button>
      }
    </>
  );
};

export default ToggleMenuButton;
