import WavesComponent from "../components/WavesComponent";

function App() {
  const title = "Animal blog";

  const likes = 50;

  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="pt-10">
        <div>
          <div className="grid md:grid-cols-2 gap-x-4">
            <div className="">
              <div className="Dashboard-tile h-40">
                <div className="p-4">
                  <h2>Total Savings:</h2>
                  <h1 className="text-3xl "> 124,232,000</h1>
                </div>
              </div>
              <div className="Dashboard-tile mt-4">
                <h1 className="text-xl">Deposit History</h1>
                <div>
                  <h1>23 Mar</h1>
                </div>
                <div>
                  <div>
                    <h1>5322 **** **** 45</h1>
                    <h1>Build House for mummy</h1>
                  </div>
                  <div>N23,654,000</div>
                </div>
              </div>
            </div>
            <div className="Dashboard-tile">
              <div>
                <h1 className="text-lg">Your waves</h1>
                <WavesComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
