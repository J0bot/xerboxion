# ⬡ Xerboxion Core

> Core runtime, process manager, IPC bus, and PLC registry

**Type:** Core | **Status:** Alpha | **Language:** Rust

## Overview

Xerboxion Core is the foundation of the entire ecosystem. Every other ploxion or xeri0n runs on top of it. It provides:

- **Runtime** — process lifecycle management for all ploxions
- **IPC Bus** — inter-ploxion communication via typed message passing
- **PLC Registry** — tracks connected ploxions and their manifests
- **Health API** — `GET /health` endpoint for all registered components
- **Process Manager** — spawn, stop, restart individual ploxions

## PLC Contract

```json
{
  "provides": ["runtime", "process-manager", "ipc-bus", "plc-registry", "health-api"],
  "requires": [],
  "parent_types": [],
  "children_types": ["ploxion", "xeri0n"]
}
```

## Getting Started

```bash
# Clone via monorepo submodule
git submodule update --init ploxions/xerboxion-core

# Or clone directly
git clone https://github.com/J0bot/xerboxion-core
cd xerboxion-core
cargo build
cargo run
```

## Repository

→ [github.com/J0bot/xerboxion-core](https://github.com/J0bot/xerboxion-core)
