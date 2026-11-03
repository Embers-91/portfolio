/*
  채널 운영 프로젝트 데이터
  ─────────────────────────
  카드와 "자세히 보기" 창은 아래 내용으로 자동으로 만들어져요.
  - 내용을 고치려면 따옴표 " " 안의 글자만 바꾸면 돼요.
  - 비어 있는 항목( [] 또는 "" )은 화면에 나타나지 않아요.
  - videos: 유튜브 주소에서 v= 뒤의 11자리(영상 ID)와 제목을 넣어요.
  - roles: 그 영상에서 맡은 일 (예: ["기획", "연출"]). 없으면 빼도 돼요.
*/
const PROJECTS = [
  {
    name: "한국석유공사",
    year: "2026",
    role: "유튜브 채널 운영 총괄 (PM)",
    color: ["#1f3b73", "#0f1d3a"],
    summary: "에너지 공기업의 딱딱한 이야기를 '누비' 시리즈로 친근하게 풀어낸 채널",
    mission: "국가 에너지를 책임지는 공기업의 이야기를 대중이 친근하게 즐길 수 있는 콘텐츠로 바꾸는 것. 롱폼 [누비가 간다]·[에너지포커스]와 숏폼 [DJ 누비의 똑똑한 라디오]·[에너가드]로 채널의 얼굴을 만들고, 운영 총괄(PM)로서 연간 KPI에 맞춘 기획·연출과 품질 관리를 책임졌습니다.",
    highlight: "운영 총괄(PM) · 본과업 외 추가 수의계약",
    tags: ["공기업", "채널 운영 PM", "정규 시리즈"],
    channel: "https://www.youtube.com/@Knocpr/featured",
    tasks: [
      "연간 KPI 파악 및 콘텐츠 스케줄링",
      "롱폼 정규 시리즈 [누비가 간다] · [에너지포커스] 기획 및 연출",
      "숏폼 시리즈 [DJ 누비의 똑똑한 라디오] · [에너가드] 기획 및 연출",
      "촬영·편집 제작 일정 관리와 콘텐츠 품질 검수",
      "발주처(홍보 담당 부서) 커뮤니케이션 및 보고"
    ],
    results: [
      "본과업 외 수의계약 진행: 운영 성과와 신뢰를 바탕으로 추가 과업 수주",
      "롱폼·숏폼 정규 시리즈 4종 기획·운영"
    ],
    videos: [
      { id: "PSZursdpG8Y", title: "누비가 간다", roles: ["기획", "연출", "편집"] },
      { id: "CdzUM1V_vKg", title: "에너지포커스", roles: ["기획", "편집"] }
    ],
    shorts: [
      { id: "qfNqG4b-Tp0", title: "DJ 누비의 똑똑한 라디오", roles: ["기획", "편집"] },
      { id: "FBwFw8zt8CQ", title: "에너가드", roles: ["기획", "편집"] },
      { id: "uAJxd9QxwMU", title: "기획영상", roles: ["기획"] }
    ]
  },
  {
    name: "서울시50플러스재단",
    year: "2026",
    role: "유튜브 채널 운영 총괄 (PM)",
    color: ["#1d6b5a", "#0b2f28"],
    summary: "인생 2막을 준비하는 중장년의 고민과 도전을 담은 채널",
    mission: "인생 2막을 준비하는 50+ 세대가 \"내 이야기\"라고 느끼는 채널을 만드는 것. [어쩌다중년]·[마음 상담소] 롱폼과 [다시오피스]·[오공이] 숏폼으로 중장년의 일, 마음, 일상을 담았고, 운영 총괄(PM)로서 기획부터 촬영·편집까지 직접 이끌었습니다.",
    highlight: "운영 총괄(PM) · 3개월 만에 KPI 공정률 40%",
    tags: ["공공재단", "채널 운영 PM", "풀 프로덕션"],
    channel: "https://www.youtube.com/@seoul50plus",
    tasks: [
      "연간 KPI 파악 및 콘텐츠 스케줄링",
      "발주처 전담 커뮤니케이션",
      "기획·연출·촬영·편집 등 제작 전 과정 진행",
      "롱폼 [어쩌다중년] · [마음 상담소], 숏폼 [다시오피스] · [오공이] 시리즈 기획"
    ],
    results: [
      "3개월 만에 KPI 공정률 0% → 40% 달성",
      "본과업 외 수의계약 진행: 운영 성과를 바탕으로 추가 과업 수주"
    ],
    videos: [
      { id: "RJu1yQdCXyg", title: "어쩌다중년" },
      { id: "7yipCjXmhvg", title: "마음 상담소" }
    ],
    shorts: [
      { id: "tMXnVI7G4xo", title: "다시오피스" },
      { id: "OCf_vM8cWwk", title: "오공이" },
      { id: "9F9qDERNj6s", title: "현장스케치" }
    ]
  },
  {
    name: "개인정보보호위원회",
    year: "2025",
    role: "유튜브 채널 운영 총괄 (PM)",
    color: ["#4b2a7a", "#1f1236"],
    summary: "어려운 개인정보 정책을 드라마와 숏폼으로 일상의 언어로 바꾼 채널",
    mission: "어렵고 멀게 느껴지는 개인정보 보호 정책을 국민의 일상 언어로 번역하는 것. 웹드라마, [We will lock you]·[개인정보연대기] 롱폼과 [개인정보를부탁해]·[내정보지킴이] 숏폼으로 \"내 정보는 내가 지킨다\"는 메시지를 전했고, 운영 총괄(PM)로서 6개월 만에 KPI를 100%까지 끌어올렸습니다.",
    highlight: "운영 총괄(PM) · 6개월 만에 KPI 공정률 100%",
    tags: ["정부기관", "채널 운영 PM", "웹드라마"],
    channel: "https://www.youtube.com/@pipc_pr/featured",
    tasks: [
      "연간 KPI 파악 및 콘텐츠 스케줄링",
      "발주처 전담 커뮤니케이션",
      "기획·연출·촬영·편집 등 제작 전 과정 진행",
      "롱폼 [We will lock you] · [개인정보연대기] · 웹드라마, 숏폼 [개인정보를부탁해] · [내정보지킴이] 기획"
    ],
    results: [
      "6개월 만에 KPI 공정률 30% → 100% 달성",
      "본과업 외 수의계약 진행: 운영 성과를 바탕으로 추가 과업 수주"
    ],
    videos: [
      { id: "BQS_ZqDI26k", title: "We will lock you", roles: ["기획", "촬영"] },
      { id: "R5jRe3May3k", title: "개인정보연대기", roles: ["기획", "편집"] },
      { id: "e3mWOMz1WIA", title: "웹드라마", roles: ["기획", "연출", "편집"] }
    ],
    shorts: [
      { id: "5iQj81MiL6U", title: "개인정보를부탁해", roles: ["기획", "편집"] },
      { id: "Qgaw9BwNIDA", title: "내정보지킴이", roles: ["기획", "촬영", "편집"] }
    ]
  },
  {
    name: "신협중앙회",
    year: "2025",
    role: "유튜브 채널 운영 총괄 (PM)",
    color: ["#0d5c8c", "#06263b"],
    summary: "협동조합 금융 신협의 가치를 사람의 이야기로 전한 브랜드 채널",
    mission: "숫자와 상품이 아닌 '사람'으로 신협이라는 브랜드를 기억하게 만드는 것. [CU story]·[스쿨어택] 롱폼 시리즈로 협동조합 금융의 가치와 현장의 이야기를 담았고, 운영 총괄(PM)로서 기획·연출부터 품질 관리까지 책임졌습니다.",
    highlight: "운영 총괄(PM) · 본과업 외 추가 수의계약",
    tags: ["금융", "채널 운영 PM", "브랜드 스토리"],
    channel: "https://www.youtube.com/@nacufok",
    tasks: [
      "연간 KPI 파악 및 콘텐츠 스케줄링",
      "발주처 전담 커뮤니케이션",
      "기획·연출·촬영·편집 등 제작 전 과정 진행",
      "롱폼 [CU story] · [스쿨어택] 시리즈 기획"
    ],
    results: [
      "본과업 외 수의계약 진행: 운영 성과를 바탕으로 추가 과업 수주"
    ],
    videos: [
      { id: "A-jrHSSHYjc", title: "CU story", roles: ["기획", "촬영", "편집"] },
      { id: "m7I_ky8von4", title: "스쿨어택", roles: ["기획", "촬영", "편집"] }
    ]
  },
  {
    name: "한국도박문제예방치유원",
    year: "2024–25",
    role: "유튜브 채널 운영 총괄 (PM)",
    color: ["#8a2a2a", "#3a0f0f"],
    summary: "도박 문제를 경고가 아닌 공감과 재미로 전한 예방 채널",
    mission: "\"도박은 위험하다\"는 경고를 넘어, 시청자가 끝까지 보고 공감하는 예방 콘텐츠를 만드는 것. 정신과 전문의 인터뷰부터 웹드라마, 예능 [단도박예능]·[복면타짜]까지 포맷을 넓혔고, 운영 총괄(PM)로 2년 연속 수주를 이끌었습니다.",
    highlight: "운영 총괄(PM) · 2년 연속 수주",
    tags: ["공공기관", "채널 운영 PM", "예능·웹드라마"],
    channel: "https://www.youtube.com/@1336./featured",
    tasks: [
      "연간 KPI 파악 및 콘텐츠 스케줄링",
      "발주처 전담 커뮤니케이션",
      "기획·연출·촬영·편집 등 제작 전 과정 진행",
      "전문가 인터뷰, 웹드라마, 예능 등 다양한 포맷 기획"
    ],
    results: [
      "운영 총괄을 맡아 2024~2025 연속 수주",
      "본과업 외 수의계약 진행: 운영 성과를 바탕으로 추가 과업 수주"
    ],
    videos: [
      { id: "nceaTtIJ98c", title: "정신과의사가 알려주는 도박", roles: ["기획", "연출", "편집"] },
      { id: "nMufZ8mrG2U", title: "웹드라마", roles: ["기획"] },
      { id: "BGXszy6kr5Y", title: "단도박예능", roles: ["기획", "편집"] },
      { id: "kmFp6bqs_SU", title: "복면타짜", roles: ["기획", "연출", "편집"] }
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
        ${p.videos.length ? `<span class="vbadge">▶ 영상</span>` : ""}
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

  const list = (title, items, cls = "") => items.length ? `<h4>${title}</h4><ul class="${cls}">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "";

  function open(i) {
    const p = PROJECTS[i];
    body.innerHTML = `
      <div class="d-cover" style="background:linear-gradient(160deg, ${p.color[0]}, ${p.color[1]})">
        <span class="pyear">${esc(p.year)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.role)}</p>
      </div>
      <div class="d-content">
        <h4>미션</h4><p class="d-summary">${esc(p.mission || p.summary)}</p>
        ${list("주요 역할", p.tasks)}
        ${list("주요 성과", p.results, "check")}
        ${p.videos.length ? `<h4>${(p.shorts || []).length ? "롱폼" : "관련 영상"}</h4><div class="d-videos">${p.videos.map((v) => `
          <a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">
            <div class="thumb" style="--img:url('https://img.youtube.com/vi/${esc(v.id)}/hqdefault.jpg')"><span class="play">▶</span></div>
            <p>${esc(v.title)}</p>${(v.roles || []).length ? `<div class="vroles">${v.roles.map((r) => `<span>${esc(r)}</span>`).join("")}</div>` : ""}
          </a>`).join("")}</div>` : ""}
        ${(p.shorts || []).length ? `<h4>숏폼</h4><div class="d-shorts">${p.shorts.map((v) => `
          <a href="https://www.youtube.com/shorts/${esc(v.id)}" target="_blank" rel="noopener">
            <div class="thumb" style="--img:url('https://img.youtube.com/vi/${esc(v.id)}/hqdefault.jpg')"><span class="play">▶</span></div>
            <p>${esc(v.title)}</p>${(v.roles || []).length ? `<div class="vroles">${v.roles.map((r) => `<span>${esc(r)}</span>`).join("")}</div>` : ""}
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
