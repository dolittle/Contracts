# [6.6.0] - 2022-2-9 [PR: #85](https://github.com/dolittle/Contracts/pull/85)
## Summary

Introduces secondary storage mechanisms for Projection read models, this enables using existing databases as query engines for read models.

### Added

- Copy read model specifications on `ProjectionRegistrationRequest`, to tell the Runtime to make copies of Projection read models to a secondary storage.
- MongoDB read model copies with BSON conversions and renaming support for converting Projection states (JSON) to BSON documents so that we can mimic how storing read models directly to a MongoDB collection would work from the SDKs.


# [6.5.0] - 2022-1-21 [PR: #83](https://github.com/dolittle/Contracts/pull/83)
## Summary

Adds a method on Projection Store to get all projection read models in batches (size determined by Runtime), to alleviate large gRPC messages when the number of read models become large.

### Added

- A server streaming method on Projection Store called `GetAllInBatches` that streams projection states in batches to the client.

### Deprecated

- The `GetAll` method on Projection Store has been deprecated in favour of the new `GetAllInBatches` method.


# [6.4.0] - 2022-1-20 [PR: #82](https://github.com/dolittle/Contracts/pull/82)
## Summary

Adds support for the client (SDKs) and Runtime to communicate version info and booting configuration values between each other through an initial handshake. Also added VersionInfo that is baked into the compiled code while building on GitHub to use to determine which version of the contracts is used at runtime.

Note: This PR is a fixed release of #76 that failed to release because pre-release is `""` when releasing the actual version.

### Added

- VersionInfo is baked into the released libraries
- Handshake method with HandshakeRequest and HandshakeResponse


# [6.3.0] - 2021-11-18 [PR: #68](https://github.com/dolittle/Contracts/pull/68)
## Summary

Adds services to work with tenants and tenant-scoped resources - currently MongoDB is supported - through the Runtime using a Client.

### Added

- Tenants.GetAll: Gets all tenants from the Runtime
- Resources.GetMongoDB: Gets a connection string for a database for the current tenant from the Runtime


# [6.2.0] - 2021-11-3 [PR: #64](https://github.com/dolittle/Contracts/pull/64)
## Summary

Registration of Aggregate Roots and Event Types can now be done in order to provide an alias to id mapping

### Added

- Runtime Services:
    - AggregateRoots.RegisterAlias: Register an alias mapping for an Aggregate Root
    - EventTypes.Register: Register an EventType with an optional alias
- Runtime Management Services:
    - AggregateRoots.GetAll: Gets all registered Aggregate Roots
    - AggregateRoots.GetOne: Gets information about a specific Aggregate Root
    - AggregateRoots.GetEvents: Gets committed events for an Aggregate Root Instance
    - EventTypes.GetAll: Gets all registered Event Types


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


