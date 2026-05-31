# Phonostack Local Runbook

Phonostack is a local-first app that stores project state on the user's machine and uses provider keys configured by the user. The public repository is intended for people to download and run locally; it does not require deployment.

## Local Development

```bash
npm install
npm run dev:local
```

Open the local URL printed by Next.js. The dashboard runs as a local workspace.

## Local Workspace

The app writes local project state under `.phonostack/` in the workspace root, or under `PHONOSTACK_WORKSPACE_ROOT` when that environment variable is set.

```text
.phonostack/
  workspace.json
  provider-settings.json
  local-db.json
  library.json
  storage/
  cache/
  exports/
```

`.phonostack/` can contain local metadata, paths, generated material and provider settings.

## Provider Keys

Users should add their own ElevenLabs key in `Settings -> Providers` only if they want live provider calls. The `ELEVENLABS_API_KEY` environment variable is available for local development.

Image-to-sound model calls require the user's own `GEMINI_API_KEY`. The optional supervisor agent must be created and configured by the user in their own ElevenLabs dashboard, including any LLM/model choice for that agent.

The local-first app does not include shared provider keys, agent IDs tied to private workspaces, LLM credentials, webhook secrets, or service credentials.

## Verification

Run the local checks before sharing changes:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```
