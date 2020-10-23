import { sampleData } from "../../services/sampleData";
import {
  CREATE_PROGRAM,
  UPDATE_PROGRAM,
  DELETE_PROGRAM,
} from "./programConstants";

const initialState = {
  programs: sampleData,
};

export default function PROGRAMReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CREATE_PROGRAM:
      return {
        ...state,
        programs: [...state.programs, payload],
      };
    case UPDATE_PROGRAM:
      return {
        ...state,
        programs: [
          ...state.programs.filter((program) => program.id !== payload.id),
          payload,
        ],
      };
    case DELETE_PROGRAM:
      return {
        ...state,
        programs: [
          ...state.programs.filter((program) => program.id !== payload),
        ],
      };
    default:
      return state;
  }
}
