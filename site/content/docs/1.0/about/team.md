---
layout: docs
title: Team
description: An overview of the founding team and core contributors to ndb-uikit.
group: about
---

ndb-uikit is maintained by the founding team and a small group of invaluable core contributors, with the massive support and involvement of our community.

{{< team.inline >}}
<div class="list-group mb-3">
  {{- range (index $.Site.Data "core-team") }}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://10.0.224.36:8080/{{ .user }}">
      <img src="/docs/1.0/assets/img/contributers/{{ .path }}" width="32" height="32" class="rounded me-2" loading="lazy" alt="ndb-uikit">
      <span>
        <strong>{{ .name }}</strong> @{{ .user }}
      </span>
    </a>
  {{ end -}}
</div>
{{< /team.inline >}}

Get involved with ndb-uikit development by [opening an issue]({{< param repo >}}/issues/new/choose) or submitting a pull request. Read our [contributing guidelines]({{< param repo >}}/blob/v{{< param current_version >}}/.github/CONTRIBUTING.md) for information on how we develop.
