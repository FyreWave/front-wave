const WaveTile = (props: any) => {
  const wave = props.wave;
  const title = props.title;
  return (
    <div>
      <h1>{wave.title}</h1>
      <h1>{wave.goal}</h1>
      <p>{wave.date}</p>
    </div>
  );
};

export default WaveTile;
