const WaveTile = (props: any) => {
  const wave = props.wave;
  const title = props.title;
  return (
    <div>
      <h1 className="text-white font-bold">{wave.title}</h1>
      <h1 className=" font-bold text-primary-200 font-semibold text-3xl">
        {wave.goal}
      </h1>
      <progress className="rounded-full" />
      <p className="text-white font-bold">{wave.date}</p>

      <div>
        <button className="regular-button my-4">Initiate Withdrawal</button>
      </div>
    </div>
  );
};

export default WaveTile;
