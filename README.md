# Pi Coding Agent Configuration
Personal configuration for the [pi coding agent](https://github.com/badlogic/pi-mono).

## Setup on New Device

### 1. Create Authentication File

You'll need an `auth.json` file with your API credentials. This file is gitignored to protect sensitive data.

**Default provider: OpenRouter**

Create `pi/agent/auth.json` with one of the following formats:

```json
{
  "providers": {
    "openrouter": {
      "api_key": "your-openrouter-api-key"
    }
  }
}
```

```json
{
  "providers": {
    "anthropic": {
      "api_key": "your-anthropic-api-key"
    }
  }
}
```

```json
{
  "providers": {
    "openai": {
      "api_key": "your-openai-api-key"
    }
  }
}
```

### 2. Symlink to Pi Config Directory

Pi looks for configuration in `~/.pi/`. Symlink this directory:

```bash
ln -s /path/to/pi ~/.pi
```

Or set the `PI_DIR` environment variable to point to this directory.

## Configuration

- **Default Provider**: OpenRouter
- **Default Model**: openrouter/z-ai/glm-5.3-flash
- **Thinking Level**: high

See `agent/settings.json` for all settings.

## Packages

Installed automatically by pi from the `packages` list in `settings.json`:

- `git:github.com/DietrichGebert/ponytail` — lazy senior dev mode skills (cloned into `agent/git/`, gitignored)

Run `pi` once on a new device to fetch it.

## Extensions

Custom extensions are included in `agent/extensions/`:

- `context-manager.ts` - context management
- `question-tools/` - custom question tools
- `sandbox/` - sandbox extension

## Skills

Custom skills live in `agent/skills/` and load on-demand when their description matches a task:

- `commit` - create conventional commits in git repos
- `jj-commit` - create conventional commits in jj (Jujutsu) repos
- `annotate` - annotate code with explanatory comments
- `implement` - implement from a written plan
- `research` - research a topic before coding
- `write-plan` - write an implementation plan
- `ponytail` and friends - from the ponytail package (see Packages)

Add new skills as a directory with a `SKILL.md` (name + description frontmatter, then instructions).
