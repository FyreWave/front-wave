const PreloaderComponent = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-col items-center space-y-6">
            {/*<h1 className=" text-bold">Loading is here </h1>*/}
            <i className="fa-solid fa-spinner-third animate-spin text-5xl text-primary-500"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreloaderComponent;
