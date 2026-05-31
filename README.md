# Phonostack

Open-source tools for sound ideas, library organization, stacking, tagging, multiplication, comparison, and listening research.

Phonostack is for working with sonic libraries as material: existing folders of sounds, references, prompt cards, metadata, stacks, tags, listening notes, variants, and exportable datasets. It is a local research and design workspace that can use AI models only when the user brings their own provider keys.

## What It Is For

- Indexing local sound folders and keeping files on your machine.
- Turning filenames, folder structure, tags, sidecars, and notes into promptable metadata.
- Building cue stacks from imported, generated, rendered, or external sounds.
- Organizing sonic ideas into prompt cards, tags, layer roles, comparisons, and export sets.
- Multiplying a reference into variants, round robins, stack layers, DAW handoff folders, and dataset rows.
- Listening, annotating, comparing, and preparing reusable sonic knowledge.
- Calling third-party generation or analysis providers only when you configure your own keys.

The emphasis is local organization and sonic multiplication, with optional model calls controlled by the user.

## Quick Start

```bash
cp .env.example .env.local
npm install
npm run dev:local
```

Open [http://localhost:3000](http://localhost:3000).

The dashboard runs as a local workspace. There is no deployment requirement.

## Local Workspace Model

The target local project layout is:

```text
.phonostack/
  local-db.json
  workspace.json
  provider-settings.json
  library.json
  storage/
    phonostack-sounds/
  cache/
    waveforms/
    analysis/
  exports/
```

External sound folders are referenced in place by default. The current bridge can index a folder from `Settings -> Workspace` or `Library -> Local`, store file references and extracted metadata in `.phonostack/library.json`, and create prompt candidates from filenames, sidecar JSON, CSV/TSV metadata, notes, and audio headers.

## Supported Sound Material

Phonostack aims for broad audio-library compatibility:

- Audio: WAV/BWF, FLAC, AIFF/AIF, MP3, M4A, AAC, OGG, CAF, WebM, MP4 audio.
- Metadata: embedded tags, BWF/iXML, ID3, Vorbis comments, sidecar JSON, CSV, TSV.
- Creative tooling: Reaper `.rpp` projects, cue sheets, DAW handoff folders, Wwise/FMOD/Unity/Unreal manifests.
- Research exports: JSON, JSONL, CSV, Markdown, YAML, dataset folders, benchmark reports, prompt-pair datasets.

## Bring Your Own Keys

Phonostack does not ship with ElevenLabs, Gemini, LLM, or agent credentials.

- ElevenLabs generation, speech, audio isolation, music, and agent features require the user's own ElevenLabs account and API key.
- Image-to-sound analysis requires the user's own Gemini API key if they want live model calls.
- The optional supervisor agent must be created and configured by the user in their own ElevenLabs dashboard. Any LLM/model used by that agent is also user-configured.
- Local organization, tagging, stacking, browsing, prompt-card work, and exports can run without provider keys.

The local provider settings panel writes `.phonostack/provider-settings.json`; `.phonostack/` is ignored by git. Env-key support is available for local development.

## Verification Commands

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```
