import React, { Component } from "react";
import ProgramListItem from "./ProgramListItem";

const ProgramList = ({ programs }) => {
  return (
    <>
      {programs.map((program) => (
        <ProgramListItem program={program} key={program.id} />
      ))}
    </>
  );
};

export default ProgramList;
