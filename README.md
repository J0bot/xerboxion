# ⬡ Xerboxion

> Créer le monde dans lequel on veut vivre.

## 🗺️ Ploxion Network — Interactive Visualization

**→ [Open Graph Viewer](./.ploxion-graph/graph-viewer.html)** *(open in browser)*

```bash
npm run graph:view   # open interactive dependency graph
```

The graph shows all ploxions, xeri0ns, and platforms as interconnected nodes — click any node to inspect its capabilities, dependencies, and status.

---

## 📖 Préprint
- [Lire le draft](./paper/README.md)
- [Version PDF du draft](./paper/xerboxion_paper.pdf)

---

## 🏗️ Monorepo Structure

```
xerboxion/
├── ploxions/                   # PL0XI0N components (fractal software bricks)
│   ├── xerboxion-core/         # ⬡ Core runtime (Rust) — foundation of everything
│   ├── xerax/                  # 🧠 Brain-Computer Interface (EEG → thought-commands)
│   ├── cubion/                 # 📦 Distributed storage (Rust)
│   ├── room-map/               # 🗺️  Spatial mapping (TypeScript)
│   ├── xerfarm/                # 🌾 Agriculture & resources (Python)
│   └── galactic-architect/     # 🌌 Universe architecture (TypeScript)
│
├── xeri0ns/                    # XERI0N AI agents
│   ├── swarm-xerboxion/        # 🤖 Multi-agent orchestration
│   └── galactic-jarvis/        # ✨ Galactic AI assistant
│
├── platforms/                  # Platform implementations
│   ├── xerboxion-os/           # 📱 Main OS (Rust/Flutter)
│   ├── minecraft-os/           # 🎮 Minecraft prototype
│   ├── xerboxion-web/          # 💻 Web frontend
│   └── my_website2/            # 🌐 j0bot.ch portal
│
├── research/                   # Documentation & brain dumps
│   ├── docs/
│   └── braindumps/
│
├── .ploxion-graph/             # 📊 Visualization & registry
│   ├── graph-viewer.html       # ← Interactive graph (open this!)
│   ├── ploxions.json           # Ploxion definitions
│   ├── xeri0ns.json            # Xeri0n definitions
│   └── connections.json        # All cross-project dependencies
│
├── .workspace/
│   └── dependencies.json       # Explicit dependency graph
│
├── package.json                # npm workspaces + dev scripts
├── pnpm-workspace.yaml         # pnpm workspace config
├── Cargo.toml                  # Rust workspace config
├── .gitmodules                 # Git submodule references
└── standards/                  # PLC & PL0XI0N standards
```

---

## ⚡ Developer Commands

```bash
# Clone the monorepo
git clone https://github.com/J0bot/xerboxion
cd xerboxion

# Initialize all submodules (pulls each repo into its folder)
npm run submodule:init

# Open interactive ploxion graph
npm run graph:view

# Start all dev servers
npm run dev:all

# Build all components
npm run build:all

# Verify dependency integrity
npm run deps:check
```

---

## ⬡ PL0XI0N Architecture

Every component in this ecosystem is a **PL0XI0N** — a fractal software brick that:

- **MUST** run standalone (no hard dependencies at startup)
- **MUST** support graceful shutdown (no residual daemon)
- **MUST** expose `GET /health` and `GET /manifest` endpoints
- **NEVER** sends data without explicit consent
- **NEVER** listens when switched off

The **Ploxion Link Contract (PLC)** is the software equivalent of the Cubion hardware standard — a minimal interface contract that, once ratified, is frozen. It declares `provides`, `requires`, `parent_types`, and `children_types`.

See [standards/](./standards/) for the full spec.

---

## Dependency Graph (text)

```
USER (thought via xerax EEG)
  ↓ thought-commands
[xerax] ──────────────────────────────────────────┐
  ↓ PLC v0                                         │
[xerboxion-core] ← foundation for everything       │
  ↓ runtime                                         │
[cubion] ←── storage for all ploxions              │
  ↓ storage-api                                     │
[room-map] ←── spatial awareness                   │
  ↓ spatial-map                                     │
[xerfarm] ←── resource management                  │
  ↓ resource-manager                                │
[galactic-architect] ←── universe topology         │
  ↓ universe-api                                    │
[swarm-xerboxion] ←─────────────────────────────── ┘
  ↓ agent-pool
[galactic-jarvis] ←── top-level AI
  ↓
OUTPUT → xerboxion-os / xerboxion-web / minecraft-os
```

---

## Contribuer
- Discord : [lien](https://discord.gg/HQebyWn5tR)
- HEIG-VD : viens me voir au chillout
- Paper : [paper/README.md](./paper/README.md)
- Standards : [standards/](./standards/)

---

## Projets référencés

| Composant | Repo | Type | Status |
|---|---|---|---|
| xerboxion-core | [J0bot/xerboxion-core](https://github.com/J0bot/xerboxion-core) | Core | Alpha |
| xerax | [J0bot/xerax](https://github.com/J0bot/xerax) | Ploxion | Alpha |
| cubion | [J0bot/cubion](https://github.com/J0bot/cubion) | Ploxion | Alpha |
| room-map | [J0bot/room-map](https://github.com/J0bot/room-map) | Ploxion | Alpha |
| xerfarm | [J0bot/Xerfarm](https://github.com/J0bot/Xerfarm) | Ploxion | Alpha |
| galactic-architect | [J0bot/galactic_architect](https://github.com/J0bot/galactic_architect) | Ploxion | Concept |
| swarm-xerboxion | [J0bot/swarm-xerboxion](https://github.com/J0bot/swarm-xerboxion) | Xeri0n | Alpha |
| galactic-jarvis | [J0bot/galactic-_jarvis](https://github.com/J0bot/galactic-_jarvis) | Xeri0n | Concept |
| xerboxion-os | [J0bot/xerboxion-os](https://github.com/J0bot/xerboxion-os) | Platform | Alpha |
| minecraft-os | [J0bot/minecraft-os](https://github.com/J0bot/minecraft-os) | Platform | Beta |
| xerboxion-web | [J0bot/xerboxion-web](https://github.com/J0bot/xerboxion-web) | Platform | Alpha |
| j0bot.ch | [J0bot/my_website2](https://github.com/J0bot/my_website2) | Platform | Stable |
