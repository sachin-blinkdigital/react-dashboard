import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';


function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden main">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     
      

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       
        <main>
          <div className="px-4 sm:px-0 lg:px-0 pt-4 pb-4 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}
            <div className="mb-4 main-head">
              <h2>
                The Digital Presence Index measures brand's Digital Footprints
              </h2>
            </div>
            

            {/* Right: Actions */}
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
                <select name="rows mr-1" >
                  <option value="" disabled defaultValue selected>Rows</option>
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                {/* Filter button */}
                <FilterButton />
              </div>
                
                                 
              </div>

            <DashboardCard07 />



          </div>
        </main>
        <Footer/>

      </div>
    </div>
  );
}

export default Dashboard;