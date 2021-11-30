package contracts

import (
	"go.dolittle.io/contracts/v6/versioning"
)

// GetCurrentVersion returns the current version of the Contracts.
func GetCurrentVersion() versioning.Version {
	return versioning.Version{
		Major:            100,
		Minor:            200,
		Patch:            300,
		PreReleaseString: "LOCAL",
	}
}
