interface VisaCountryCard {
  id: string;
  flag: string;
  countryName: string;
  visaName: string;
  tagline: string;
  processingMode: string;
  officialCheckDate: string;
  officialSources: Array<{
    label: string;
    url: string;
  }>;
  highlight: string;
  requirements: string[];
  steps: string[];
  reminders: string[];
}

const countries: VisaCountryCard[] = [
  {
    id: 'japan',
    flag: '🇯🇵',
    countryName: '日本',
    visaName: '旅游签证',
    tagline: '更适合先确认是否能走电子签，以及自己所在领区对应的指定旅行社。',
    processingMode:
      '中国大陆居民申请赴日旅游短期签证时，原则上需通过日本驻华使领馆指定旅行社或代办机构提交。符合条件的申请人可办理 30 天内单次电子签证。',
    officialCheckDate: '2026年3月22日',
    officialSources: [
      {
        label: '日本驻华大使馆：电子签证通知',
        url: 'https://www.cn.emb-japan.go.jp/itpr_zh/00_000485_00224.html'
      },
      {
        label: '日本驻青岛总领事馆：签证指南',
        url: 'https://www.qingdao.cn.emb-japan.go.jp/itpr_zh/procedures_and_visa.html'
      },
      {
        label: '日本驻上海总领事馆：指定旅行社说明',
        url: 'https://www.shanghai.cn.emb-japan.go.jp/itpr_ja/11_000001_01946.html'
      }
    ],
    highlight:
      '旅游签的关键不是“自己在线随便填表”，而是先确认办理渠道。赴日旅游签证在中国长期是通过指定旅行社体系受理的。',
    requirements: [
      '先判断你所在领区是否支持你拟申请的旅游签办理路径，优先查看使领馆辖区说明。',
      '若申请 30 天内单次电子签证，要确认自己属于在中国大陆居住、持中国护照的适用对象。',
      '入境日本时，电子签申请人需在联网状态下通过移动端出示 Visa issuance notice，截图、PDF 或打印件都不算正式出示。'
    ],
    steps: [
      '先点开官方签证指南，确认你所在城市归属哪个日本使领馆辖区。',
      '再看对应领区的指定旅行社或代办机构名单，确认受理渠道。',
      '最后根据该渠道最新清单准备护照、申请表、行程和财力等资料，并按旅行社要求递交。'
    ],
    reminders: [
      '日本各领区页面结构不同，具体材料清单可能随领区和签证类型调整。',
      '如果你计划申请多次签证，通常还会涉及收入或资产条件，务必以当前领区清单为准。'
    ]
  },
  {
    id: 'korea',
    flag: '🇰🇷',
    countryName: '韩国',
    visaName: '旅游签证',
    tagline: '重点先看签证种类及材料 PDF，再确认是否必须通过指定代办机构。',
    processingMode:
      '中国公民申请韩国旅游相关签证，材料要求取决于签证种类；韩国驻华使馆 FAQ 明确说明，所有签证原则上都通过本馆指定代办机构递交。',
    officialCheckDate: '2026年3月22日',
    officialSources: [
      {
        label: '韩国驻华大使馆：签证种类及所需材料',
        url: 'https://overseas.mofa.go.kr/cn-zh/brd/m_1201/view.do?itm_seq_1=0&itm_seq_2=0&multi_itm_seq=0&page=1&seq=695439'
      },
      {
        label: '韩国驻华大使馆：常见问题解答',
        url: 'https://overseas.mofa.go.kr/cn-zh/wpge/m_1199/contents.do'
      }
    ],
    highlight:
      '韩国这类签证最容易踩坑的点，是直接套用别人材料包。官方 FAQ 明确说，不同签证种类要求材料不同，而且通常要通过指定代办机构递交。',
    requirements: [
      '先在官方“签证种类及所需材料”中确认自己对应的旅游签类别，而不是笼统按“韩国旅游签”准备。',
      '官方 FAQ 明确写了：所有签证一律通过本馆指定代办机构申请，普通申请人通常不能直接到领事部个人递交。',
      '韩国驻华大使馆 FAQ 列出的中国公民短期单次签证手续费为 280 元人民币，加急费 140 元。'
    ],
    steps: [
      '先打开“签证种类及所需材料”页面，下载并核对最新版 PDF。',
      '再根据 FAQ 查找代办机构和结果查询方式。',
      '准备材料时按签证类别逐项核对，避免把多次签、单次签或特殊便利条件混在一起。'
    ],
    reminders: [
      '韩国签证材料清单更新频率不低，出发前要重新下载一次最新版 PDF。',
      '如果你符合优秀旅行社或特定便利条件，所需材料可能会简化，但必须以官方说明和指定机构口径为准。'
    ]
  },
  {
    id: 'france',
    flag: '🇫🇷',
    countryName: '法国',
    visaName: '申根旅游签证',
    tagline: '先在 France-Visas 走官方向导，再去中国境内 TLScontact 中心预约递交。',
    processingMode:
      '法国短期旅游一般对应短期申根签证。France-Visas 官方站点说明，中国境内递交由 TLScontact 负责接件，签证决定由法国驻华使领馆作出。',
    officialCheckDate: '2026年3月22日',
    officialSources: [
      {
        label: 'France-Visas：中国申请入口',
        url: 'https://www.france-visas.gouv.fr/chine'
      },
      {
        label: 'France-Visas：旅游或私人访问',
        url: 'https://france-visas.gouv.fr/web/france-visas/sejour-touristique-ou-prive'
      },
      {
        label: 'France-Visas：入境法国前须知',
        url: 'https://www.france-visas.gouv.fr/web/france-visas/votre-arrivee-en-france'
      }
    ],
    highlight:
      '法国这类申根旅游签，真正的核心不是先找材料模板，而是先跑官方签证助手。因为具体证明文件会随你的居住地、停留时间和身份而变化。',
    requirements: [
      'France-Visas 说明，旅游停留少于 3 个月通常申请短期签证，并且材料会根据居住地和国籍在签证助手中细化。',
      '官方页面强调，要证明你有足够的旅行资金、住宿安排，以及返回居住地的机票或相应财力。',
      'France-Visas 还要求旅途中具备覆盖医疗、住院、身故和医疗遣返的保险。'
    ],
    steps: [
      '先在 France-Visas 完成签证助手问答，确认签证类型和个性化材料清单。',
      '再通过中国境内 TLScontact 预约递交，并准备生物信息采集。',
      '提交前重点核对资金证明、酒店或住宿说明、往返行程和保险是否覆盖全程。'
    ],
    reminders: [
      'France-Visas 提示，中国境内申请可以最早在出发前 6 个月递交。',
      '短期签处理时长会受材料完整度和补件情况影响，别把机票酒店做成完全无法调整的方案。'
    ]
  }
];

const pageCss = `
:root {
  --bg: #efe8d8;
  --paper: rgba(253, 249, 241, 0.88);
  --paper-strong: #fffdf8;
  --ink: #181512;
  --muted: #645d57;
  --line: rgba(60, 42, 26, 0.12);
  --accent: #0d4c92;
  --accent-2: #d95d39;
  --accent-3: #f0c36b;
  --shadow: 0 28px 70px rgba(59, 39, 22, 0.14);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  color: var(--ink);
  background:
    radial-gradient(circle at 15% 15%, rgba(13, 76, 146, 0.18), transparent 28%),
    radial-gradient(circle at 88% 10%, rgba(217, 93, 57, 0.16), transparent 24%),
    radial-gradient(circle at 50% 120%, rgba(240, 195, 107, 0.22), transparent 32%),
    linear-gradient(180deg, #f8f2e8 0%, #efe8d8 46%, #ebe0cd 100%);
  font-family: "PingFang SC", "Hiragino Sans GB", "Songti SC", "STSong", "Noto Serif CJK SC", serif;
}

body {
  padding: 22px 18px 48px;
}

a {
  color: inherit;
}

.page {
  max-width: 1280px;
  margin: 0 auto;
}

.hero {
  position: relative;
  overflow: hidden;
  border-radius: 36px;
  padding: 36px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.76), rgba(255, 245, 231, 0.92)),
    linear-gradient(120deg, #fff2d8, #fefaf2);
  border: 1px solid rgba(24, 21, 18, 0.07);
  box-shadow: var(--shadow);
}

.hero::before {
  content: "";
  position: absolute;
  inset: auto -120px -120px auto;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(13, 76, 146, 0.24), transparent 72%);
}

.hero::after {
  content: "";
  position: absolute;
  inset: -40px auto auto -90px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(217, 93, 57, 0.18), transparent 72%);
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--accent);
  letter-spacing: 0.18em;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  max-width: 11ch;
  font-size: clamp(38px, 6.6vw, 78px);
  line-height: 0.97;
  letter-spacing: -0.05em;
}

.hero p {
  max-width: 760px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.8;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.tag {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(13, 76, 146, 0.1);
  color: #21384f;
  font-size: 14px;
}

.layout {
  display: grid;
  grid-template-columns: minmax(320px, 420px) minmax(0, 1fr);
  gap: 22px;
  margin-top: 24px;
}

.panel {
  border-radius: 30px;
  padding: 24px;
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.panel h2 {
  margin: 0;
  font-size: 28px;
  line-height: 1.12;
}

.panel-lead {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.75;
}

.country-grid {
  display: grid;
  gap: 14px;
  margin-top: 20px;
}

.country-card {
  position: relative;
  display: grid;
  grid-template-columns: 76px 1fr auto;
  gap: 16px;
  align-items: center;
  width: 100%;
  padding: 18px;
  border: 1px solid rgba(24, 21, 18, 0.08);
  border-radius: 24px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 242, 228, 0.86));
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  text-align: left;
}

.country-card:hover,
.country-card:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(13, 76, 146, 0.28);
  box-shadow: 0 18px 36px rgba(13, 76, 146, 0.12);
  outline: none;
}

.country-card.is-active {
  border-color: rgba(13, 76, 146, 0.4);
  box-shadow: 0 20px 42px rgba(13, 76, 146, 0.16);
}

.flag-badge {
  display: grid;
  place-items: center;
  width: 76px;
  height: 76px;
  border-radius: 22px;
  background: linear-gradient(135deg, #fff6e8, #ffffff);
  border: 1px solid rgba(24, 21, 18, 0.06);
  font-size: 38px;
}

.country-main {
  display: grid;
  gap: 4px;
}

.country-name {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.country-visa {
  color: var(--muted);
  font-size: 14px;
}

.country-arrow {
  color: rgba(13, 76, 146, 0.56);
  font-size: 24px;
}

.enter-link {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #163d67;
  font-size: 14px;
  text-decoration: none;
}

.detail-shell {
  position: relative;
  overflow: hidden;
  min-height: 760px;
  background:
    linear-gradient(145deg, rgba(255, 250, 243, 0.98), rgba(255, 255, 255, 0.9)),
    linear-gradient(135deg, #fff0dd, #fffaf5);
}

.detail-shell::after {
  content: "";
  position: absolute;
  inset: auto auto 24px -60px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(240, 195, 107, 0.28), transparent 72%);
}

.detail-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
}

.detail-title {
  display: flex;
  gap: 16px;
  align-items: center;
}

.detail-flag {
  width: 86px;
  height: 86px;
  display: grid;
  place-items: center;
  border-radius: 26px;
  background: linear-gradient(135deg, #ffffff, #fff4df);
  box-shadow: inset 0 0 0 1px rgba(24, 21, 18, 0.05);
  font-size: 44px;
}

.detail-country {
  margin: 0;
  font-size: clamp(30px, 4vw, 54px);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.detail-visa {
  margin-top: 8px;
  color: var(--accent);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.check-date {
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(13, 76, 146, 0.08);
  color: #294b70;
  font-size: 13px;
}

.intro {
  margin-top: 20px;
  color: var(--muted);
  line-height: 1.85;
  font-size: 17px;
}

.highlight {
  margin-top: 18px;
  padding: 18px 20px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(13, 76, 146, 0.08), rgba(217, 93, 57, 0.09));
  border: 1px solid rgba(13, 76, 146, 0.08);
  line-height: 1.8;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 20px;
}

.detail-card {
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(24, 21, 18, 0.08);
}

.detail-card.full {
  grid-column: 1 / -1;
}

.detail-card h3 {
  margin: 0 0 12px;
  font-size: 20px;
}

.detail-list {
  margin: 0;
  padding-left: 18px;
  color: #2e2925;
  line-height: 1.8;
}

.detail-list li + li {
  margin-top: 8px;
}

.sources {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.source-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(13, 76, 146, 0.12);
  color: #163c68;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.source-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(13, 76, 146, 0.1);
}

.footnote {
  margin-top: 18px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
}

.mini-note {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px dashed rgba(24, 21, 18, 0.12);
  color: var(--muted);
  line-height: 1.75;
  font-size: 14px;
}

@media (max-width: 1080px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .detail-shell {
    min-height: auto;
  }
}

@media (max-width: 720px) {
  body {
    padding: 14px 12px 36px;
  }

  .hero,
  .panel {
    padding: 20px;
    border-radius: 24px;
  }

  .country-card {
    grid-template-columns: 64px 1fr;
  }

  .country-arrow {
    display: none;
  }

  .flag-badge {
    width: 64px;
    height: 64px;
    font-size: 32px;
  }

  .detail-top,
  .detail-title {
    display: grid;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }
}
`;

const pageJs = `
const countries = ${JSON.stringify(countries)};

const cardContainer = document.getElementById('country-grid');
const detailRoot = document.getElementById('detail-root');

function renderCountryCards(activeId) {
  cardContainer.innerHTML = countries.map((country) => {
    const activeClass = country.id === activeId ? 'is-active' : '';
    return \`
      <button class="country-card \${activeClass}" type="button" data-country-id="\${country.id}">
        <div class="flag-badge" aria-hidden="true">\${country.flag}</div>
        <div class="country-main">
          <div class="country-name">\${country.countryName}</div>
          <div class="country-visa">\${country.visaName}</div>
          <a class="enter-link" href="/visa/\${country.id}">进入材料清单页 →</a>
        </div>
        <div class="country-arrow">→</div>
      </button>
    \`;
  }).join('');
}

function renderList(items) {
  return '<ol class="detail-list">' + items.map((item) => '<li>' + item + '</li>').join('') + '</ol>';
}

function renderSources(items) {
  return '<div class="sources">' + items.map((item) => (
    '<a class="source-link" href="' + item.url + '" target="_blank" rel="noreferrer">' +
      '<span>官方入口</span>' +
      '<strong>' + item.label + '</strong>' +
    '</a>'
  )).join('') + '</div>';
}

function renderCountryDetail(countryId) {
  const country = countries.find((item) => item.id === countryId) || countries[0];

  detailRoot.innerHTML = \`
    <div class="detail-top">
      <div class="detail-title">
        <div class="detail-flag" aria-hidden="true">\${country.flag}</div>
        <div>
          <h2 class="detail-country">\${country.countryName}</h2>
          <div class="detail-visa">\${country.visaName}</div>
        </div>
      </div>
      <div class="check-date">官方信息核对日期：\${country.officialCheckDate}</div>
    </div>

    <p class="intro">\${country.tagline}</p>
    <div class="highlight">\${country.highlight}</div>

    <div class="detail-grid">
      <section class="detail-card full">
        <h3>官方办理方式</h3>
        <p class="panel-lead">\${country.processingMode}</p>
      </section>

      <section class="detail-card">
        <h3>你现在最该先确认的要求</h3>
        \${renderList(country.requirements)}
      </section>

      <section class="detail-card">
        <h3>推荐操作顺序</h3>
        \${renderList(country.steps)}
      </section>

      <section class="detail-card full">
        <h3>下一步</h3>
        <p class="panel-lead">如果你已经决定申请这个国家的旅游签证，就进入材料清单页，把当前手头已有材料逐项勾选，再用系统检查缺失项。</p>
        <a class="source-link" href="/visa/\${country.id}">
          <span>进入用户流程</span>
          <strong>打开 \${country.countryName} 材料清单页</strong>
        </a>
      </section>

      <section class="detail-card full">
        <h3>官方入口</h3>
        \${renderSources(country.officialSources)}
      </section>

      <section class="detail-card full">
        <h3>补充提醒</h3>
        \${renderList(country.reminders)}
      </section>
    </div>

    <div class="footnote">
      这不是“网上抄来的万能模板”，而是把官方页面里最影响你准备顺序的关键信息先放到一屏里。真正递交前，仍然应该打开上面的官方入口核对最新版本。
    </div>
  \`;

  renderCountryCards(country.id);
}

cardContainer.addEventListener('click', (event) => {
  const button = event.target.closest('[data-country-id]');
  if (!button) return;
  renderCountryDetail(button.dataset.countryId);
});

renderCountryDetail(countries[0].id);
`;

const pageHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>签证向导首页</title>
    <link rel="stylesheet" href="/app/styles.css" />
  </head>
  <body>
    <main class="page">
      <section class="hero">
        <p class="eyebrow">Visa Application Master</p>
        <h1>先选国家，再看真正该准备什么。</h1>
        <p>
          面向中国公民的旅游签证准备页。先点一个国家，我们把该国官方办理路径、关键要求和官方入口放到你眼前，
          不再让你先掉进一大堆零散攻略和过期资料里。
        </p>
        <div class="hero-tags">
          <div class="tag">简体中文</div>
          <div class="tag">旅游签证场景</div>
          <div class="tag">只展示官方来源优先级最高的信息</div>
        </div>
      </section>

      <section class="layout">
        <aside class="panel">
          <h2>选择目的地</h2>
          <p class="panel-lead">
            点击国旗卡片，右侧会切换为对应国家的旅游签证准备重点。当前先覆盖三个高频目的地，后面我会继续扩国家。
          </p>
          <div id="country-grid" class="country-grid"></div>
          <div class="mini-note">
            页面下方的国家名和官方链接，都优先对齐驻华使领馆或该国官方签证系统。
          </div>
        </aside>

        <section class="panel detail-shell">
          <div id="detail-root"></div>
        </section>
      </section>
    </main>
    <script src="/app/app.js"></script>
  </body>
</html>
`;

export function getOpsDashboardHtml(): string {
  return pageHtml;
}

export function getOpsDashboardCss(): string {
  return pageCss;
}

export function getOpsDashboardJs(): string {
  return pageJs;
}
