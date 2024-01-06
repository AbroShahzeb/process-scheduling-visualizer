import { useState } from "react";
import styled from "styled-components";
import Input from "./components/input/index";
import Output from "./components/output/index";

import { media } from "./components/GlobalStyles.css";
import "./App.css";

const Main = styled.main`
  display: flex;
  ${media["1050"]`flex-direction: column;`}
  margin: 45px auto 1rem !important;
  ${media["600"]`margin: 20px auto 1rem !important`};
  gap: clamp(0.5rem, 2.5vw, 4rem);
  ${media["1050"]`gap: 0.75rem`};
  margin: 0 100px;
`;

export default function Home() {
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const [arrivalTime, setArrivalTime] = useState([]);
  const [burstTime, setBurstTime] = useState([]);
  const [timeQuantum, setTimeQuantum] = useState();
  const [priorities, setPriorities] = useState([]);

  return (
    <div className='container'>
      <Main>
        <Input
          selectedAlgo={selectedAlgo}
          setSelectedAlgo={setSelectedAlgo}
          setArrivalTime={setArrivalTime}
          setBurstTime={setBurstTime}
          setTimeQuantum={setTimeQuantum}
          setPriorities={setPriorities}
        />
        <Output
          selectedAlgo={selectedAlgo}
          arrivalTime={arrivalTime}
          burstTime={burstTime}
          timeQuantum={timeQuantum}
          priorities={priorities}
        />
      </Main>
    </div>
  );
}
