import React from "react";
import ProgramListItem from "./ProgramListItem";

const ProgramList = ({ programs, selectProgram, deleteProgram }) => {
  return (
    <>
      {programs.map((program) => (
        <ProgramListItem
          program={program}
          key={program.id}
          selectProgram={selectProgram}
          deleteProgram={deleteProgram}
        />
      ))}
    </>
  );
};

export default ProgramList;
