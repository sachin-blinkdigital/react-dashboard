import React, { useState } from "react";

import Layout from "../partials/Layout";
import DashboardTable from "../partials/dashboard/DashboardTable";
import FilterButtonGroup from "../partials/FilterButtonGroup";
import FilterRowsButton from "../partials/FilterRowsButton";
import FilterButton from "../partials/actions/FilterButton";

function Dashboard() {
  const [activeTab, setactiveTab] = useState("instagram");

  const handleOnTabButtonClick = (name) => {
    setactiveTab(name);
  };

  return (
    <>
      <Layout>
        <div className="py-4 w-full max-w-9xl mx-auto">
          <div className="mb-4 main-head">
            <h2>
              The Digital Presence Index measures brand's Digital Footprints
            </h2>
          </div>

          <div className="grid grid-flow-col sm:auto-cols-max justify-between gap-2 mb-4 filters-wrap">
            <FilterButtonGroup
              activeTab={activeTab}
              onFilterButtonClick={handleOnTabButtonClick}
            />
            <div className="justify-end">
              <FilterRowsButton />
              <FilterButton />
            </div>
          </div>

          <DashboardTable activeTab={activeTab} />
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
