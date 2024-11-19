import React from "react";
import PageLayout from "./PageLayout";
import Feature from "../components/Feature";

function FeaturePage() {
  return (
    <PageLayout className={"md:p-14 py-14 px-4"}>
      <Feature />
    </PageLayout>
  );
}

export default FeaturePage;
