---
name: commit
description: Creates conventional commits by analyzing conversation context and staged/unstaged changes (feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert). Use whenever a unit of work is done and a git commit is needed.
---

# Commit Skill

Creates a [conventional commit](https://www.conventionalcommits.org) from the conversation context and current repo changes.

## Convention

`<type>(<scope>): <subject>` — imperative, lowercase, no trailing period, <50 chars.

**Types:**

| Type | Use for |
|------|---------|
| `feat` | New user-facing feature |
| `fix` | Bug fix |
| `docs` | Documentation-only changes |
| `style` | Formatting that doesn't affect behavior |
| `refactor` | Code change that's neither a fix nor a feature |
| `perf` | Performance improvement |
| `test` | Adding or correcting tests |
| `build` | Build system or dependency changes |
| `ci` | CI configuration changes |
| `chore` | Other changes not touching src/test |
| `revert` | Reverting a previous commit |

**Scope:** optional noun for the affected area (e.g. `auth`, `cli`, `api`). Omit when not useful.

**Body:** a single line or short bullets that explain *why*. Use `BREAKING CHANGE:` for breaking changes and `Closes #X` / `Fixes #X` to reference issues.

## Workflow

1. **Review:** `git status` and `git diff`. Include `git diff --staged` if anything is already staged. Note files that are untracked (new) vs modified.
2. **Build the message:** draft `<type>(<scope>): <subject>` plus body from the diff and conversation.
3. **Stage & commit:** `git add -A` (or specific files if changes are unrelated), then commit directly — no confirmation needed:
   ```bash
   git add -A
   git commit -m "type(scope): subject" -m "- bullet
   - bullet"
   ```
4. **Verify:** `git status` and `git log -1 --oneline`. If a mistake, amend with `git commit --amend`.

## Guardrails

- **Nothing staged?** Stop and ask — don't create an empty commit.
- **Mixed/unrelated changes?** Split into separate commits with `git add <paths>`; never fold unrelated work into one commit.
- **Subject too long?** Trim to <50 chars, keep the imperative mood.

## Examples

```bash
git commit -m "feat(auth): add OAuth2 login support" -m "- Integrate Google and GitHub providers
- Implement token refresh flow"
```

```bash
git commit -m "fix(api): resolve null pointer on logout" -m "Add null check before accessing session data."
```