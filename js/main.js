
document.addEventListener("DOMContentLoaded", () => {
  // Terminal Typing Animation
  document.querySelectorAll("[data-terminal]").forEach(el => {
    const lines = [
      "npm install codefoundry",
      "starting academy environment...",
      "loading curriculum graph...",
      "compiling developer skills...",
      "SYSTEM READY ✓"
    ];
    let i = 0;
    const out = el.querySelector(".terminal-live");
    if (!out) return;
    const run = () => {
      if (i < lines.length) {
        out.innerHTML += `<div><span class="prompt">$</span> ${lines[i]}</div>`;
        i++;
        setTimeout(run, 550);
      }
    };
    setTimeout(run, 400);
  });

  // Code Challenge Test Runner Simulation
  document.querySelectorAll("[data-run-code]").forEach(btn => {
    btn.addEventListener("click", () => {
      const output = document.querySelector(".terminal-output");
      if (!output) return;
      output.innerHTML = `<span class="prompt">&gt;</span> compiling solution.js...<br><span class="prompt">&gt;</span> running unit test suite (4 tests)...<br><span class="lime">✓ Test 01: Passed [0.8ms]</span><br><span class="lime">✓ Test 02: Passed [1.1ms]</span><br><span class="lime">✓ Test 03: Passed [0.4ms]</span><br><span class="lime">✓ Test 04: Passed [4.2ms]</span><br><br><span class="lime" style="font-weight:700">★ ALL 4 TESTS PASSED (100% SUITE PASS)</span><br><span class="muted">Challenge Completed · Earned +100 XP · Saved to profile</span>`;
      btn.textContent = "PASSED ✓";
      btn.style.background = "#d9ff45";
      btn.style.color = "#000";
    });
  });

  // Category Filter Tabs (Courses & Projects)
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");

      const cards = document.querySelectorAll("[data-category]");
      cards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Challenge Editor Tabs Switching
  const editorTabs = document.querySelectorAll(".editor-tab");
  const editorArea = document.querySelector(".editor");
  if (editorTabs.length && editorArea) {
    const tabContents = {
      solution: `<span class="line"><span class="ln">01</span><span class="muted">/**</span></span>
<span class="line"><span class="ln">02</span><span class="muted">&nbsp;* @param {number[]} arr</span></span>
<span class="line"><span class="ln">03</span><span class="muted">&nbsp;* @returns {number[]}</span></span>
<span class="line"><span class="ln">04</span><span class="muted">&nbsp;*/</span></span>
<span class="line"><span class="ln">05</span><span class="code-accent">function</span> doubleValues(arr) &#123;</span>
<span class="line"><span class="ln">06</span>&nbsp;&nbsp;<span class="code-accent">return</span> arr.<span class="code-accent">map</span>(n =&gt; n * <span class="lime">2</span>);</span>
<span class="line"><span class="ln">07</span>&#125;</span><br>
<span class="line"><span class="ln">08</span><span class="muted">// Export for test runner</span></span>
<span class="line"><span class="ln">09</span>module.exports = &#123; doubleValues &#125;;<span class="cursor"></span>`,
      tests: `<span class="line"><span class="ln">01</span><span class="code-accent">const</span> { doubleValues } = <span class="code-fn">require</span>(<span class="code-str">'./solution'</span>);</span>
<span class="line"><span class="ln">02</span></span>
<span class="line"><span class="ln">03</span><span class="code-fn">describe</span>(<span class="code-str">'doubleValues()'</span>, () => &#123;</span>
<span class="line"><span class="ln">04</span>&nbsp;&nbsp;<span class="code-fn">test</span>(<span class="code-str">'doubles each element'</span>, () => &#123;</span>
<span class="line"><span class="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-fn">expect</span>(doubleValues([1, 2, 3])).<span class="code-fn">toEqual</span>([2, 4, 6]);</span>
<span class="line"><span class="ln">06</span>&nbsp;&nbsp;&#125;);</span>
<span class="line"><span class="ln">07</span>&#125;);</span>`,
      readme: `<span class="line"><span class="ln">01</span><span class="lime"># Array Transformer Challenge</span></span>
<span class="line"><span class="ln">02</span></span>
<span class="line"><span class="ln">03</span>Write a function named <span class="code-accent">doubleValues</span>.</span>
<span class="line"><span class="ln">04</span>Given an array of numbers, return a new array where each value is multiplied by 2.</span>
<span class="line"><span class="ln">05</span></span>
<span class="line"><span class="ln">06</span><span class="muted">Example:</span></span>
<span class="line"><span class="ln">07</span>doubleValues([1, 2, 3]) => [2, 4, 6]</span>`
    };

    editorTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        editorTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const target = tab.getAttribute("data-tab");
        if (tabContents[target]) {
          editorArea.innerHTML = tabContents[target];
        }
      });
    });
  }

  // Sprint Registration & Streak Bonus Button Interactive Toggles
  const sprintBtn = document.getElementById("joinSprintBtn");
  if (sprintBtn) {
    sprintBtn.addEventListener("click", () => {
      sprintBtn.textContent = "REGISTERED ✓";
      sprintBtn.style.background = "#d9ff45";
      sprintBtn.style.color = "#000";
    });
  }

  const claimBonusBtn = document.getElementById("claimBonusBtn");
  if (claimBonusBtn) {
    claimBonusBtn.addEventListener("click", () => {
      claimBonusBtn.textContent = "+500 XP CLAIMED ✓";
      claimBonusBtn.style.background = "#d9ff45";
      claimBonusBtn.style.color = "#000";
    });
  }
});

