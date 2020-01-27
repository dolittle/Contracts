# Runtime Contracts

[![Build Status](https://dolittle.visualstudio.com/Dolittle%20open-source%20repositories/_apis/build/status/dolittle-runtime.Contracts?branchName=master)](https://dolittle.visualstudio.com/Dolittle%20open-source%20repositories/_build/latest?definitionId=70&branchName=master)

The Dolittle Runtime exposes an API surface that enables one to interact with
it from different perspectives. Within the API you'll find different aspects
being covered.

The Runtime contracts are maintained independently from its runtime implementation
and any possible wrappers, such as Software Developer Kits built on top of this.

## Cloning

This repository has sub modules, clone it with:

```shell
$ git clone --recursive <repository url>
```

If you've already cloned it, you can get the submodules by doing the following:

```shell
$ git submodule update --init --recursive
```
