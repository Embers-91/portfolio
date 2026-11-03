/*
  채널 운영 프로젝트 데이터
  ─────────────────────────
  카드와 "자세히 보기" 창은 아래 내용으로 자동으로 만들어져요.
  - 내용을 고치려면 따옴표 " " 안의 글자만 바꾸면 돼요.
  - 비어 있는 항목( [] 또는 "" )은 화면에 나타나지 않아요.
  - videos: 유튜브 주소에서 v= 뒤의 11자리(영상 ID)와 제목을 넣어요.
*/
const PROJECTS = [
  {
    name: "한국석유공사",
    year: "2026",
    role: "유튜브 채널 콘텐츠 운영 총괄",
    color: ["#1f3b73", "#0f1d3a"],
    summary: "공기업 공식 유튜브 채널의 콘텐츠 운영을 총괄하며 기획과 연출을 맡았습니다.",
    highlight: "운영 총괄 · 기획 · 연출",
    tags: ["공기업", "채널 운영", "기획·연출"],
    channel: "https://www.youtube.com/@Knocpr/featured",
    tasks: ["채널 콘텐츠 운영 총괄", "콘텐츠 기획 및 연출"],
    results: [],
    videos: []
  },
  {
    name: "서울시50플러스재단",
    year: "2026",
    role: "유튜브 채널 콘텐츠 운영 총괄",
    color: ["#1d6b5a", "#0b2f28"],
    summary: "중장년 대상 공공재단 채널을 맡아 기획부터 연출, 촬영, 편집까지 제작 전 과정을 직접 이끌었습니다.",
    highlight: "운영 총괄 · 기획부터 편집까지",
    tags: ["공공재단", "채널 운영", "풀 프로덕션"],
    channel: "https://www.youtube.com/@seoul50plus",
    tasks: ["채널 콘텐츠 운영 총괄", "콘텐츠 기획 및 연출", "촬영 및 편집"],
    results: [],
    videos: []
  },
  {
    name: "개인정보보호위원회",
    year: "2025",
    role: "유튜브 채널 콘텐츠 운영 총괄",
    color: ["#4b2a7a", "#1f1236"],
    summary: "정부 위원회 채널을 운영하며, 어려운 개인정보 이슈를 드라마형 콘텐츠로 풀어냈습니다.",
    highlight: "운영 총괄 · 드라마형 콘텐츠",
    tags: ["정부기관", "드라마", "공익 메시지"],
    channel: "https://www.youtube.com/@pipc_pr/featured",
    tasks: ["채널 콘텐츠 운영 총괄", "드라마형 콘텐츠 기획·제작"],
    results: [],
    videos: [
      { id: "EWGxjGXvF3k", title: "드라마형 콘텐츠" }
    ]
  },
  {
    name: "신협중앙회",
    year: "2025",
    role: "유튜브 채널 콘텐츠 운영 총괄",
    color: ["#0d5c8c", "#06263b"],
    summary: "금융협동조합의 브랜드 이야기를 'CU story' 시리즈로 기획해 채널을 운영했습니다.",
    highlight: "운영 총괄 · 브랜드 스토리",
    tags: ["금융", "브랜드 스토리", "시리즈 기획"],
    channel: "",
    tasks: ["채널 콘텐츠 운영 총괄", "브랜드 스토리 시리즈 CU story 기획·제작"],
    results: [],
    videos: [
      { id: "A-jrHSSHYjc", title: "CU story" }
    ]
  },
  {
    name: "한국도박문제예방치유원",
    year: "2024–25",
    role: "유튜브 채널 콘텐츠 운영 총괄",
    color: ["#8a2a2a", "#3a0f0f"],
    summary: "2년간 공공기관 채널을 맡아 예방·치유 메시지를 꾸준한 콘텐츠로 전달했습니다.",
    highlight: "운영 총괄 · 2년 연속 운영",
    tags: ["공공기관", "장기 운영"],
    channel: "https://www.youtube.com/@1336./featured",
    tasks: ["채널 콘텐츠 운영 총괄"],
    results: [],
    videos: [
      { id: "NNDwemp847U", title: "대표 콘텐츠" }
    ]
  }
];

/* ── 아래는 화면을 그리는 코드예요. 고칠 필요 없어요. ── */
(function () {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const grid = document.getElementById("projects");
  const dlg = document.getElementById("detail");
  const body = document.getElementById("detail-body");
  if (!grid || !dlg) return;

  const cover = (p) => {
    const bg = `linear-gradient(160deg, ${p.color[0]}cc, ${p.color[1]}f2)`;
    const img = p.videos.length ? `, url('https://img.youtube.com/vi/${p.videos[0].id}/hqdefault.jpg') center/cover` : "";
    return `background:${bg}${img}`;
  };

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project">
      <div class="project-cover" style="${cover(p)}">
        ${p.videos.length ? `<span class="vbadge">▶ 영상 ${p.videos.length}</span>` : ""}
        <span class="pyear">${esc(p.year)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.role)}</p>
      </div>
      <div class="project-body">
        <p class="phl">★ ${esc(p.highlight)}</p>
        <p class="pdesc">${esc(p.summary)}</p>
        <div class="ptags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
      <button class="project-foot" data-i="${i}">자세히 보기 <span>→</span></button>
    </article>`).join("");

  const list = (title, items) => items.length ? `<h4>${title}</h4><ul>${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "";

  function open(i) {
    const p = PROJECTS[i];
    body.innerHTML = `
      <div class="d-cover" style="background:linear-gradient(160deg, ${p.color[0]}, ${p.color[1]})">
        <span class="pyear">${esc(p.year)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.role)}</p>
      </div>
      <div class="d-content">
        <p class="d-summary">${esc(p.summary)}</p>
        ${list("담당 업무", p.tasks)}
        ${list("성과", p.results)}
        ${p.videos.length ? `<h4>주요 콘텐츠</h4><div class="d-videos">${p.videos.map((v) => `
          <a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">
            <div class="thumb" style="--img:url('https://img.youtube.com/vi/${esc(v.id)}/hqdefault.jpg')"><span class="play">▶</span></div>
            <p>${esc(v.title)}</p>
          </a>`).join("")}</div>` : ""}
        ${p.channel ? `<a class="d-channel" href="${esc(p.channel)}" target="_blank" rel="noopener">유튜브 채널 바로가기 →</a>` : ""}
      </div>`;
    dlg.showModal();
    dlg.scrollTop = 0;
  }

  grid.addEventListener("click", (e) => {
    const b = e.target.closest(".project-foot");
    if (b) open(+b.dataset.i);
  });
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg || e.target.closest(".d-close")) dlg.close();
  });
})();
