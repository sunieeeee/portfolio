import React, {memo} from 'react';
import styled from "styled-components";
import * as colors from "../assets/style/colors";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";

const Projects = memo(() => {
  return (
    <div className="inner">
      <PageTitle leftText="My" rightText="Projects" contentText="Projects" />
    </div>
  );
});

export default Projects;