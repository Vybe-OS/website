<script lang="ts">
  import asciiLogo from '#lib/assets/vybeos.txt?raw';
  import { parseAnsiLogo } from '../ansi.js';

  // Source: https://github.com/Vybe-OS/vybeos-branding/blob/main/files/fastfetch/vybeos.txt
  // Keep the downloaded file unchanged, including its spaces and ANSI colors.
  const logo = parseAnsiLogo(asciiLogo);
  const specs = [
    ['OS', 'VybeOS x86_64'],
    ['Host', 'VirtualBox (1.2)'],
    ['Kernel', 'Linux 7.3.6-arch1-1'],
    ['Packages', '527 (pacman)'],
    ['Shell', 'bash 5.3.20'],
    ['WM', 'Sway 1.12 (Wayland)'],
    ['Terminal', 'foot 1.28.0'],
    ['Memory', '464.38 MiB / 3.80 GiB'],
    ['Disk', '4.09 GiB / 7.00 GiB (btrfs)']
  ];
</script>

<section class="fastfetch-terminal" aria-label="VybeOS Fastfetch testing snapshot">
  <div class="titlebar">
    <span class="traffic-lights" aria-hidden="true"><i></i><i></i><i></i></span>
    <span>foot <span class="title-divider" aria-hidden="true">/</span> fastfetch</span>
    <span class="snapshot-tag">Snapshot</span>
  </div>
  <div class="terminal-body">
    <p class="command"><span class="prompt" aria-hidden="true">$</span> fastfetch</p>
    <div class="output">
      <div class="logo-area">
        <pre class="ascii-logo" role="img" aria-label="Official VybeOS ASCII logo">{#each logo as segment}<span style:color={segment.color}>{segment.text}</span>{/each}</pre>
      </div>
      <div class="system-details">
        <p class="system-name">VybeOS <span>/ x86_64</span></p>
        <dl>
          {#each specs as [label, value]}
            <div class="spec-row"><dt>{label}<span aria-hidden="true">:</span></dt><dd>{value}</dd></div>
          {/each}
        </dl>
        <div class="color-palette" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>
    </div>
  </div>
  <p class="snapshot-note">Testing snapshot from VirtualBox. Values are recorded test results, not real-time system information.</p>
</section>

<style>
  .fastfetch-terminal {
    position: relative;
    isolation: isolate;
    container-type: inline-size;
    min-width: 0;
    width: 100%;
    overflow: hidden;
    border: 1px solid #2b3d5e;
    border-radius: 16px;
    background: #0b1220;
    color: #e2e8f0;
    box-shadow: 0 8px 24px #0b122018;
    text-align: left;
    font: 400 0.875rem/1.65 'JetBrains Mono', 'Cascadia Mono', 'DejaVu Sans Mono', monospace;
    letter-spacing: 0;
  }
  .titlebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px 16px;
    border-bottom: 1px solid #27344c;
    background: #111d30;
    color: #b6c6dd;
    font-size: 0.8125rem;
  }
  .traffic-lights { display: flex; gap: 6px; }
  .traffic-lights i { width: 9px; height: 9px; border-radius: 50%; background: #fb7185; }
  .traffic-lights i:nth-child(2) { background: #fbbf24; }
  .traffic-lights i:nth-child(3) { background: #34d399; }
  .title-divider { margin-inline: 5px; color: #7386a3; }
  .snapshot-tag { padding: 2px 8px; border: 1px solid #344866; border-radius: 6px; color: #bed6fa; font-size: 0.75rem; }
  .terminal-body { padding: 20px; }
  .command { margin: 0 0 20px; color: #f1f5ff; }
  .prompt { margin-right: 10px; color: #79c7ff; }
  .output { display: grid; gap: 24px; align-items: center; }
  .logo-area { min-width: 0; container-type: inline-size; }
  .ascii-logo {
    margin: 0 auto;
    width: max-content;
    max-width: 100%;
    padding: 0;
    border: 0;
    background: none;
    white-space: pre;
    overflow-wrap: normal;
    word-break: normal;
    tab-size: 8;
    font-family: 'JetBrains Mono', 'Cascadia Mono', 'DejaVu Sans Mono', monospace;
    font-size: 0.625rem;
    font-size: min(0.625rem, 3.2cqi);
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0;
    font-variant-ligatures: none;
  }
  .system-details { min-width: 0; }
  .system-name { margin: 0 0 14px; padding-bottom: 12px; border-bottom: 1px solid #27344c; font-weight: 600; color: #85c7ff; }
  .system-name span { color: #9aaec9; font-weight: 400; }
  dl { display: grid; gap: 6px; margin: 0; }
  .spec-row { display: grid; grid-template-columns: 8.5ch minmax(0, 1fr); gap: 8px; }
  dt { color: #85c7ff; font-weight: 500; }
  dd { margin: 0; overflow-wrap: anywhere; }
  .color-palette { display: flex; gap: 0; margin-top: 18px; }
  .color-palette i { width: 22px; height: 12px; background: #263754; }
  .color-palette i:first-child { border-radius: 3px 0 0 3px; }
  .color-palette i:nth-child(2) { background: #ef7c8e; }
  .color-palette i:nth-child(3) { background: #8bd5b5; }
  .color-palette i:nth-child(4) { background: #f1cf89; }
  .color-palette i:nth-child(5) { background: #4b9df0; }
  .color-palette i:nth-child(6) { background: #b4a2ed; }
  .color-palette i:nth-child(7) { background: #78c6e8; }
  .color-palette i:last-child { border-radius: 0 3px 3px 0; background: #dce6f4; }
  .snapshot-note { margin: 0; padding: 14px 20px; border-top: 1px solid #27344c; background: #101b2c; color: #a9bbd4; font: 400 0.8125rem/1.65 Inter, sans-serif; }
  @container (min-width: 580px) {
    .output { grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: 24px; }
  }
  @container (max-width: 360px) {
    .terminal-body { padding: 16px 12px; }
    .titlebar { padding: 12px; gap: 8px; }
    .traffic-lights { display: none; }
    .snapshot-note { padding: 12px; }
  }
</style>
