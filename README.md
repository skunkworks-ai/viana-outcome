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

## Useful Links

* [CVAT README](./README.CVAT.md)
