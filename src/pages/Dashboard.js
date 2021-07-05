import React, { useState, useEffect } from "react";

import Layout from "../partials/Layout";
import DashboardTable from "../partials/dashboard/DashboardTable";
import FilterButtonGroup from "../partials/FilterButtonGroup";
import FilterRowsButton from "../partials/FilterRowsButton";
import FilterButton from "../partials/actions/FilterButton";

import useFetch from "../hooks/useFetch";

function Dashboard() {
  const [activeTab, setactiveTab] = useState("instagram");

  const [searchVolume, setsearchVolume] = useState(null);

  const handleOnTabButtonClick = (name) => {
    setactiveTab(name);
  };

  const { response } = useFetch(`https://blinklocal.in/api/volume/`, {});

  useEffect(() => {
    const rankedVolumes =
      response &&
      response.data.map((item, index) => {
        return { rank: index + 1, ...item };
      });
    setsearchVolume(rankedVolumes);
  }, [response]);

  //console.log(searchVolume);

  return (
    <>
      <Layout>
        <main>
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

            <DashboardTable tableData={searchVolume} activeTab={activeTab} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Dashboard;
