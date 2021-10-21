# [6.1.0] - 2021-10-21 [PR: #55](https://github.com/dolittle/Contracts/pull/55)
## Summary

Adds a management surface to Event Handlers that has the capability to reprocess event for Event Handlers and also get information about running Event Handlers. Also adds the possibility to register Event Handlers with named aliases for easy tracking. 

### Added

- Adds optional string 'alias' to event handler registration
- Adds management service for event handlers with 4 endpoints: `ReprocessEventsFrom`, `ReprocessAllEvents`, `GetAll` and `GetOne`

### Changed

- Updated Grpc and protobuf dependencies


# [6.0.0] - 2021-10-13 [PR: #53](https://github.com/dolittle/Contracts/pull/53)
## Summary

Change from Event Source ID as a UUID to a string, this change is motivated by integrating and extracting events from existing systems - where the ID of the source might not be a UUID. Since the EventSourceID is commonly used as the partition key for streams, we also changed partitions to be strings at the same time.

Also, renamed some fields in messages from _artifact_ to a more descriptive name.

### Changed

- EventSourceID is now a string instead of a UUID.
- PartitionID is now also a string instead of a UUID. 
- Aligned names of event type fields throughout messages.


# [5.4.0] - 2021-6-28 [PR: #48](https://github.com/dolittle/Contracts/pull/48)
## Summary

Adds Embeddings services and messages

### Added

- Service and messages for registering, comparing and projecting Embeddings
- Service and messages for getting Embeddings
- Service and messages for updating and deleting Embeddings


# [5.3.0] - 2021-4-9 [PR: #46](https://github.com/dolittle/Contracts/pull/46)
## Summary

Added support for imperative Projections, and releasing of generated Go code, and some minor cleanup of code generations scripts.

### Added

- Service for registering Projections
- Service for getting Projection States
- Release module workflow for Go (https://go.dolittle.io/contracts/v5)

### Changed

- Moved things around in the code generation (Fundamentals+Runtime top level -> Language top level)
- Removed generated fundamentals code in @dolittle/runtime.contracts, and added dependency
- Removed `Runtime/` `Fundamentals/` directories in JS pacakges

### Removed

- Code generation for JavaScript.Web using gRPC web, since we are currently not using it and it was not working.


