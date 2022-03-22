// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Dolittle.Versioning.Contracts;

namespace Dolittle.Contracts
{
    /// <summary>
    /// Provides info about the current version of the Contracts.
    /// </summary>
    public static class VersionInfo
    {
        /// <summary>
        /// Gets the value indicating the current <see cref="Version"/> of the Contracts.
        /// </summary>
        public static Version CurrentVersion { get; } = new Version
        {
            Major = 5,
            Minor = 1,
            Patch = 0,
            PreReleaseString = "local",
        };
    }
}
