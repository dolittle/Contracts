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


