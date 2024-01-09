import { fcfs } from "./fcfs";
import { sjf } from "./sjf";
import { rr } from "./rr";
import { pp } from "./pp";

export const solve = (
  algo,
  arrivalTime,
  burstTime,
  timeQuantum,
  priorities
) => {
  switch (algo) {
    case "FCFS":
      return fcfs(arrivalTime, burstTime);
    case "SJF":
      return sjf(arrivalTime, burstTime);

    case "RR":
      return rr(arrivalTime, burstTime, timeQuantum);

    case "PP":
      return pp(arrivalTime, burstTime, priorities);
    default:
      break;
  }
};

export const solvedProcessesInfoType = [
  {
    job: "",
    at: 0,
    bt: 0,
    ft: 0,
    tat: 0,
    wat: 0,
  },
];
