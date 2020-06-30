# DayCalendar

## Description
A day calendar that allows the user to save their daily events by the hour.

![](Calendar.png)

## User Story

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar
    Current date is displayed using moment.js to update everyday

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
    Time blocks are provided for business hours (9AM - 5PM)

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event
    Each time block contains a text area where the user can enter the event they have going on for that hour.

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
    When the user clicks save, the information is stored in the text area and in local storage.

WHEN I refresh the page
THEN the saved events persist
    The events are still rendered when the user opens or refreshes the website again.



