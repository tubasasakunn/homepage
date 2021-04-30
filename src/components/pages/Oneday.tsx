import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import OnedayTabs from "../organisms/OnedayTabs";

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title="ある日の若生">
      <OnedayTabs></OnedayTabs>
    </GenericTemplate>
  );
};

export default HomePage;