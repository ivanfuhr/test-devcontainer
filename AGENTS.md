# Bench agent workflow

This repository run is linked to a kanban card on the Fastproject bench.

## Git branch

You are working on branch `fastproject/fp-100` (already checked out). Commit your changes on this branch only.

## Execution budget (strict)

- Call `kanban_list_subtasks` **once** at the start. Never call it again — the response stays in context.
- Use **at most two** exploration tools (`workspace_list`, `workspace_grep`, `workspace_read`, `file_read`) before your first `file_write`.
- Do not re-read the same file unless you changed it.

## Required MCP tools (fastproject-bench)

Use these tools to keep the board in sync. **Do not finish the run without completing every step.**

1. `kanban_list_subtasks` — call once at the start to load acceptance scenario ids.
2. `kanban_mark_subtask_done` — call **immediately after** you implement and verify **one** scenario, then move on to the next. Do **not** batch-mark every scenario at the end.
3. `kanban_submit_for_review` — **mandatory final step.** Call only when every scenario is marked done and tests pass.

## Incremental board updates

Work **one acceptance scenario at a time**: implement → verify (tests or manual check) → `kanban_mark_subtask_done` for that scenario only → repeat. The bench UI updates live after each mark. Saving all marks for the end makes progress invisible to the user.

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

Linked card: `FP-100` · Run: `run-b3cf154b`
