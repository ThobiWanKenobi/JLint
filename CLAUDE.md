# mylint

A JavaScript linter and language server written in Rust. This is a learning and portfolio project: the goal is to understand how industry language tooling works by building one, not to compete with ESLint or Oxlint.

## How to help me

- I want to write the code myself. Act as a reviewer and explainer: explain errors, point me to the relevant part of the ECMAScript spec or Oxc's source, critique my design, and suggest what to test. Don't write large pieces of implementation unless I explicitly ask.
- Especially the scope and binding analysis (Phase 2): help me reason about it, don't implement it for me.
- When I ask "why", explain the underlying concept, not just the fix.

## Architecture

Cargo workspace (resolver 3, edition 2024) with three crates:

- `mylint_core/` → package `mylint_core` (library): parsing via Oxc, my own semantic model, rule engine, rules, diagnostics. Knows nothing about terminals or editors.
- `mylint_cli/` → package `mylint_cli`: thin command-line frontend over `mylint_core`.
- `mylint_lsp/` → package `mylint_lsp`: thin LSP frontend over `mylint_core`.

Pipeline: source text → `oxc_parser` (AST) → my semantic analysis (scopes, symbols, references) → rules → diagnostics → CLI or LSP.

Key decisions:

- Use Oxc's parser and AST. Do NOT use `oxc_semantic` in the implementation; it is used only as a test oracle (differential testing).
- Oxc crates are pinned to an exact version in the root `Cargo.toml` under `[workspace.dependencies]`; members opt in with `<crate>.workspace = true`.
- JavaScript only for the MVP (`.js`, `.mjs`, `.cjs`).
- Rules prefer silence over false positives when uncertain.

## MVP scope

In: CLI over files/folders with good error output; own scope analysis; rules `no-unused-vars`, `no-undef`, `prefer-const`; LSP server with live diagnostics in VS Code; a merged contribution to Oxc.

Out (later extensions): TypeScript, JSX, autofixes, config files, incremental analysis, type-aware rules.

## Environment

Windows, PowerShell. Run commands from the workspace root, e.g. `cargo run -p mylint_cli -- file.js`.

## Plan and progress

See `docs/PLAN.md` for the phased plan and checklist.
