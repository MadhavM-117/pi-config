---
name: jj-commit
description: Creates conventional commits in a jj (Jujutsu) repo by describing the working-copy change (@) and starting a new one (feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert). Use instead of the git commit skill when the repo is jj.
---

# jj Commit Skill

Describes the jj working-copy change (``@``) with a conventional message, then opens a fresh empty change. Unlike git there is **no staging area** — edits auto-snapshot into ``@``; `jj describe` writes the message and `jj new` starts the next change.

## Convention

`<type>(<scope>): <subject>` — imperative, lowercase, no trailing period, <50 chars.

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

1. **Review:** `jj st` (current ``@`` change and its files) and `jj diff` on ``@``. Use `jj log` for surrounding context and to confirm the parent is what you expect.
2. **Build the message:** draft `<type>(<scope>): <subject>` plus body from the diff and conversation, then show it to the user.
3. **Describe & confirm:** after approval, write the message to ``@``:
   ```bash
   jj describe -m "type(scope): subject" -m "- bullet
   - bullet"
   ```
4. **Start the next change:** `jj new` begins a fresh empty change for the next unit of work.

## Guardrails

- **Nothing in ``@``?** Stop and ask — describing or `jj new` on an empty change just creates noise.
- **Mixed/unrelated edits?** Because jj auto-snapshots everything into ``@``, separate concerns *before* describing: `jj split` to break up the change, or `jj restore --from @- <paths>` to drop stray files (resets them to the parent state).
- **Wrong last message?** Fix with `jj describe` again, or `jj describe -m ""` to blank it; no need to amend the old change.

## Examples

```bash
jj describe -m "feat(auth): add OAuth2 login support" -m "- Integrate Google and GitHub providers
- Implement token refresh flow"
jj new
```

```bash
jj describe -m "fix(api): resolve null pointer on logout" -m "Add null check before accessing session data."
jj new
```

## Notes

- `jj st` shows tracked/untracked files in ``@``; `jj log` shows neighboring changes.
- The message lives on the change, not in the working tree — describing never modifies files.