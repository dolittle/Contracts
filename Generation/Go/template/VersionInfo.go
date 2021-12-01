package contracts

import (
	"go.dolittle.io/contracts/versioning"
)

// GetCurrentVersion returns the current version of the Contracts.
func GetCurrentVersion() versioning.Version {
	return versioning.Version{
		Major:            377,
		Minor:            389,
		Patch:            368,
		PreReleaseString: "PRERELEASE",
	}
}
