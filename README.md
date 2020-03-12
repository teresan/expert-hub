# ExpertHub
An application to distribute request for info to distributed experts

expert-db:

Sync-based service. 

Set of Twilio Functions to manage the list of experts on the expert Hub. 
It requires a SID of the Sync Service where it will be stored. The requests to the SYNC service must pass the AUTH and TOKEN of the Sync Service.

Experts are JSON objects that describe the experts and their expertise inside the HUB.
The only compulsory field in the Export JSON object is "number"; which will act as unique key to the table.
All other fields can be flexible and do not have to be the same across Experts. This is a document base DB.

*expert-add*	- adds an expert JSON - number field mandatory into the Experts service (table)
*expert-fetch*	- retrieves the expert JSON from the Experts service by  phone number
*expert-list*	- lists all experts the Experts service
*expert-remove*	- deletes the expert identified by her phone number from the Experts service
*expert-table-create*	- creates a new Expert service and if already exists returns the SID of the service
*expert-table-delete*	- destroys the Experts Service inside the given Sync instance
*expert-update* - updates the the JSON object related to a given experts identified by her phone number
