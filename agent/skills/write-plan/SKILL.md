---
name: write-plan
description: Write a detailed implementation plan to plan.md based on actual codebase reading
disable-model-invocation: true
user-invocable: true
argument-hint: [feature or change description]
---

You are writing a detailed implementation plan. Write the plan directly to a markdown file.

## Before you begin

If no feature name or output path has been established in this conversation yet, **ask the user to confirm**:
1. A short feature name (used as the directory: `./tmp/plans/<feature-name>/`)

Create the directory `./tmp/plans/<feature-name>/` if it doesn't exist.

## Your task

Write a detailed implementation plan for: **$ARGUMENTS**

### Step 1: Read the codebase

Before proposing anything, read all relevant source files. Base the plan on the actual codebase, not assumptions.

If `./tmp/plans/<feature-name>/research.md` exists, read it and incorporate those findings.

### Step 2: Write the plan

Write a detailed plan to `./tmp/plans/<feature-name>/plan.md` that includes:

- **Approach**: A clear explanation of the implementation strategy
- **Code snippets**: Showing the actual changes to be made
- **File paths**: Every file that will be created or modified
- **Considerations and trade-offs**: Why this approach over alternatives
- **Dependencies**: Any new packages, migrations, or setup needed

The plan should be specific enough that implementation becomes mechanical, not creative.

## Guards

- Do NOT implement anything
- Do NOT write or modify any source code
- Do NOT create any files other than plan.md
- Planning ONLY
