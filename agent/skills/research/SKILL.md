---
name: research
description: Deep-read a codebase area and write detailed findings to research.md
disable-model-invocation: true
user-invocable: true
argument-hint: [area/folder/topic to research]
---

You are performing deep research on a codebase. Your goal is to thoroughly understand the specified area and document your findings.

## Before you begin

If no feature name or output path has been established in this conversation yet, **ask the user to confirm**:
1. A short feature name (used as the directory: `./tmp/plans/<feature-name>/`)

Create the directory `./tmp/plans/<feature-name>/` if it doesn't exist.

## Your task

Read the following area of the codebase in depth: **$ARGUMENTS**

Go through everything — every file, every function, every edge case. Understand:
- How it works and what it does
- All its specificities and intricacies
- How it connects to and interacts with other parts of the system
- Any existing patterns, conventions, or utilities it uses
- Any quirks, gotchas, or non-obvious behaviour

Do NOT skim. Surface-level reading is not acceptable. Read deeply and thoroughly.

## Output

Write a detailed report of your learnings and findings to `./tmp/plans/<feature-name>/research.md`. The report should be comprehensive enough that someone unfamiliar with this part of the codebase could understand it fully.

## Guards

- Do NOT plan any changes
- Do NOT implement anything
- Do NOT write or modify any code
- Research and documentation ONLY
