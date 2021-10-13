import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
  

  
export default function Stages() {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot  />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper >
                    <p><span>juillet:</span> Clé en main, on débute les travaux pour une ouverture en Septembre</p>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot  />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper >Step 2 : Draft
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper>Step 3 : Pending
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                <Paper >Step 4 : Publish
                </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}