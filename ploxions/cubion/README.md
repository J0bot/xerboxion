# 📦 Cubion

> Distributed modular storage ploxion

**Type:** Ploxion | **Status:** Alpha | **Language:** Rust

## Overview

Cubion implements the Cubion hardware standard in software. Modular, cube-shaped storage units that can be physically plugged together map to distributed storage nodes in software. Every ploxion that needs persistence goes through cubion.

## PLC Contract

```json
{
  "provides": ["storage-api", "cube-db", "sync-protocol", "cubion-link"],
  "requires": ["runtime"],
  "parent_types": ["core"],
  "children_types": ["ploxion"]
}
```

## Getting Started

```bash
git submodule update --init ploxions/cubion
cd ploxions/cubion
cargo build
cargo run
```

## Repository

→ [github.com/J0bot/cubion](https://github.com/J0bot/cubion)
