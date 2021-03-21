#!/bin/bash

rm -r ./build-go >/dev/null

MAJOR_VERSION="5"

PATTERN='^(option go_package = "go.dolittle.io\/contracts)(\/[^"]*";)$'

echo "Adding major version $MAJOR_VERSION in package paths..."
mkdir -p ./build-go/versioned
find . -name '*.proto' | while read PROTOFILE; do
    if ! egrep -q "$PATTERN" "$PROTOFILE"; then
        echo "Error: go_package was not found in $PROTOFILE. Will stop to not publish wrong package version."
        exit 1
    fi
    mkdir -p $(dirname "./build-go/versioned/$PROTOFILE")
    sed -r "s/$PATTERN/\1\/v$MAJOR_VERSION\2/g" "./$PROTOFILE" > "./build-go/versioned/$PROTOFILE"
    echo "Added major version for $PROTOFILE"
done

echo "Generating Go code..."
mkdir -p ./build-go/generated
find ./build-go/versioned -name '*.proto' | while read PROTOFILE; do
    protoc  --proto_path=./build-go/versioned/Source \
            --go_out=./build-go/generated --go_opt=module="go.dolittle.io/contracts/v$MAJOR_VERSION" \
            --go-grpc_out=./build-go/generated --go-grpc_opt=module="go.dolittle.io/contracts/v$MAJOR_VERSION" \
            "$PROTOFILE"
    echo "Generated code Go for $PROTOFILE"
done

pushd build-go/generated

echo "Initializing Go module..."
go mod init "go.dolittle.io/contracts/v$MAJOR_VERSION"

echo "Resolving Go dependencies..."
go mod tidy

echo "Ensuring generated Go code compiles builds..."
go build -v ./...

popd