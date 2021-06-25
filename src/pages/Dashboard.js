import React from "react";

import FilterButton from "../partials/actions/FilterButton";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import Layout from "../partials/Layout";

function Dashboard() {
  return (
    <>
      <Layout>
        <div className="py-4 w-full max-w-9xl mx-auto">
          <div className="mb-4 main-head">
            <h2>
              The Digital Presence Index measures brand's Digital Footprints
            </h2>
          </div>

          <div className="grid grid-flow-col sm:auto-cols-max justify-between  gap-2 mb-4 filters-wrap">
            <div className="justify-start">
              <button className="btn rounded-full btn-filter btn-instagram active mr-1">
                Instagram
              </button>
              <button className="btn rounded-full btn-filter btn-facebook   mr-1">
                Facebook
              </button>
              <button className="btn rounded-full btn-filter btn-twitter  mr-1">
                Twitter
              </button>
              <button className="btn rounded-full btn-filter btn-google  mr-1">
                Google Search
              </button>
            </div>

            <div className="justify-end">
              <select name="rows mr-1">
                <option value="" disabled defaultValue selected>
                  Rows
                </option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <FilterButton />
            </div>
          </div>

          <DashboardCard07 />
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
