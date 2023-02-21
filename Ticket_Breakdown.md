# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: 
Title: Add custom Agent id

Description: Facility wants to store its own custom Agent id for easy access to the Agent.

Acceptance Criteria: Facility should be able to provide their own custom id for all Agent.

Implementation Details:
Added a table Facility_Agents with one-to-many relationship between Facility and Agents with information like facilityId, agentId, customId.
Create an API to add entry to this table.
Estimations: 7hrs 

Ticket 2: 
Title: API to get shift given an Agent id

Description: Create a method getShifyByAgentid(agentId) that returns all the shifts that agent worked on in that quarter.
Acceptance Criteria: Given an Agent id, it should have all shift information for that quarter.

Implementation Details:
Create an API to getShifyByAgentid to look up in the Shifts table to sum all the shift information.

Estimations Time: 6hrs

Ticket 3: 
Title: API to generate report given custom Agent id
Description: Create a method generateReportForAgent(customAgentId) which will generate report for that Agent for that quarter by summing up every Shift they worked.

Acceptance Criteria: Facility needs to be able to provide a unique custom id for every Agent in that quarter by adding up all the shifts worked.

Implementation Details:
For a given customAgentId, the actual agentId is found using Facility_Agents table.
USE API getShifyByAgentid(agentId).
USE generateReport function to give report in pdf format for the agent shift information.

Estimations Time: 7hrs
