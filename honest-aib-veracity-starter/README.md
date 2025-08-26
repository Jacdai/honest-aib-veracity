# Honest AIB — Veracity Graph (Starter)

This repo holds a too-simple-to-fail veracity pipeline:

- `data/events.jsonl` — append-only JSON Lines
- GitHub Action builds `public/graph.json` and static pages on every push
- GitHub Pages serves `/public`

Quick Start:
1) Put these files in a repo named `honest-aib-veracity` (private).
2) Commit & push to `main`.
3) Enable Pages: Settings → Pages → `main` + `/public`.
4) Add one test JSON line to `data/events.jsonl`, push, open your Pages URL.
