# Items API

This is an OpenAPI specification of the Items API.
The entry point of the specification is in `src/index.yaml`
Versioned bundles are available in `bundles/`

## 1. Developer Guide

### 1.1 Install development environment

To avoid dependency conflicts across projects, and to reduce variance
between development platforms, we use VS Code devcontainers.

New to VS Code devcontainers? Start here
https://code.visualstudio.com/docs/remote/containers 
and follow its installation instructions. Be sure to install and
configure Git too.

Now download, install, and run this project and its devcontainer as
follows.

1. Navigate to this project on GitLab and select
    `Clone -> Open in your IDE -> Visual Studio Code (HTTPS)`.
2. Select location to store the project.
3. Select "Reopen in container" when option is provided.

### 1.2. Validate specification

```
npm run validate
```

### 1.3. Bundle specification into a single file

```
npm run bundle outfile.yaml
```

For example, when creating a release 0.2.4 ...

```
npm run bundle bundles/items-api.0.2.4.yaml
```
