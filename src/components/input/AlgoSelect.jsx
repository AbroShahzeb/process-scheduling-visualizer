/* eslint-disable react/prop-types */
import Select from "react-select";
import styled from "styled-components";

/*
  FCFS - First Come First Serve
  SJF - Shortest Job First
  RR - Round-Robin
  PP - Preemptive Priority
*/
// eslint-disable-next-line react-refresh/only-export-components
export const defaultOption = {
  value: "FCFS",
  label: "First Come First Serve, FCFS",
};

const options = [
  defaultOption,
  {
    value: "SJF",
    label: "Shortest Job First, SJF (non-preemptive)",
  },
  {
    value: "RR",
    label: "Round-Robin, RR",
  },

  {
    value: "PP",
    label: "Priority (preemptive)",
  },
];

const StyledSelect = styled(Select)`
  .react-select__control {
    box-sizing: border-box;
    border-color: #c5c7d0;
    height: 41px;

    &:hover {
      background-color: #fafafa;
    }
  }
  .react-select__control--is-focused {
    background-color: #fff;
    box-shadow: 0 0 0px 1px #ff94e4;
    border: 1px solid #ff26be;
    &:hover {
      background-color: #fff;
    }
  }
  .react-select__control--menu-is-open {
    box-shadow: 0 0 5px 1px #ff94e4;
    border: 1px solid #ff26be;
  }
  .react-select__value-container {
    padding: 0 8px;
    font-size: 14px;
  }
  .react-select__option {
    font-size: 14px;
  }
`;

const AlgoSelect = ({ selectedAlgo, setSelectedAlgo }) => {
  return (
    <StyledSelect
      defaultValue={selectedAlgo}
      onChange={setSelectedAlgo}
      options={options}
      instanceId='react-select-algo'
      inputId='react-select-algo'
      classNamePrefix='react-select'
      isSearchable={false}
    />
  );
};

export default AlgoSelect;
