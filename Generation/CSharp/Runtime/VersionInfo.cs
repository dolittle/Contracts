// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Dolittle.Versioning.Contracts;

namespace Dolittle.Runtime.Contracts
{
    /// <summary>
    /// Provides information about the current version of the Runtime Contracts.
    /// </summary>
    public static class VersionInfo
    {
        /// <summary>
        /// Gets the the current <see cref="Version"/> of the Runtime Contracts.
        /// </summary>
        public static Version CurrentVersion { get; } = new Version
        {
            Major = 100,
            Minor = 200,
            Patch = 300,
            PreReleaseString = "LOCAL",
        };
    }
}
