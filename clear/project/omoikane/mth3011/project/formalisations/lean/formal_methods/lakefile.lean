import Lake
open Lake DSL

package «formal_methods» where
  -- Purely propositional-logic formalisations; no mathlib dependency.
  -- The two theorem files (`FormalMethods/DeductionTheorem.lean` and
  -- `FormalMethods/Glivenko.lean`) use only `List`, `Nat`, and `Prop`
  -- from Lean core, so we keep the build self-contained and fast.

lean_lib «FormalMethods» where

@[default_target]
lean_exe «formal_methods» where
  root := `Main
