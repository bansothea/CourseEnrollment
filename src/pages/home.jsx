import React from 'react'
import MainLayout from '../layout/Mainlayout'

import Intro from '../sections/intro'
import Course from '../sections/aboutcourse'
import WeeklySchedule from '../sections/weeklyschedule'
import RequirementsAndOutcomes from '../sections/requirement'
import Footer from '../sections/footer'
const home = () => {
  return (
    <div>
       <MainLayout>
       <section id="overview">
          <Intro />
        </section>

        <section id="course">
          <Course />
        </section>

        <section id="requirements">
          <RequirementsAndOutcomes />
        </section>

        <section id="schedule">
          <WeeklySchedule />
        </section>

        <Footer />
       </MainLayout>
    </div>
  )
}

export default home