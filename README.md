<h1 align="center"><img src="https://raw.githubusercontent.com/dolittle/Runtime/master/Documentation/dolittle_negativ_horisontal_RGB.svg" alt="Dolittle"></h1>

<h4 align="center">
    <a href="https://dolittle.io">Documentation</a> |
    <a href="https://dolittle.io/docs/tutorials/getting_started/">Tutorial</a> |
    <a href="https://github.com/dolittle/Runtime">Runtime</a> |
    <a href="https://github.com/dolittle/DotNet.SDK">C# SDK</a> |
    <a href="https://github.com/dolittle/JavaScript.SDK">JavaScript SDK</a>
</h4>

---

<p align="center">
    <a href="https://www.nuget.org/packages/Dolittle.Contracts/"><img src="https://img.shields.io/nuget/v/Dolittle.Contracts?label=Dolittle.Contracts&logo=nuget" alt="Latest NuGet package"></a>
    <a href="https://www.npmjs.com/package/@dolittle/contracts"><img src="https://img.shields.io/npm/v/@dolittle/contracts?label=@dolittle/contracts&logo=npm" alt="Latest NPM package"></a>
    <a href="https://www.npmjs.com/package/@dolittle/contracts.web"><img src="https://img.shields.io/npm/v/@dolittle/contracts?label=@dolittle/contracts.web&logo=npm" alt="Latest NPM package"></a>
    <a href="https://pkg.go.dev/go.dolittle.io/contracts"><img src="https://img.shields.io/github/v/tag/dolittle/Go.Contracts?label=go.dolittle.io/contracts&logo=go&sort=semver" alt="Latest Go package"></a>
</p>

Dolittle is a decentralized, distributed, event-driven microservice platform built to harness the power of events.

# Contracts

The Dolittle [Runtime](https://github.com/dolittle/Runtime) exposes an API surface through the Contracts defined in this repository. The SDK's have to implement these contracts to be able to communicate with the Runtime.

The Runtime contracts are maintained independently from its runtime implementation and any possible wrappers, such as SDKs built on top of this.

# Packages released from this repository

| Platform                  | Contracts                                                                                                                                                                                                  |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DotNet                    | <a href="https://www.nuget.org/packages/Dolittle.Contracts/"><img src="https://img.shields.io/nuget/v/Dolittle.Contracts?label=Dolittle.Contracts&logo=nuget" alt="Latest NuGet package"></a>              |
| JavaScript (for Node)     | <a href="https://www.npmjs.com/package/@dolittle/contracts"><img src="https://img.shields.io/npm/v/@dolittle/contracts?label=@dolittle/contracts&logo=npm" alt="Latest NPM package"></a>                   |
| JavaScript (for browsers) | <a href="https://www.npmjs.com/package/@dolittle/contracts.web"><img src="https://img.shields.io/npm/v/@dolittle/contracts?label=@dolittle/contracts.web&logo=npm" alt="Latest NPM package"></a>           |
| Go                        | <a href="https://pkg.go.dev/go.dolittle.io/contracts"><img src="https://img.shields.io/github/v/tag/dolittle/Go.Contracts?label=go.dolittle.io/contracts&logo=go&sort=semver" alt="Latest Go package"></a> |

# Build
C#:
```shell
cd Generation/CSharp
dotnet build
```

JavaScript (requires Node.JS>=14):
```shell
cd Generation/JavaScript
yarn
yarn build
```

JavaScript.Web (requires Node.JS>=14):
```shell
cd Generation/JavaScript.Web
yarn
yarn build
```

Go:
```shell
cd Generation/Go
./generate.sh
```

# Issues and Contributing
To learn how to contribute please read our [contributing](https://dolittle.io/contributing/) guide
