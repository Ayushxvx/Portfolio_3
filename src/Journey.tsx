import Timeline from "@mui/lab/Timeline";
import { TimelineItem } from "@mui/lab";
import { TimelineSeparator } from "@mui/lab";
import TimelineConnector from "@mui/lab/TimelineConnector";
import {TimelineContent} from "@mui/lab";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Experience(){
    return (
        <>
        <div id="journey" className="bg-transparent backdrop-blur-lg rounded-lg border-2 border-solid border-gray-800 sm:w-8/12 md:w-6/12 mx-auto p-2 m-2">
        <h1 className="p-2 m-2 text-cyan-700 font-serif text-center text-2xl underline underline-offset-6">
            Journey
        </h1>
         <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="text-cyan-500"><span className="text-xs sm:text-sm md:text-md">Software Developer at LTM ( November 2025 - Present )</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="text-cyan-500 font-sans"><span className="text-xs sm:text-sm md:text-md">Backend Developer Internship ( March - April 2025 )</span> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="text-cyan-500 font-sans"><span className="text-xs sm:text-sm md:text-md">B. Tech 8.71 CGPA ( 2021 - 2025 )</span></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent className="text-cyan-500 font-sans"><span className="text-xs sm:text-sm md:text-md">10<sup>th</sup> + 12<sup>th</sup> &nbsp; ( 2019 - 2021 )</span></TimelineContent>
      </TimelineItem>
    </Timeline>
        </div>
        </>
    )
}