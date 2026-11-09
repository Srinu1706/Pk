
/* PK ENTERTAINMENT — INTERACTIVE 2D SPEAKER VISUALIZER */

(() => {
  "use strict";

  const root = document.getElementById("theater-visualizer");
  if (!root) return;

  const layouts = [
    "5.1", "5.2", "5.1.1", "5.1.2", "5.1.4",
    "5.2.2", "5.2.4",
    "7.1", "7.2", "7.1.2", "7.1.4",
    "7.2.2", "7.2.4"
  ];

  // Coordinates represent a top-down room view.
  const positions = {
    L:   [25, 24],
    C:   [50, 24],
    R:   [75, 24],

    SL:  [12, 58],
    SR:  [88, 58],

    SBL: [8, 88],
    SBR: [92, 88],

    SUB1: [7, 35],
    SUB2: [93, 35],

    TFC: [50, 49],
    TFL: [40, 49],
    TFR: [60, 49],
    TRL: [28, 78],
    TRR: [72, 78]
  };

  const speakerDescriptions = {
    L: "Left front: left-side program and music.",
    C: "Center front: dialogue and on-screen focus.",
    R: "Right front: right-side program and music.",
    SL: "Surround left: ambience and effects.",
    SR: "Surround right: ambience and effects.",
    SBL: "Surround back left: rear-left effects.",
    SBR: "Surround back right: rear-right effects.",
    SUB1: "Subwoofer 1: low-frequency effects.",
    SUB2: "Subwoofer 2: additional bass coverage.",
    TFC: "Top center: overhead effects.",
    TFL: "Top front left: overhead effects.",
    TFR: "Top front right: overhead effects.",
    TRL: "Top rear left: overhead effects.",
    TRR: "Top rear right: overhead effects."
  };

  let current = "5.1";
  let fastMode = false;
  let testTimer = null;

  function getLayout(name) {
    const parts = name.split(".").map(Number);
    const main = parts[0];
    const subs = parts[1] || 0;
    const heights = parts[2] || 0;

    let channels = [];

    if (main === 5) {
      channels = ["L", "C", "R", "SL", "SR"];
    } else if (main === 7) {
      channels = [
        "L", "C", "R",
        "SL", "SR", "SBL", "SBR"
      ];
    }

    if (subs >= 1) channels.push("SUB1");
    if (subs >= 2) channels.push("SUB2");

    if (heights === 1) {
      channels.push("TFC");
    } else if (heights === 2) {
      channels.push("TFL", "TFR");
    }

    if (heights === 4) {
      channels.push("TFL", "TFR", "TRL", "TRR");
    }

    return { main, subs, heights, channels };
  }

  function getGroup(id) {
    if (id.startsWith("SUB")) return "sub";
    if (id.startsWith("T")) return "height";
    return "main";
  }

  function getDisplayName(name) {
    if (name === "5.1") return "Surround 5.1";
    if (name === "7.1") return "Surround 7.1";
    if (name.includes(".2.") || name.endsWith(".2") && name.split(".").length === 3 ||
        name.split(".").length === 3) {
      return "Dolby Atmos " + name;
    }
    return "Surround " + name;
  }

  function getDescription(config) {
    if (config.heights > 0) {
      return `${config.main} main channels, ${config.subs} LFE channel(s), and ${config.heights} overhead channels for immersive three-dimensional sound.`;
    }

    return `${config.main} main channels and ${config.subs} LFE channel(s) for immersive surround sound.`;
  }

  function getBestFor(config) {
    if (config.heights === 4) {
      return "Premium dedicated cinemas and immersive Dolby Atmos installations.";
    }
    if (config.heights === 2) {
      return "Immersive home theaters with overhead sound effects.";
    }
    if (config.main === 7) {
      return "Larger dedicated home theaters and screening rooms.";
    }
    if (config.main === 5) {
      return "Home theaters, screening rooms, and smaller surround installations.";
    }
    return "Compact entertainment rooms, living rooms, and music listening.";
  }

  function speakerHTML(id, index) {
    const [x, y] = positions[id];
    const group = getGroup(id);
    const label = id.startsWith("SUB") ?
      (id === "SUB1" ? "SUB" : "SUB2") : id;

    return `
      <div
        class="tv-speaker ${group} ${fastMode ? "fast" : ""}"
        data-id="${id}"
        style="left:${x}%;top:${y}%;--delay:${index * 90}ms"
        title="${speakerDescriptions[id]}"
        aria-label="${speakerDescriptions[id]}"
      >
        <div class="tv-speaker-body">
          <span class="tv-driver small"></span>
          <span class="tv-driver large"></span>
        </div>
        <div class="tv-speaker-label">${label}</div>
      </div>
    `;
  }

  function listenerHTML() {
    return `
      <div class="tv-listener">
        <div class="tv-listener-icon">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="20" r="15" fill="#dce6ef"/>
            <path d="M6 55 Q32 24 58 55 Z" fill="#dce6ef"/>
          </svg>
        </div>
        LISTENER
      </div>
    `;
  }

  function linesHTML(channels) {
    return `
      <svg class="tv-lines" viewBox="0 0 100 100"
           preserveAspectRatio="none" aria-hidden="true">
        ${channels
          .filter(id => !id.startsWith("SUB"))
          .map(id => {
            const [x, y] = positions[id];
            return `<line x1="50" y1="76"
                          x2="${x}" y2="${y}"/>`;
          }).join("")}
      </svg>
    `;
  }

  function roomHTML(channels) {
    return `
      <div class="tv-viewport">
        <div class="tv-room">
          <div class="tv-screen">SCREEN / STAGE</div>
          ${linesHTML(channels)}
          ${listenerHTML()}
          ${channels.map(speakerHTML).join("")}
        </div>
      </div>
    `;
  }

  function panelHTML(name, config) {
    return `
      <aside class="tv-panel">
        <div class="tv-eyebrow">Speaker Configuration</div>

        <h3>${getDisplayName(name)}</h3>

        <p class="tv-description">
          ${getDescription(config)}
        </p>

        <div class="tv-stats">
          <div class="tv-stat">
            <strong>${config.main}</strong>
            <span>Main / surround channels</span>
          </div>
          <div class="tv-stat">
            <strong>${config.subs}</strong>
            <span>LFE channels</span>
          </div>
          <div class="tv-stat">
            <strong>${config.heights}</strong>
            <span>Overhead channels</span>
          </div>
          <div class="tv-stat">
            <strong>${config.channels.length}</strong>
            <span>Illustrated positions</span>
          </div>
        </div>

        <p class="tv-best">
          <strong>Best for:</strong> ${getBestFor(config)}
        </p>

        <div class="tv-channel-list">
          ${config.channels.map(id => `
            <div class="tv-channel">
              <strong>${id.startsWith("SUB") ? "SUB / LFE" : id}</strong>
              — ${speakerDescriptions[id]}
            </div>
          `).join("")}
        </div>

        <div class="tv-note">
          Conceptual single-listener layout, not a construction plan.
          Actual speaker angles, spacing, acoustic treatment, and
          placement must be calibrated for the room.
        </div>
      </aside>
    `;
  }

  function tabsHTML() {
    return `
      <div class="tv-tabs" role="group"
           aria-label="Speaker configurations">
        ${layouts.map(name => `
          <button type="button"
            class="tv-tab ${name === current ? "is-active" : ""}"
            data-layout="${name}"
            aria-pressed="${name === current}">
            ${getDisplayName(name)}
          </button>
        `).join("")}
      </div>
    `;
  }

  function render() {
    const config = getLayout(current);

    root.innerHTML = `
      <div class="tv-shell">
        ${tabsHTML()}

        <div class="tv-grid">
          <div class="tv-stage">
            ${roomHTML(config.channels)}

            <div class="tv-legend">
              <span><i class="tv-dot main"></i>Main / surround</span>
              <span><i class="tv-dot sub"></i>Subwoofer</span>
              <span><i class="tv-dot height"></i>Ceiling / overhead</span>
            </div>

            <div class="tv-actions">
              <button type="button"
                class="tv-action primary" data-action="test">
                ▶ Test Speaker Positions
              </button>

              <button type="button"
                class="tv-action" data-action="fast">
                ⚡ Fast mode: ${fastMode ? "on" : "off"}
              </button>
            </div>
          </div>

          ${panelHTML(current, config)}
        </div>
      </div>
    `;
  }

  function clearTest() {
    if (testTimer !== null) {
      clearTimeout(testTimer);
      testTimer = null;
    }

    root.querySelectorAll(".tv-speaker").forEach(el => {
      el.style.filter = "";
    });
  }

  function testSpeakers() {
    clearTest();

    const speakers = Array.from(
      root.querySelectorAll(".tv-speaker")
    );

    let index = 0;

    function next() {
      speakers.forEach(el => {
        el.style.filter = "";
      });

      if (index >= speakers.length) {
        testTimer = null;
        return;
      }

      speakers[index].style.filter =
        "brightness(1.8) drop-shadow(0 0 12px #fd5e88)";

      index++;
      testTimer = setTimeout(next, fastMode ? 180 : 650);
    }

    next();
  }

  root.addEventListener("click", event => {
    const tab = event.target.closest("[data-layout]");

    if (tab) {
      clearTest();
      current = tab.dataset.layout;
      render();
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;

    if (action.dataset.action === "fast") {
      clearTest();
      fastMode = !fastMode;
      render();
    }

    if (action.dataset.action === "test") {
      testSpeakers();
    }
  });

  render();
})();
