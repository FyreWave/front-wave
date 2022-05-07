import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddMoneyPage = () => {
  const params = useParams();
  const waveId = params.waveId;
  useEffect(() => {}, []);

  return (
    <div>
      {waveId}
      {/*      <div>
        {isPending && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {wave && <div>Add money to your account</div>}
      </div>*/}
    </div>
  );
};

export default AddMoneyPage;
