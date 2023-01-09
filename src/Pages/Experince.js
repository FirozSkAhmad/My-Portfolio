import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import '../Styles/Experince.css'

function Experince() {
    return (
        <div className='expirence'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='Vertical-Timeline-element--eduction'
                    date="JULY 2015 - MAY 2016"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className='Vertical-Timeline-element-title'>Bhashyam Public School, 10th</h3>
                    <p><b>Score:</b> 9 GPA</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='Vertical-Timeline-element--eduction'
                    date="JULY 2016 - APRIL 2018"
                    iconStyle={{ background: "#3e497a", color: "#fff" }} icon={<SchoolIcon />}>
                    <h3 className='Vertical-Timeline-element-title'>Narayana Junior College, 11th-12th</h3>
                    <p><b>Score:</b> 87%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='Vertical-Timeline-element--eduction'
                    date="JULY 2018 - May 2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className='Vertical-Timeline-element-title'>
                        Sagi Ramakrishnan Raju Engineering College, SRKR-B.Tech(Mechanical)</h3>
                        <p><b>Score:</b> 7.3 GPA</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="JULY 2022- PRESENT"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        Backend Developer Trainee - FunctionUp
                    </h3>
                    <p>Developed the backend infrastructure for 5 projects.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experince
