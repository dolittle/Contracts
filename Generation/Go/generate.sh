#!/bin/bash

VERSION_PATTERN='^([0-9]+)\.[0-9]+\.[0-9]+(-[^\.]+\.[0-9]+)?$'
if [[ -z "$1" ]]; then
    echo "Warning: version not provided - using v0 as major version. This code must not be published!"
    MAJOR_VERSION="0"
elif [[ ! "$1" =~ $VERSION_PATTERN ]]; then
    echo "Error: Could not parse $1 as a semantic version."
    exit 1
else
    MAJOR_VERSION="${BASH_REMATCH[1]}"
fi

clean_directory () {
    if [[ -e "$1" ]]; then
        rm -r "$1"
    fi
    mkdir -p "$1"
}

echo "Adding major version $MAJOR_VERSION in package paths..."
clean_directory "./versioned"
SOURCE_DIRECTORY='../../Source'
PACKAGE_PATTERN='^(option go_package = "go.dolittle.io\/contracts)(\/[^"]*";)$'
find "$SOURCE_DIRECTORY" -name '*.proto' | while read PROTOFILE; do
    if ! egrep -q "$PACKAGE_PATTERN" "$PROTOFILE"; then
        echo "Error: go_package was not found in $PROTOFILE. Will stop to not publish wrong package version."
        exit 1
    fi
    OUTFILE="./versioned/$(realpath --relative-to="$SOURCE_DIRECTORY" "$PROTOFILE")"
    mkdir -p $(dirname "$OUTFILE")
    sed -r "s/$PACKAGE_PATTERN/\1\/v$MAJOR_VERSION\2/g" "./$PROTOFILE" > "$OUTFILE"
    echo "Added major version for $PROTOFILE"
done

echo "Generating Go code..."
clean_directory "./generated"
find ./versioned -name '*.proto' | while read PROTOFILE; do
    protoc  --proto_path=./versioned \
            --go_out=./generated --go_opt=module="go.dolittle.io/contracts/v$MAJOR_VERSION" \
            --go-grpc_out=./generated --go-grpc_opt=module="go.dolittle.io/contracts/v$MAJOR_VERSION" \
            "$PROTOFILE"
    echo "Generated code Go for $PROTOFILE"
done

echo "Initializing Go module and resolving dependencies..."
cd ./generated
go mod init "go.dolittle.io/contracts/v$MAJOR_VERSION"
go mod tidy
go build -v ./...
cd ..
