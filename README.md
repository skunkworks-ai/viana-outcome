# Viana Outcome

Outcome is a fork and a modified version of the open-source CVAT annotation tool.

## Fork

This fork is a technical copy of the source code from the [cvat-ai/cvat](https://github.com/cvat-ai/cvat) repository, which is publicly available. As stated in GitHub's documentation, [forking a public repository results in the new fork also being public, and its visibility cannot be changed to private](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks#about-visibility-of-forks).

> A fork is a new repository that shares code and visibility settings with the upstream repository. All forks of public repositories are public. You cannot change the visibility of a fork.

How this repository was forked:

```shell
$ git clone https://github.com/cvat-ai/cvat.git viana-outcome
$ cd viana-outcome
$ rm -rf .git
$ git init
$ git checkout -b develop  # Using `develop` as the default branch because CVAT uses the same branch name as a default
$ git add -A
$ git commit -m 'Initial commit for Viana Outcome -- a CVAT fork'
$ git remote add origin https://github.com/skunkworks-ai/viana-outcome.git
$ git push -u origin develop
```

This forking strategy was chosen to achieve two main goals: to create a private repository and to make it easier to keep our repository in sync with the upstream repository, cvat-ai/cvat.

## Development

The primary directories that will undergo modifications as part of this project are [`cvat`](https://github.com/skunkworks-ai/viana-outcome/tree/develop/cvat) for the back-end and [`cvat-ui`](https://github.com/skunkworks-ai/viana-outcome/tree/develop/cvat-ui) for the front-end.

### Running locally with Docker

```shell
$ docker compose -f docker-compose.yml -f docker-compose.dev.yaml up --build --detach
```

### Working with `upstream`

This project requires periodic synchronization with the upstream `develop` branch to ensure it remains up-to-date.

```shell
$ git remote add upstream https://github.com/cvat-ai/cvat.git
$ git checkout develop                # we need to sync with upstream `develop` branch
$ git fetch upstream                  # fetch latest changes from upstream
$ git merge upstream/develop          # merge the changes from upstream
# Or use the command below to rebase private repo commits on top of the upstream commits
$ git pull --rebase upstream develop
```

## Deployment

TBA

## Useful Links

* [CVAT README](./README.CVAT.md)
