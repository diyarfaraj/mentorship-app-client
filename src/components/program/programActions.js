import {
  CREATE_PROGRAM,
  UPDATE_PROGRAM,
  DELETE_PROGRAM,
} from "./programConstants";

export function createProgram(program) {
  return {
    type: CREATE_PROGRAM,
    payload: program,
  };
}

export function updateProgram(program) {
  return {
    type: UPDATE_PROGRAM,
    payload: program,
  };
}

export function deleteProgram(programId) {
  return {
    type: DELETE_PROGRAM,
    payload: programId,
  };
}
