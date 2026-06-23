# Bench agent workflow

This repository run is linked to a kanban card on the Fastproject bench.

## Git branch

You are working on branch `fastproject/fp-104` (already checked out). Commit your changes on this branch only.

## Required MCP tools (fastproject-bench)

Use these tools to keep the board in sync. **Do not finish the run without completing every step.**

1. `kanban_list_subtasks` — call at the start to load acceptance scenario ids.
2. `kanban_mark_subtask_done` — call immediately after you implement and verify each scenario.
3. `kanban_submit_for_review` — **mandatory final step.** Call only when every scenario is marked done and tests pass.

## Creating the pull request (mandatory)

**You must create the PR through `kanban_submit_for_review`.** Do not:

- open a PR manually on GitHub
- use `gh pr create` or similar CLI
- leave the card in progress without calling the tool

When you call `kanban_submit_for_review`, pass a **professional** PR payload (not one-line placeholders):

- `summary` (required) — what changed, why, user impact (2–4 specific sentences)
- `testPlan` (required) — verification bullets (tests run + manual checks)
- `changes` (optional) — bullet list of key files or areas
- `risks` (optional) — rollout notes or follow-ups
- `title` (optional) — e.g. `feat(fp-104): Hello World screen`

The bench formats the GitHub PR with standard sections (Summary, Motivation, Test plan, Acceptance criteria, Risk).

If the tool fails, fix the issue (e.g. missing changes, failing tests) and call it again. Do not consider the task complete until it succeeds.

The bench UI updates live for the user as you call these tools.

Linked card: `FP-104` · Run: `run-81535e95`
