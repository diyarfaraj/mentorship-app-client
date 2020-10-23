import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import ProgramDetailChat from "../components/program/programDetail/ProgramDetailChat";
import ProgramDetailHeader from "../components/program/programDetail/ProgramDetailHeader";
import ProgramDetailInfo from "../components/program/programDetail/ProgramDetailInfo";
import ProgramDetailSidebar from "../components/program/programDetail/ProgramDetailSidebar";

const ProgramDetailedPage = ({ match }) => {
  const program = useSelector((state) =>
    state.program.programs.find((p) => p.id === match.params.id)
  );

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProgramDetailHeader program={program} />
        <ProgramDetailInfo program={program} />
        <ProgramDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProgramDetailSidebar mentees={program.mentees} />
      </Grid.Column>
    </Grid>
  );
};

export default ProgramDetailedPage;
