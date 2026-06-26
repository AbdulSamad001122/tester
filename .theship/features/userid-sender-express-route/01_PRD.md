# PRD: userId sender express route

## Problem Statement
There is currently no dedicated Express route that returns a simple user ID to the requester.

## Goals
- Create a simple Express route that returns a user ID.
- The user ID should be sent as part of the response without being fetched from any external source or database.

## Non-Goals
- Fetching user IDs from a database.
- Authenticating or validating existing users.
- Implementing complex logic for ID generation.

## User Stories
| User Role | Requirement | Goal |
| :--- | :--- | :--- |
| Developer | A simple route that sends back a user ID | To verify the endpoint is functioning without needing database connectivity |

## Acceptance Criteria
- [ ] A new Express route must be implemented.
- [ ] The route must return a user ID in the response.
- [ ] The user ID must not be fetched from any external data source or database.
- [ ] The response must include the user ID and a status.
And dont have any specifc route name needed

## Edge Cases
- Ensuring the route returns a valid response format even though no database lookup is performed.

## Success Metrics
- Successful HTTP response containing the user ID and status when the route is hit.