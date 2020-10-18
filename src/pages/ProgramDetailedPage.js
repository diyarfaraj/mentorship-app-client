import React from "react";
import { Grid } from "semantic-ui-react";
import ProgramDetailChat from "../components/program/programDetail/ProgramDetailChat";
import ProgramDetailHeader from "../components/program/programDetail/ProgramDetailHeader";
import ProgramDetailInfo from "../components/program/programDetail/ProgramDetailInfo";
import ProgramDetailSidebar from "../components/program/programDetail/ProgramDetailSidebar";

const ProgramDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProgramDetailHeader />
        <ProgramDetailInfo />
        <ProgramDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProgramDetailSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default ProgramDetailedPage;
