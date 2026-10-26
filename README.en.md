# DeepSeek Harness RTL: Arabic support

[العربية](README.md) | English | [中文](README.zh.md)

This [community fork of DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) adds right-to-left presentation for Arabic chat. Arabic paragraphs, chat bubbles, the composer, lists, question cards, and numbers mixed with English are handled block by block. English-only text stays left-to-right. The fork does not translate the interface or change model requests.

## For experienced users: quick start

With Git and Docker Compose installed, build and run this fork locally:

```bash
git clone https://github.com/tegolley/deepseek-harness-rtl-arabic.git
cd deepseek-harness-rtl-arabic
bash docker/build-arabic-demo.sh
docker compose -f compose.arabic-demo.yml up -d
docker compose -f compose.arabic-demo.yml logs --tail=30 dsh-arabic-demo
```

Open the `dsh web:` link from the logs on the Docker host. Its access token is private. The demo binds only to `127.0.0.1:49251`. See the [source install steps](docs/arabic-support/INSTALL.en.md#install-from-source) if you prefer Node.js without Docker.

## For beginners: step by step

1. Install Git and Docker Desktop, or Docker Engine with Compose.
2. Open a terminal and run the commands above in order. The build can take several minutes; the tested image was about 5.5GB.
3. Copy the `dsh web:` link printed by the last command into a browser on the same computer.
4. You can inspect the UI without a model key. To get a real reply, configure a model in the UI. Never put the key in GitHub.
5. Try this mixed-direction prompt: `Write a short answer in Arabic and English about Model X. Include the price 123 SAR, version Pro 2, and 45%.`

The [detailed English installation guide](docs/arabic-support/INSTALL.en.md) covers remote hosts, checks, and stopping the container.

## What RTL changes

The fork sets the base direction of each Arabic content block to RTL and isolates it so mixed numbers and English words stay readable. English-only blocks remain LTR. This covers user messages, assistant Markdown, the composer, lists, and review cards. It does not change the actual message text.

## Before and after screenshots

These are the same local visual fixture in the official UI and this fork. The sample reply was seeded locally; no model was called and no API key was used.

### Conversation after opening the UI

| Official upstream, before RTL | Arabic RTL fork |
| --- | --- |
| ![Mixed Arabic and English chat before RTL](docs/arabic-support/screenshots/before-chat-ltr.png) | ![Mixed Arabic and English chat after RTL](docs/arabic-support/screenshots/after-chat-rtl.png) |

## Updates and documentation

`Sync upstream` checks the official repository weekly and opens a review pull request when an update is available. It preserves the Arabic Web app dependency when upstream adds other dependencies to the same package file; other conflicts still require manual review. It never merges upstream changes into `master` automatically. See the [Arabic feature overview](README.ar.md), [agent installation prompt](docs/arabic-support/AGENT_INSTALL_PROMPT.md), [safety notice](SAFETY.md), and [MIT license](LICENSE).

The `npx @deepseek-ai/dsh web` command installs the official upstream package, which does not contain this fork's Arabic support.
