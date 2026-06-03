---
name: commit
description: Creates conventional commits by analyzing conversation context and staged/unstaged changes. Reviews modified files, confirms scope with the user, and generates appropriate conventional commit messages (feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert).
---

# Commit Skill

Intelligently creates conventional commits by analyzing the conversation context and file changes.

## Usage

Run this skill when asked to commit changes:

```bash
/skill:commit
```

## Workflow

### 1. Gather Context

First, identify what was discussed in the conversation:
- What task was the user working on?
- What files were mentioned or modified?
- Was this a feature, bug fix, refactor, documentation update, etc.?

### 2. Review Changes

Check the repository status to see all modified files:

```bash
# Get a summary of changes
git status

# Review the actual changes
git diff --stat
git diff
```


### 3. Stage Selected Files

Based on the user's choice:

```bash
# If committing all files
git add -A

# If committing only specific files
git add <file1> <file2> ...
```

### 4. Generate Conventional Commit

Analyze the changes and context to determine the commit type and message:

**Commit Types:**
- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes that don't affect code meaning (formatting, semicolons, etc.)
- `refactor` - A code change that neither fixes a bug nor adds a feature
- `perf` - A code change that improves performance
- `test` - Adding or correcting tests
- `build` - Changes to build system or dependencies
- `ci` - Changes to CI configuration
- `chore` - Other changes that don't modify src or test files
- `revert` - Reverts a previous commit

**Commit Structure:**
```
<type>(<scope>): <subject>

<body> - keep brief, use bullet list for changes/fixes

<footer> - optional, refs, closes, BREAKING CHANGE notes
```

**Subject Rules:**
- Use imperative, present tense: "change" not "changed" or "changes"
- Don't capitalize first letter
- No period at the end
- Keep under 50 characters ideally

**Body Rules:**
- Keep brief. Prefer a single line or a short bullet list.
- Bullet list format for listing changes/features/fixes:
  ```
  - Bullet one
  - Bullet two
  - Bullet three
  ```

### 5. Execute Commit

```bash
git commit -m "type(scope): subject" -m "- Bullet one
- Bullet two
- Bullet three"
```

## Examples

### Feature Addition (multi-line body with bullets)
```bash
git commit -m "feat(auth): add OAuth2 login support" -m "- Integrate Google and GitHub OAuth2 providers
- Implement token refresh flow
- Add secure session management"
```

### Bug Fix
```bash
git commit -m "fix(api): resolve null pointer on user logout" -m "Added null check before accessing user session data. Prevents crash when session expires before logout."
```

### Feature with Multiple Changes (bullet list)
```bash
git commit -m "feat(presets): add preset extension with cycle and /preset command" -m "- Introduce preset system for model, thinking, tools, and instructions
- Add --preset CLI flag, /preset command, Ctrl+Shift+U cycling
- Support global ~/.pi/agent/presets.json and project-local .pi/presets.json
- Persist active preset across session turns"
```

### Documentation
```bash
git commit -m "docs(README): update installation instructions" -m "- Clarify Node.js version requirements
- Add troubleshooting section for common setup issues"
```

### Refactor
```bash
git commit -m "refactor(utils): simplify date formatting logic" -m "Replace moment.js with native Intl.DateTimeFormat. Reduces bundle size by 15KB."
```

## Tips

- Always verify the correct scope from project conventions or ask if unclear
- Include "BREAKING CHANGE:" in the body/footer for breaking changes
- Reference issues with `Closes #123`, `Fixes #456`, or `Refs #789`
- For multiple types of changes, consider splitting into separate commits
- If unsure about the type, briefly explain your reasoning in the commit body
