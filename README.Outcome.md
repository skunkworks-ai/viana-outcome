# Viana Outcome

Outcome is a fork and a modified version of the open-source CVAT annotation tool.

## Fork

This fork is a technical copy of the source code from the [cvat-ai/cvat](https://github.com/cvat-ai/cvat) repository, which is publicly available. As stated in GitHub's documentation, [forking a public repository results in the new fork also being public, and its visibility cannot be changed to private](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks#about-visibility-of-forks).

> A fork is a new repository that shares code and visibility settings with the upstream repository. All forks of public repositories are public. You cannot change the visibility of a fork.

How this repository was forked:

```shell
$ git clone https://github.com/cvat-ai/cvat.git --branch=master --depth=1 viana-outcome
$ cd viana-outcome
$ rm -rf .git
$ git init
$ git add -A
$ git commit -m 'Initial commit for Viana Outcome -- a CVAT fork'
$ git remote add origin https://github.com/skunkworks-ai/viana-outcome.git
$ git push -u origin master
```

This forking strategy was chosen to achieve two main goals: to create a private repository and to make it easier to keep our repository in sync with the upstream repository, cvat-ai/cvat.

## Development

The primary directories that will undergo modifications as part of this project are [`cvat`](https://github.com/skunkworks-ai/viana-outcome/tree/develop/cvat) for the back-end and [`cvat-ui`](https://github.com/skunkworks-ai/viana-outcome/tree/develop/cvat-ui) for the front-end.

### Running locally with Docker

```shell
$ docker compose -p cvat -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.outcome.yml up --build --detach
```

### Building the Docker images

Back-end:
```shell
$ docker compose -p cvat -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.outcome.yml build cvat_server
$ docker push <registry>/cvat/server:<version tag>
```

Front-end:
```shell
$ docker compose -p cvat -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.outcome.yml build cvat_ui
$ docker push <registry>/cvat/ui:<version tag>
```

### Working with `upstream`

This project requires periodic synchronization with the upstream `master` branch to ensure it remains up-to-date.

```shell
$ git remote add upstream https://github.com/cvat-ai/cvat.git
$ git checkout master                # we need to sync with upstream `master` branch
$ git fetch upstream                 # fetch latest changes from upstream
$ git merge upstream/master          # merge the changes from upstream
# Or use the command below to rebase private repo commits on top of the upstream commits
$ git pull --rebase upstream master
```

## Deployment

### Git Version Tags

Since this project is based on the open source CVAT project, the Git tags for this project will be prefixed with the `v` character and suffixed with the `+outcome` [build metadata](https://semver.org/#spec-item-10). The reason for this is to differentiate the version tags from the tags used in the upstream CVAT project.

Examples:

1. Pre-release versions: `v1.0.0-alpha+outcome`, `v1.0.0-beta.1+outcome`, `v1.0.0-rc.2+outcome`
2. Release version: `v1.0.0+outcome`

### Image Tags

Unfortunately, image tags don't support the `+*` format i.e. tagging the image `cvat/ui:1.0.0+outcome` will cause the error `ERROR: invalid tag "cvat/ui:1.0.0+outcome": invalid reference format`. To address this error, the [`azure-pipelines.yml`](./azure-pipelines.yml) file has a stage to derive the image tag version by removing the prefix "v" and the "+*" suffix from the tag name. Example, if the Git tag uses is `v1.0.0+outcome` the image tag version will be `1.0.0` so tagging an image like `cvat/ui:1.0.0` will be valid.

### CI Builds

When a Git tag is pushed to remote `origin`, Azure Pipelines will run a CI build if the tag satisfies the condition of set in the trigger section of the YAML file; currently the pattern is set to `v*.*.*+*`. The examples provided in the [Git Version Tags](https://github.com/skunkworks-ai/viana-outcome#git-version-tags) section are all valid tags.

The CI build won't trigger if the tag does not have the `+*` suffix; this will also ensure that if a remote `upstream` tag is pushed to remote `origin`, it will not create an image build.

### Releases

The [Azure Pipelines Releases](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/releases?view=azure-devops) will be used to deploy a pre-release or release version to the corresponding Kubernetes cluster. Just input the [Image Tag](https://github.com/skunkworks-ai/viana-outcome#image-tags) version e.g. `1.0.0-alpha.1` (in the development release pipeline) to trigger a release to the corresponding environment.

> NOTE: Use the image tag format for the version to use in the release pipeline, NOT the Git version tag, as the images used in the deploy will be based on the image tag provided when creating the release.

## Email (SMTP) Django settings

To enable email functionality, the following environment variables need to be set at runtime i.e. when running with Docker Compose or deploying with Helm.

- `DJANGO_SETTINGS_MODULE=cvat.settings.outcome`
    - The `cvat.settings.outcome` settings module uses the [Django SMTP backend](https://docs.djangoproject.com/en/dev/topics/email/#smtp-backend) for emails and need the environment variables below to be set
- `EMAIL_HOST`
- `EMAIL_HOST_USER`
- `EMAIL_HOST_PASSWORD`
- `DEFAULT_FROM_EMAIL`
    - This environment variable may be needed depending on the SMTP host used; for example this is needed when using the [Twilio Sendgrid SMTP server](https://www.twilio.com/en-us/blog/using-twilio-sendgrid-send-emails-python-django)

When running with Docker Compose, copy the `.env.sample` file to `.env` and populate accordingly. When deploying with Helm, define these in the `cvat.backend.server.additionalEnv` section of the override YAML.

## Useful Links

* [CVAT README](./README.md)
