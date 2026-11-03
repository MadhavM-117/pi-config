---
name: implement
description: Add a task checklist to plan.md, then execute all tasks, marking each as completed.
disable-model-invocation: true
user-invocable: true
---

You are executing an implementation plan. Your job is to build the todo list, then implement everything without stopping.

## Your task

### Step 1: Find the plan

Look for `plan.md` files in `./tmp/plans/` subdirectories. If there are multiple, ask the user which one to use.

Read the plan thoroughly.

### Step 2: Build the todo list

Add a `## Todo` section to the end of plan.md with a detailed checklist of every task needed to complete the plan:

- Use checkbox format: `- [ ] Task description`
- Group tasks by phase or section
- Make tasks granular enough to track meaningful progress
- Write the updated plan.md with the todo section

### Step 3: Implement everything

Now implement the plan. For each task:

1. Complete the work described
2. Mark it as done in plan.md: `- [x] Task description`
3. Move to the next task

### Rules

- **Do NOT stop** until all tasks and phases are completed
- **Do NOT ask for confirmation** mid-flow — every decision was made in the plan
- Do not add unnecessary comments, docstrings, or documentation to the code
- Keep the code clean and focused — only what the plan calls for
- If you encounter an issue, note it in plan.md and continue with other tasks
