// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Dolittle.Versioning.Contracts;

#pragma warning disable SA1122 // To allow replacing PreReleaseString with "" instead of string.Empty

namespace Dolittle.Contracts
{
    /// <summary>
    /// Provides information about the current version of the Contracts.
    /// </summary>
    public static class VersionInfo
    {
        /// <summary>
        /// Gets the the current <see cref="Version"/> of the Contracts.
        /// </summary>
        public static Version CurrentVersion { get; } = new Version
        {
            Major = 377,
            Minor = 389,
            Patch = 368,
            PreReleaseString = "PRERELEASE",
        };
    }
}
