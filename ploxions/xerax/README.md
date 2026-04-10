# 🧠 Xerax

> Brain-Computer Interface ploxion — EEG → thought-commands

**Type:** Ploxion | **Status:** Alpha | **Language:** Python

## Overview

Xerax is the BCI (Brain-Computer Interface) ploxion. It connects to EEG hardware via BrainFlow, processes neural signals in real time, and translates thought-patterns into typed commands consumed by the rest of the ecosystem.

**Milestones:**
1. Thought-assisted control (EEG augments keyboard/mouse)
2. Full thought control (Xerboxion OS navigated by thought alone)

## PLC Contract

```json
{
  "provides": ["thought-commands", "eeg-stream", "neural-model", "bci-api"],
  "requires": ["runtime"],
  "parent_types": ["core"],
  "children_types": []
}
```

## Getting Started

```bash
git submodule update --init ploxions/xerax
cd ploxions/xerax
pip install -r requirements.txt
python main.py
```

## Repository

→ [github.com/J0bot/xerax](https://github.com/J0bot/xerax)
