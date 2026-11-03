---
name: annotate
description: Address all inline notes and annotations in plan.md and update the document
disable-model-invocation: true
user-invocable: true
---

You are processing inline annotations that the user has added to the plan document.

## Your task

1. Look for `plan.md` files in `./tmp/plans/` subdirectories. If there are multiple, ask the user which one to use.

2. Read the plan document carefully.

3. Find every inline annotation — lines that start with `!>`. These are notes from the user that need to be addressed. They may:
   - Correct an assumption
   - Reject an approach
   - Add a constraint or requirement
   - Provide domain knowledge
   - Redirect an entire section
   - Request removal of something

4. Address each `!>` annotation by updating the surrounding plan content to incorporate the feedback.

5. Remove the `!>` annotation lines once they have been addressed.

6. Write the updated plan back to the same file.

## Guards

- Do NOT implement anything
- Do NOT write or modify any source code
- Update the plan document ONLY
