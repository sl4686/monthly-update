/* Business Snapshot dashboard — embedded-data build.
 * Data below was parsed from the Monthly Business Snapshot workbook.
 * To refresh: replace EMBEDDED with a new export (or ask Claude to regenerate).
 */

(function () {
  "use strict";

  const EMBEDDED = {"months": ["2025-12-31", "2026-01-31", "2026-02-28", "2026-03-31", "2026-04-30", "2026-05-31", "2026-06-30", "2026-07-31", "2026-08-31"], "closed": {"label": "Closed CARR", "items": [{"name": "August", "value": 1006102}, {"name": "Q3 Plan", "value": 4670359.0}, {"name": "% of Plan", "value": 0.2154228401}]}, "sections": [{"title": "CARR", "metrics": [{"label": "Impressions", "note": null, "values": [23360383.0, 23517603.0, 23375593.0, 22112460.0, 22139510.0, 22205050.0, 22846288.0, 22936402.0, 23657182.0], "plan": 28745345.0, "varr": -5088163, "isGroup": false}, {"label": "Reporting", "note": null, "values": [9338198.0, 9338198.0, 9479198.0, 10621073.0, 11630513.0, 11630513.0, 15339673.0, 15523273.0, 15649814.0], "plan": 15037677.0, "varr": 612137, "isGroup": false}, {"label": "Other", "note": null, "values": [3403760.0, 3403760.0, 3403760.0, 3578760.0, 3578760.0, 3578760.0, 3578760.0, 3578760.0, 3719760.0], "plan": 4507576.0, "varr": -787816, "isGroup": false}, {"label": "Total CARR", "note": null, "values": [36102341, 36259561, 36258551, 36312293, 37348783, 37414323, 41764721, 42038435, 43026756], "plan": 48290598, "varr": -5263842, "isGroup": false}, {"label": "YTD Growth (%)", "note": null, "values": [null, 0.004354842252, 0.004326866227, 0.005815467756, 0.03452524034, 0.03634063509, 0.1568424607, 0.1644240743, 0.1917996121], "plan": null, "varr": null, "isGroup": false}]}, {"title": "Market Share & Product Usage", "metrics": [{"label": "Contracted Reports", "note": null, "values": [31682000.0, 32507000.0, 32777000.0, 36161950.0, 38604880.0, 38604880.0, 48704699.0, 49456590.0, 49946567.0], "plan": null, "varr": null, "isGroup": false}, {"label": "$ Price / Report", "note": null, "values": [0.2947477432, 0.2872672963, 0.2892027336, 0.2937085251, 0.3012705389, 0.3012705389, 0.3149526291, 0.3138767351, 0.3133311244], "plan": null, "varr": null, "isGroup": false}, {"label": "% of Market", "note": null, "values": [0.07822716049, 0.08026419753, 0.0809308642, 0.08928876543, 0.09532069136, 0.09532069136, 0.120258516, 0.122115037, 0.1233248568], "plan": null, "varr": null, "isGroup": false}, {"label": "Live Reports", "note": null, "values": [null, null, null, null, null, null, null, null, null], "plan": null, "varr": null, "isGroup": false}, {"label": "% of Market", "note": null, "values": [null, null, null, null, null, null, null, null, null], "plan": null, "varr": null, "isGroup": false}, {"label": "Reports Generated", "note": null, "values": [null, null, null, null, null, null, null, null, null], "plan": null, "varr": null, "isGroup": false}, {"label": "% of Live Reports", "note": null, "values": [null, null, null, null, null, null, null, null, null], "plan": null, "varr": null, "isGroup": false}]}, {"title": "Net CARR", "metrics": [{"label": "Gross CARR", "isGroup": true, "values": [], "plan": null, "varr": null, "note": null}, {"label": "Impressions", "note": null, "values": [791408.0, 157220.0, 153390.0, 367210.0, 203270.0, 97540.0, 682838.0, 90114.0, 738561.0], "plan": 5491619.0, "varr": -3001476, "isGroup": false}, {"label": "Reporting", "note": null, "values": [1626223.0, 0.0, 141000.0, 1141875.0, 1009440.0, 0.0, 3999160.0, 183601.0, 126541.0], "plan": 5940829.0, "varr": 660788, "isGroup": false}, {"label": "Other", "note": null, "values": [125570.0, 0.0, 0.0, 175000.0, 0.0, 0.0, 0.0, 0.0, 141000.0], "plan": 1181588.0, "varr": -865588, "isGroup": false}, {"label": "Total Gross CARR", "note": null, "values": [2543201, 157220, 294390, 1684085, 1212710, 97540, 4681998, 273715, 1006102], "plan": 12614036, "varr": -3206276, "isGroup": false}, {"label": "Churn", "note": null, "values": [-109480.0, 0.0, -295400.0, -1630343.0, -176220.0, -32000.0, -331600.0, 0.0, -17780.0], "plan": -429828.0, "varr": -2053515, "isGroup": false}, {"label": "Total Net CARR", "note": null, "values": [2433721, 157220, -1010, 53742, 1036490, 65540, 4350398, 273715, 988322], "plan": 12184208, "varr": -5259791, "isGroup": false}]}, {"title": "ARR & Go-Lives", "metrics": [{"label": "Impressions", "note": null, "values": [20777795.0, 21319933.0, 21427873.0, 20498940.0, 20899950.0, 20965490.0, 21463340.0, 21654604.0, 21675044.0], "plan": 27940592.0, "varr": -6265548, "isGroup": false}, {"label": "Reporting", "note": null, "values": [1361103.0, 1448103.0, 1572803.0, 2059803.0, 2935103.0, 2935103.0, 3433003.0, 3856503.0, 4608003.0], "plan": 5402381.0, "varr": -794378, "isGroup": false}, {"label": "Other", "note": null, "values": [2349689.0, 2349689.0, 2349689.0, 2349689.0, 2719689.0, 2719689.0, 2719689.0, 2719689.0, 2719689.0], "plan": 3325989.0, "varr": -606300, "isGroup": false}, {"label": "Total ARR", "note": null, "values": [24488587, 25117725, 25350365, 24908432, 26554742, 26620282, 27616032, 28230796, 29002736], "plan": 36668962, "varr": -7666226, "isGroup": false}, {"label": "YTD Growth (%)", "note": null, "values": [0, 0.02569106988, 0.03519100551, 0.01714451716, 0.08437216079, 0.08704850958, 0.1277103085, 0.1528144111, 0.1843368505], "plan": null, "varr": null, "isGroup": false}, {"label": "% ARR to CARR", "note": null, "values": [0.6783102237, 0.6927200525, 0.6991554902, 0.6859504025, 0.7109935014, 0.7114997644, 0.6612286959, 0.6715472638, 0.6740628087], "plan": null, "varr": null, "isGroup": false}, {"label": "Reporting Go-Lives", "note": null, "values": [null, 87000.0, 124700.0, 487000.0, 875300.0, 0.0, 497900.0, 423500.0, 751500.0], "plan": 3654600.0, "varr": -407700, "isGroup": false}, {"label": "% of Reporting CARR Active", "note": null, "values": [0.1457564939, 0.1550730666, 0.1659215263, 0.1939354903, 0.2523622991, 0.2523622991, 0.2237989689, 0.2484336261, 0.2944445857], "plan": null, "varr": null, "isGroup": false}]}, {"title": "Burn & Cash Position", "metrics": [{"label": "Change in Cash", "note": null, "values": [-1634288.96, -4165881, -4331004.08, -3592199.38, -546203.01, -2335414.02, -1249051.73, -1960104.44, -2272914.47], "plan": -22255711.0, "varr": 1802938.87, "isGroup": false}, {"label": "Cash Balance", "note": null, "values": [68013088.13, 63847207.13, 59516203.05, 55924003.67, 55377800.66, 53042386.64, 51793334.91, 49833230.47, 47560316.0], "plan": 45768079.0, "varr": 1792237, "isGroup": false}, {"label": "Runway (T3 Month)", "note": null, "values": [null, null, null, null, null, null, null, 18.0, 17.0], "plan": 17, "varr": null, "isGroup": false}]}]};

  // Executive summary — edit each month. Keep to 2\u20133 short sentences about the latest month.
  const EXEC_SUMMARY = [
    "August was the second-best CARR month of the year \u2014 ~$1.0M gross CARR with minimal churn, lifting Q3 closed CARR to 22% of the $4.7M plan.",
    "Total ARR increased 2.7% MoM to $29.0M (\u2212$7.7M vs plan YTD), with $752k of Reporting go-lives in August and $3.25M YTD.",
    "Burn stayed moderate and cash remains above plan \u2014 $47.6M cash balance and 17 months of runway.",
  ];

  // ---------------------------------------------------------------- helpers

  const $ = (sel) => document.querySelector(sel);

  const MONTH_FMT = new Intl.DateTimeFormat("en-US", { month: "short", year: "2-digit" });
  const fmtMonth = (d) => MONTH_FMT.format(d).replace(" ", " \u2019");
  const isNum = (v) => typeof v === "number" && isFinite(v);

  function metricKind(label) {
    const l = label.toLowerCase();
    if (l.includes("%") || l.includes("growth")) return "pct";
    if (l.includes("runway")) return "months";
    if (l.includes("price")) return "money2";
    if (
      l.includes("carr") || l.includes("arr") || l.includes("cash") ||
      l.includes("churn") || l.includes("burn") || l.includes("go-live")
    ) return "money";
    return "count";
  }

  function fmtMoney(v, decimals) {
    const abs = Math.abs(v);
    const sign = v < 0 ? "\u2212" : "";
    if (abs >= 1e9) return sign + "$" + (abs / 1e9).toFixed(2) + "B";
    if (abs >= 1e6) return sign + "$" + (abs / 1e6).toFixed(2) + "M";
    if (abs >= 1e4) return sign + "$" + (abs / 1e3).toFixed(0) + "k";
    return sign + "$" + abs.toLocaleString("en-US", { minimumFractionDigits: decimals ?? 0, maximumFractionDigits: decimals ?? 0 });
  }

  // Compact count: large unit volumes read in millions
  function fmtCompact(v, decimals = 1) {
    if (!isNum(v)) return "\u2014";
    const abs = Math.abs(v);
    const sign = v < 0 ? "\u2212" : "";
    if (abs >= 1e9) return sign + (abs / 1e9).toFixed(decimals) + "B";
    if (abs >= 1e6) return sign + (abs / 1e6).toFixed(decimals) + "M";
    if (abs >= 1e3) return sign + (abs / 1e3).toFixed(0) + "k";
    return sign + String(abs);
  }

  function fmtValue(v, kind, compactCounts) {
    if (!isNum(v)) return "\u2014";
    switch (kind) {
      case "pct": {
        const pct = Math.abs(v) <= 1.5 ? v * 100 : v;
        return pct.toFixed(1) + "%";
      }
      case "months": return v.toFixed(1) + " mo";
      case "money": return fmtMoney(v);
      case "money2": return fmtMoney(v, 2);
      default:
        return compactCounts && Math.abs(v) >= 1e6
          ? fmtCompact(v)
          : v.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }
  }

  function fmtVar(varr, kind) {
    if (!isNum(varr)) return null;
    if (Math.abs(varr) <= 1) return (varr >= 0 ? "+" : "\u2212") + Math.abs(varr * 100).toFixed(1) + "%";
    const abs = fmtValue(Math.abs(varr), kind);
    return (varr >= 0 ? "+" : "\u2212") + abs.replace(/^\u2212/, "");
  }

  function pctChange(curr, prev) {
    if (!isNum(curr) || !isNum(prev) || prev === 0) return null;
    return ((curr - prev) / Math.abs(prev)) * 100;
  }

  // ------------------------------------------------- fiscal-year flow helpers

  function fiscalStartIdx(months) {
    if (!months.length) return 0;
    const yr = months[months.length - 1].getFullYear();
    const i = months.findIndex((m) => m.getFullYear() === yr);
    return i < 0 ? 0 : i;
  }

  function ytdOf(values, months) {
    const start = fiscalStartIdx(months);
    let run = null;
    for (let i = start; i < values.length; i++) {
      if (isNum(values[i])) run = (run ?? 0) + values[i];
    }
    return run;
  }

  function cumulativeFiscal(values, months) {
    const start = fiscalStartIdx(months);
    let run = 0;
    return values.map((v, i) => {
      if (i < start) return null;
      return isNum(v) ? (run += v) : null;
    });
  }

  // ------------------------------------------------------- model preparation

  const SECTION_RENAMES = {
    "carr": "Total CARR",
    "market share & product usage": "Reporting Market Share",
  };
  const HIDDEN_METRICS = ["live reports", "% of live reports", "check"];
  const FLOW_LABEL = /churn|change in cash|go-lives/i;
  const FLOW_SECTION = /net carr/i;

  function prepare(raw) {
    const model = {
      months: raw.months.map((s) => new Date(s + "T12:00:00")),
      closed: raw.closed || null,
      sections: raw.sections.map((s) => ({
        title: s.title,
        metrics: s.metrics.map((m) => ({
          ...m,
          kind: metricKind(m.label),
          isTotal: /^total\b/i.test(m.label) && !m.isGroup,
        })),
      })),
    };
    model.sections.forEach((s) => {
      const key = s.title.trim().toLowerCase();
      if (SECTION_RENAMES[key]) s.title = SECTION_RENAMES[key];
      const flowSection = FLOW_SECTION.test(s.title);
      const kept = [];
      let prevHidden = false;
      for (const m of s.metrics) {
        const l = (m.label || "").trim().toLowerCase();
        const hide = HIDDEN_METRICS.includes(l) || (l === "% of market" && prevHidden);
        prevHidden = hide;
        if (hide) continue;
        if (m.kind === "count" && /carr|arr|cash|burn/i.test(s.title)) m.kind = "money";
        if (/runway/i.test(m.label)) { m.plan = null; m.varr = null; }
        m.flow = !m.isGroup && (FLOW_LABEL.test(m.label) || (flowSection && m.kind === "money"));
        kept.push(m);
      }
      // Go-Lives reports separately from the ARR block: give it its own subgroup
      const gl = kept.findIndex((m) => /^reporting go-lives/i.test(m.label));
      if (gl > 0 && !kept[gl - 1].isGroup) {
        kept.splice(gl, 0, { label: "Go-Lives", isGroup: true, values: [], plan: null, varr: null, kind: "count" });
      }
      s.metrics = kept;
      s.hasPlan = kept.some((m) => isNum(m.plan) || isNum(m.varr));
      s.hasFlow = kept.some((m) => m.flow);
    });
    return model;
  }

  // ---------------------------------------------------------------- rendering

  const KPI_DEFS = [
    { closed: true },
    { label: "Total CARR" },
    { label: "Total Net CARR", flowYtd: true, display: "Net CARR (YTD)" },
    { label: "Total ARR" },
    { label: "Cash Balance" },
    { label: "Runway (T3 Month)", display: "Runway" },
  ];
  const charts = [];

  function lastTwo(values) {
    const idx = [];
    for (let i = values.length - 1; i >= 0 && idx.length < 2; i--) if (isNum(values[i])) idx.push(i);
    return idx;
  }

  function findMetric(model, label) {
    for (const s of model.sections) {
      const m = s.metrics.find((m) => m.label === label && !m.isGroup);
      if (m) return m;
    }
    return null;
  }

  function chipEl(cls, text) {
    const span = document.createElement("span");
    span.className = "chip " + cls;
    span.textContent = text;
    return span;
  }

  function varianceChips(metric, model, opts = {}) {
    const chips = [];
    const values = metric.values;
    const [li, pi] = lastTwo(values);

    if (!metric.flow && li != null && pi != null) {
      const ch = pctChange(values[li], values[pi]);
      if (ch != null) {
        const cls = Math.abs(ch) < 0.05 ? "chip-flat" : ch > 0 ? "chip-up" : "chip-down";
        chips.push(chipEl(cls, (ch > 0 ? "\u25b2 " : ch < 0 ? "\u25bc " : "") + Math.abs(ch).toFixed(1) + "% MoM"));
      }
    }
    if (metric.flow && !opts.skipYtd) {
      const ytd = ytdOf(values, model.months);
      if (isNum(ytd)) chips.push(chipEl("chip-plan", "YTD " + fmtValue(ytd, metric.kind)));
    }
    if (isNum(metric.plan) && metric.kind !== "pct") {
      chips.push(chipEl("chip-plan", (metric.flow ? "YTD plan " : "Plan ") + fmtValue(metric.plan, metric.kind, true)));
      let varText = fmtVar(metric.varr, metric.kind);
      let good = isNum(metric.varr) ? metric.varr >= 0 : null;
      if (varText == null && metric.plan !== 0) {
        const actual = metric.flow ? ytdOf(values, model.months) : li != null ? values[li] : null;
        if (isNum(actual)) {
          const vp = ((actual - metric.plan) / Math.abs(metric.plan)) * 100;
          varText = (vp >= 0 ? "+" : "\u2212") + Math.abs(vp).toFixed(1) + "%";
          good = vp >= 0;
        }
      }
      if (varText != null) chips.push(chipEl(good ? "chip-up" : "chip-down", varText + " vs plan"));
    }
    return chips;
  }

  function kpiCard(labelText, valueText, asofText, chips) {
    const card = document.createElement("div");
    card.className = "kpi";
    const lab = document.createElement("div");
    lab.className = "kpi-label";
    lab.textContent = labelText;
    const val = document.createElement("div");
    val.className = "kpi-value";
    val.textContent = valueText;
    const asof = document.createElement("div");
    asof.className = "kpi-asof";
    asof.textContent = asofText;
    const meta = document.createElement("div");
    meta.className = "kpi-meta";
    (chips || []).forEach((c) => meta.appendChild(c));
    card.append(lab, val, asof, meta);
    return card;
  }

  function renderKpis(model) {
    const strip = $("#kpiStrip");
    strip.innerHTML = "";
    KPI_DEFS.forEach((def) => {
      if (def.closed) {
        if (!model.closed || !model.closed.items.length) return;
        const items = model.closed.items;
        const byName = (re) => items.find((it) => re.test(it.name || ""));
        const monthItem = byName(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|actual|month/i) || items[0];
        const plan = byName(/plan/i);

        // QTD closed CARR: closed == gross CARR added, so sum Total Gross CARR
        // over the months of the current quarter. Falls back to the sheet's
        // single-month figure if the gross series isn't available.
        let qtd = null;
        const gross = findMetric(model, "Total Gross CARR");
        if (gross) {
          const last = model.months[model.months.length - 1];
          const q = Math.floor(last.getMonth() / 3), y = last.getFullYear();
          let run = null;
          model.months.forEach((mo, i) => {
            if (mo.getFullYear() === y && Math.floor(mo.getMonth() / 3) === q && isNum(gross.values[i])) {
              run = (run ?? 0) + gross.values[i];
            }
          });
          qtd = run;
        }
        const shown = isNum(qtd) ? qtd : monthItem.value;
        const pctVal = plan && isNum(plan.value) && plan.value !== 0 ? shown / plan.value : null;

        const chips = [];
        if (plan) chips.push(chipEl("chip-plan", (plan.name || "Plan") + " " + fmtMoney(plan.value)));
        if (pctVal != null) chips.push(chipEl("chip-plan", (pctVal * 100).toFixed(1) + "% of plan"));
        const card = kpiCard(
          model.closed.label + " (Q3)",
          fmtMoney(shown),
          "QTD" + (model.months.length ? " through " + fmtMonth(model.months[model.months.length - 1]) : ""),
          chips
        );
        // month figure from the sheet as a secondary note in the box
        if (isNum(qtd) && monthItem && isNum(monthItem.value)) {
          const note = document.createElement("div");
          note.className = "kpi-note";
          note.textContent = (monthItem.name || "This month") + " " + fmtMoney(monthItem.value);
          const meta = card.children[card.children.length - 1];
          card.insertBefore(note, meta);
        }
        if (pctVal != null) {
          const bar = document.createElement("div");
          bar.className = "kpi-progress";
          const fill = document.createElement("div");
          fill.className = "kpi-progress-fill";
          fill.style.width = Math.max(0, Math.min(100, pctVal * 100)) + "%";
          bar.appendChild(fill);
          card.insertBefore(bar, card.children[2]);
        }
        strip.appendChild(card);
        return;
      }
      const m = findMetric(model, def.label);
      if (!m) return;
      const [li] = lastTwo(m.values);
      const useYtd = def.flowYtd && m.flow;
      const value = useYtd ? ytdOf(m.values, model.months) : li != null ? m.values[li] : null;
      const asof = li != null ? (useYtd ? "YTD through " : "as of ") + fmtMonth(model.months[li]) : "";
      strip.appendChild(kpiCard(
        def.display || def.label,
        isNum(value) ? fmtValue(value, m.kind, true) : "\u2014",
        asof,
        varianceChips(m, model, { skipYtd: useYtd })
      ));
    });
  }

  function headlineMetric(section) {
    return (
      section.metrics.filter((m) => m.isTotal && m.values.some(isNum)).pop() ||
      section.metrics.find((m) => !m.isGroup && m.values.some(isNum)) ||
      null
    );
  }

  function chartSeries(section) {
    const totals = section.metrics.filter((m) => m.isTotal && m.values.some(isNum));
    if (totals.length) return totals.slice(-2);
    const counts = section.metrics.filter(
      (m) => !m.isGroup && (m.kind === "count" || m.kind === "money") && m.values.some(isNum)
    );
    if (counts.length) return counts.slice(0, 3);
    return section.metrics.filter((m) => !m.isGroup && m.values.some(isNum)).slice(0, 2);
  }

  const SERIES_COLORS = ["#a78bfa", "#60a5fa", "#e8b45a"];
  const C_UP = "#3ddc97", C_DOWN = "#ff7b6b", C_PLAN = "#9aa3c0";
  const MONO = { family: "'IBM Plex Mono', monospace", size: 12 };
  const TICK_COLOR = "#a79fc4", GRID_COLOR = "#2a2344";

  const fmtByKind = (v, k) =>
    k === "pctScaled" ? v.toFixed(1) + "%" : k === "count" ? fmtValue(v, "count", true) : fmtValue(v, k);

  function baseOptions(fmtLeft, fmtRight) {
    const axis = (fmt, extra) => ({
      grid: { color: GRID_COLOR },
      ticks: { font: MONO, color: TICK_COLOR, callback: fmt },
      ...extra,
    });
    const scales = { x: { grid: { display: false }, ticks: { font: MONO, color: TICK_COLOR } }, y: axis(fmtLeft) };
    if (fmtRight) scales.y1 = axis(fmtRight, { position: "right", grid: { drawOnChartArea: false } });
    return {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { labels: { font: MONO, color: TICK_COLOR, boxWidth: 14, boxHeight: 3 } },
        tooltip: {
          backgroundColor: "#231c3b",
          borderColor: "#3d3563",
          borderWidth: 1,
          titleFont: { family: "'Archivo', sans-serif" },
          bodyFont: { family: "'IBM Plex Mono', monospace", size: 12.5 },
          callbacks: { label: (ctx) => " " + ctx.dataset.label + ": " + fmtByKind(ctx.parsed.y, ctx.dataset._kind) },
        },
      },
      scales,
    };
  }

  function dualFlowChart(canvas, labels, barLabel, barData, lineLabel, lineData, plan, planLabel) {
    const money = (v) => fmtMoney(v);
    const datasets = [
      {
        type: "bar", label: barLabel, _kind: "money", data: barData, yAxisID: "y",
        backgroundColor: barData.map((v) => (isNum(v) && v >= 0 ? C_UP + "b3" : C_DOWN + "b3")),
        borderColor: barData.map((v) => (isNum(v) && v >= 0 ? C_UP : C_DOWN)),
        borderWidth: 1, borderRadius: 3, maxBarThickness: 26,
      },
      {
        type: "line", label: lineLabel, _kind: "money", data: lineData, yAxisID: "y1",
        borderColor: "#a78bfa", backgroundColor: "rgba(167,139,250,.15)",
        borderWidth: 2, pointRadius: 2.5, pointBackgroundColor: "#a78bfa", tension: 0.25, spanGaps: true,
      },
    ];
    if (isNum(plan)) {
      datasets.push({
        type: "line", label: planLabel, _kind: "money", data: labels.map(() => plan), yAxisID: "y1",
        borderColor: C_PLAN, borderDash: [6, 5], borderWidth: 1.5, pointRadius: 0, fill: false,
      });
    }
    charts.push(new Chart(canvas, { data: { labels, datasets }, options: baseOptions(money, money) }));
  }

  function renderChart(canvas, model, section) {
    const labels = model.months.map(fmtMonth);
    const find = (re) => section.metrics.find((m) => !m.isGroup && re.test(m.label) && m.values.some(isNum));

    const netTotal = find(/^total\s+net/i);
    if (netTotal && netTotal.flow) {
      dualFlowChart(
        canvas, labels,
        "Net new CARR (monthly)", netTotal.values,
        "Net new CARR (YTD)", cumulativeFiscal(netTotal.values, model.months),
        isNum(netTotal.plan) ? netTotal.plan : null, "YTD plan"
      );
      return;
    }

    // Burn section: show the cash balance trajectory; monthly change stays in the table.
    const cashBal = find(/cash balance/i);
    const series = cashBal ? [cashBal] : chartSeries(section);
    if (!series.length) { canvas.parentElement.remove(); return; }
    const kind = series[0].kind;
    const isMoney = kind === "money" || kind === "money2";

    const datasets = series.map((m, i) => ({
      label: m.label,
      _kind: m.kind === "pct" ? "pctScaled" : m.kind,
      data: m.values.map((v) => (isNum(v) ? (m.kind === "pct" && Math.abs(v) <= 1.5 ? v * 100 : v) : null)),
      borderColor: SERIES_COLORS[i % SERIES_COLORS.length],
      backgroundColor: SERIES_COLORS[i % SERIES_COLORS.length] + "26",
      borderWidth: 2,
      pointRadius: 2.5,
      pointBackgroundColor: SERIES_COLORS[i % SERIES_COLORS.length],
      tension: 0.25,
      fill: series.length === 1,
      spanGaps: true,
    }));

    const head = series[0];
    if (isNum(head.plan) && head.kind !== "pct" && !head.flow) {
      datasets.push({
        label: head.label + " \u00b7 plan",
        _kind: head.kind,
        data: labels.map(() => head.plan),
        borderColor: C_PLAN,
        borderDash: [6, 5],
        borderWidth: 1.5,
        pointRadius: 0,
        fill: false,
      });
    }

    // Axis in $M for money, in M-compact for large counts (market share)
    const fmtTick = (v) =>
      isMoney ? fmtMoney(v) : kind === "pct" ? v.toFixed(0) + "%" : fmtValue(v, "count", true);

    charts.push(new Chart(canvas, {
      type: "line",
      data: { labels, datasets },
      options: baseOptions(fmtTick),
    }));
  }

  function renderTable(wrap, model, section) {
    const table = document.createElement("table");
    table.className = "ledger";
    const hasFlow = section.hasFlow;

    const thead = document.createElement("thead");
    const hr = document.createElement("tr");
    const cells = ["", ...model.months.map(fmtMonth)];
    if (hasFlow) cells.push("YTD / Latest");
    if (section.hasPlan) cells.push(hasFlow ? "Plan (YTD)" : "Plan", "Var");
    cells.forEach((c) => {
      const th = document.createElement("th");
      th.textContent = c;
      if (c.startsWith("YTD") || c.startsWith("Plan")) th.className = "col-plan";
      if (c === "Var") th.className = "col-var";
      hr.appendChild(th);
    });
    thead.appendChild(hr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    section.metrics.forEach((m) => {
      const tr = document.createElement("tr");
      if (m.isGroup) tr.className = "group-row";
      if (m.isTotal) tr.className = "total-row";

      const th = document.createElement("td");
      th.textContent = m.label;
      if (m.note) {
        const flag = document.createElement("span");
        flag.className = "note-flag";
        flag.textContent = "\u24d8";
        flag.title = m.note;
        th.appendChild(flag);
      }
      tr.appendChild(th);

      if (m.isGroup) {
        const td = document.createElement("td");
        td.colSpan = model.months.length + (hasFlow ? 1 : 0) + (section.hasPlan ? 2 : 0);
        tr.appendChild(td);
      } else {
        const [li] = lastTwo(m.values);
        m.values.forEach((v, i) => {
          const td = document.createElement("td");
          td.textContent = fmtValue(v, m.kind);
          if (!isNum(v)) td.className = "empty";
          else if (i === li) td.classList.add("latest");
          tr.appendChild(td);
        });

        // Flow rows: fiscal-YTD sum. Level/percent rows: latest value, so the
        // summary column reads complete for every metric.
        const ytd = m.flow ? ytdOf(m.values, model.months) : li != null ? m.values[li] : null;
        if (hasFlow) {
          const tdYtd = document.createElement("td");
          tdYtd.className = "col-plan" + (isNum(ytd) ? "" : " empty");
          tdYtd.textContent = isNum(ytd) ? fmtValue(ytd, m.kind) : "";
          tr.appendChild(tdYtd);
        }

        if (section.hasPlan) {
          const tdPlan = document.createElement("td");
          tdPlan.className = "col-plan" + (isNum(m.plan) ? "" : " empty");
          tdPlan.textContent = isNum(m.plan) ? fmtValue(m.plan, m.kind) : "";
          tr.appendChild(tdPlan);

          const tdVar = document.createElement("td");
          tdVar.className = "col-var";
          let varText = fmtVar(m.varr, m.kind);
          let good = isNum(m.varr) ? m.varr >= 0 : null;
          if (varText == null && isNum(m.plan) && m.plan !== 0 && m.kind !== "pct") {
            const actual = m.flow ? ytd : li != null ? m.values[li] : null;
            if (isNum(actual)) {
              const pct = ((actual - m.plan) / Math.abs(m.plan)) * 100;
              varText = (pct >= 0 ? "+" : "\u2212") + Math.abs(pct).toFixed(1) + "%";
              good = pct >= 0;
            }
          }
          if (varText != null) {
            tdVar.textContent = varText;
            tdVar.classList.add(good ? "var-up" : "var-down");
          } else {
            tdVar.textContent = "";
            tdVar.classList.add("empty");
          }
          tr.appendChild(tdVar);
        }
      }
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
  }

  function renderSections(model) {
    const host = $("#sections");
    const spine = $("#spine");
    host.innerHTML = "";
    spine.innerHTML = "";
    charts.splice(0).forEach((c) => c.destroy());

    model.sections.forEach((section, i) => {
      const id = "sec-" + i;
      const idx = String(i + 1).padStart(2, "0");

      const a = document.createElement("a");
      a.href = "#" + id;
      a.innerHTML = `<span class="spine-idx">${idx}</span>${section.title}`;
      spine.appendChild(a);

      const panel = document.createElement("section");
      panel.className = "panel";
      panel.id = id;

      const head = document.createElement("div");
      head.className = "panel-head";
      const h = document.createElement("h2");
      h.className = "panel-title";
      h.innerHTML = `<span class="spine-idx-inline">${idx}</span>${section.title}`;
      head.appendChild(h);

      const hm = headlineMetric(section);
      if (hm) {
        const [li] = lastTwo(hm.values);
        const value = hm.flow ? ytdOf(hm.values, model.months) : li != null ? hm.values[li] : null;
        if (isNum(value)) {
          const hlWrap = document.createElement("div");
          hlWrap.className = "panel-headline";
          const v = document.createElement("span");
          v.className = "hl-value";
          v.textContent = fmtValue(value, hm.kind, true);
          const l = document.createElement("span");
          l.className = "hl-label";
          l.textContent = hm.label + (hm.flow ? " \u00b7 YTD" : li != null ? " \u00b7 " + fmtMonth(model.months[li]) : "");
          hlWrap.append(v, l);
          varianceChips(hm, model).forEach((c) => hlWrap.appendChild(c));
          head.appendChild(hlWrap);
        }
      }
      panel.appendChild(head);

      const chartWrap = document.createElement("div");
      chartWrap.className = "panel-chart";
      const canvas = document.createElement("canvas");
      chartWrap.appendChild(canvas);
      panel.appendChild(chartWrap);

      const tableWrap = document.createElement("div");
      tableWrap.className = "table-wrap";
      renderTable(tableWrap, model, section);
      panel.appendChild(tableWrap);

      host.appendChild(panel);
      renderChart(canvas, model, section);
    });

    const links = [...spine.querySelectorAll("a")];
    const panels = [...host.querySelectorAll(".panel")];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    panels.forEach((p) => obs.observe(p));
  }

  function render() {
    const model = prepare(EMBEDDED);
    const span =
      model.months.length ? fmtMonth(model.months[0]) + " \u2013 " + fmtMonth(model.months[model.months.length - 1]) : "";
    $("#periodLabel").textContent = "Monthly Business Snapshot \u00b7 " + span;
    const sum = $("#execSummary");
    if (sum) {
      sum.innerHTML = "";
      const tag = document.createElement("div");
      tag.className = "exec-tag";
      tag.textContent = "Executive Summary \u00b7 " +
        (model.months.length ? fmtMonth(model.months[model.months.length - 1]) : "");
      const ul = document.createElement("ul");
      ul.className = "exec-list";
      EXEC_SUMMARY.forEach((line) => {
        const li = document.createElement("li");
        li.textContent = line;
        ul.appendChild(li);
      });
      sum.append(tag, ul);
    }
    renderKpis(model);
    renderSections(model);
    syncPinnedHeight();
    if (typeof window !== "undefined") window.__snapshot = { model };
  }

  function syncPinnedHeight() {
    const pinned = $("#pinned");
    if (!pinned || typeof pinned.offsetHeight !== "number" || !pinned.offsetHeight) return;
    document.documentElement.style.setProperty("--pinned-h", pinned.offsetHeight + "px");
  }
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("resize", syncPinnedHeight);
  }

  render();
})();
