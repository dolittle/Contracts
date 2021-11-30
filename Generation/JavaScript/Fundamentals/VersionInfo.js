// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

var Fundamentals_Versioning_Version_pb = require('./Versioning/Version_pb');

function VersionInfo() {}

VersionInfo.prototype.getCurrentVersion = function() {
    return VersionInfo.getCurrentVersion();
}

VersionInfo.getCurrentVersion = function() {
    return new Fundamentals_Versioning_Version_pb.Version()
        .setMajor(100)
        .setMinor(200)
        .setPatch(300)
        .setPrereleasestring("LOCAL");
}

exports.VersionInfo = VersionInfo;
