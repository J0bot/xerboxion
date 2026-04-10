#!/usr/bin/env node
/**
 * Xerboxion dependency integrity checker.
 * Verifies that every component's declared `depends_on` entries exist and
 * that there are no circular dependencies.
 *
 * Usage: node scripts/check-deps.js
 */

const fs   = require('fs');
const path = require('path');

const DEPS_FILE = path.join(__dirname, '..', '.workspace', 'dependencies.json');

let registry;
try {
  registry = JSON.parse(fs.readFileSync(DEPS_FILE, 'utf8'));
} catch (e) {
  console.error(`✗ Could not read ${DEPS_FILE}:`, e.message);
  process.exit(1);
}

const { components } = registry;
const ids = new Set(Object.keys(components));
let errors = 0;

// ── 1. Check all declared deps exist ────────────────────────────────
console.log('\n⬡ Xerboxion — Dependency Integrity Check\n');
console.log('  Checking declared dependencies…');
for (const [id, comp] of Object.entries(components)) {
  for (const dep of comp.depends_on || []) {
    if (!ids.has(dep)) {
      console.error(`  ✗ [${id}] depends on unknown component: "${dep}"`);
      errors++;
    }
  }
}

// ── 2. Detect cycles (DFS) ───────────────────────────────────────────
console.log('  Checking for circular dependencies…');
function hasCycle(start, visited = new Set(), stack = new Set()) {
  visited.add(start);
  stack.add(start);
  for (const dep of (components[start]?.depends_on || [])) {
    if (!visited.has(dep)) {
      if (hasCycle(dep, visited, stack)) return true;
    } else if (stack.has(dep)) {
      console.error(`  ✗ Cycle detected: ${start} → ${dep}`);
      return true;
    }
  }
  stack.delete(start);
  return false;
}

for (const id of ids) {
  hasCycle(id);
}

// ── 3. Report ────────────────────────────────────────────────────────
console.log(`\n  Components: ${ids.size}`);
if (errors === 0) {
  console.log('  ✓ All dependencies are valid. No cycles found.\n');
  process.exit(0);
} else {
  console.error(`  ✗ Found ${errors} error(s).\n`);
  process.exit(1);
}
