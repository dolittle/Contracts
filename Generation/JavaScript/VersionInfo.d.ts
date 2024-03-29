// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Version } from './Versioning/Version_pb';

/**
 * Provides information about the current version of the Contracts.
 */
export class VersionInfo {
    /**
     * Gets the current {@link Version} of the Contracts.
     */
    static getCurrentVersion(): Version;
}