const checklistCss = `
:root {
  --bg: #f4ecdd;
  --ink: #181512;
  --muted: #6a625b;
  --paper: rgba(255, 251, 245, 0.9);
  --line: rgba(24, 21, 18, 0.1);
  --accent: #0d4c92;
  --accent-2: #d95d39;
  --accent-3: #f3c36d;
  --ok: #1f7a53;
  --warn: #b5472e;
  --shadow: 0 26px 56px rgba(56, 39, 24, 0.12);
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at 10% 10%, rgba(13, 76, 146, 0.16), transparent 24%),
    radial-gradient(circle at 88% 14%, rgba(217, 93, 57, 0.14), transparent 22%),
    linear-gradient(180deg, #fbf5eb 0%, #f4ecdd 100%);
  color: var(--ink);
  font-family: "PingFang SC", "Hiragino Sans GB", "Songti SC", "STSong", "Noto Serif CJK SC", serif;
}

body {
  padding: 20px 16px 40px;
}

a { color: inherit; }

.page {
  max-width: 1260px;
  margin: 0 auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 18px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(13, 76, 146, 0.12);
  text-decoration: none;
  color: #21405f;
}

.stamp {
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(13, 76, 146, 0.08);
  color: #2a4e77;
  font-size: 13px;
}

.hero {
  padding: 28px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,245,231,0.9));
  border: 1px solid rgba(24, 21, 18, 0.08);
  box-shadow: var(--shadow);
}

.hero-head {
  display: flex;
  gap: 18px;
  align-items: center;
}

.flag {
  width: 82px;
  height: 82px;
  border-radius: 24px;
  background: linear-gradient(135deg, #fff, #fff3e0);
  display: grid;
  place-items: center;
  font-size: 42px;
}

.hero h1 {
  margin: 0;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.subtitle {
  margin-top: 6px;
  color: var(--accent);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero p {
  margin: 18px 0 0;
  color: var(--muted);
  line-height: 1.85;
  font-size: 17px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.tag {
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(24, 21, 18, 0.08);
  font-size: 14px;
}

.layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
  margin-top: 20px;
}

.card {
  padding: 22px;
  border-radius: 26px;
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.card h2 {
  margin: 0;
  font-size: 26px;
}

.lead {
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.75;
}

.checklist {
  display: grid;
  gap: 14px;
  margin-top: 20px;
}

.item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: start;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid rgba(24, 21, 18, 0.08);
  background: rgba(255,255,255,0.82);
}

.item input {
  margin-top: 4px;
  width: 20px;
  height: 20px;
  accent-color: var(--accent);
}

.item-title {
  font-weight: 700;
  font-size: 17px;
}

.item-note {
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.7;
  font-size: 14px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

button {
  appearance: none;
  border: 0;
  border-radius: 16px;
  padding: 14px 18px;
  background: linear-gradient(135deg, var(--accent), #2e6ab0);
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 16px 30px rgba(13, 76, 146, 0.18);
}

button.secondary {
  background: linear-gradient(135deg, var(--accent-2), #e58854);
}

.panel-stack {
  display: grid;
  gap: 20px;
}

.list {
  margin: 16px 0 0;
  padding-left: 18px;
  line-height: 1.8;
}

.list li + li {
  margin-top: 8px;
}

.sources {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.source {
  display: block;
  padding: 14px 16px;
  border-radius: 18px;
  text-decoration: none;
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(13, 76, 146, 0.1);
}

.source strong {
  display: block;
  color: #193c65;
}

.source span {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-size: 13px;
}

.result {
  margin-top: 18px;
  min-height: 160px;
  padding: 18px;
  border-radius: 20px;
  background: #fffdf8;
  border: 1px solid rgba(24, 21, 18, 0.08);
  white-space: pre-wrap;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow: auto;
}

.status {
  margin-top: 12px;
  min-height: 22px;
  font-weight: 700;
}

.summary {
  margin-top: 16px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(13, 76, 146, 0.06);
  line-height: 1.8;
}

@media (max-width: 960px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .hero, .card { padding: 18px; border-radius: 22px; }
  .hero-head { align-items: start; }
  .flag { width: 68px; height: 68px; font-size: 34px; }
  .topbar { display: grid; }
}
`;

const checklistJs = `
const countryMap = {
  japan: {
    id: 'japan',
    code: 'JP',
    flag: '🇯🇵',
    countryName: '日本',
    visaName: '旅游签证',
    description: '这是一页面向中国公民的日本旅游签证准备清单。我们先把你最需要关心的材料列出来，再用系统规则检查你当前还缺什么。',
    visaType: 'tourist',
    checkDate: '2026年3月22日',
    officialSources: [
      { label: '日本驻华大使馆：电子签证通知', url: 'https://www.cn.emb-japan.go.jp/itpr_zh/00_000485_00224.html' },
      { label: '日本驻青岛总领事馆：签证指南', url: 'https://www.qingdao.cn.emb-japan.go.jp/itpr_zh/procedures_and_visa.html' }
    ],
    requirements: [
      '先确认你所在地区属于哪个日本使领馆辖区，以及是否要通过指定旅行社递交。',
      '如果你走电子签路径，要确认自己属于官方写明的适用对象，并在入境时可联网出示签发通知。',
      '多次签、单次签、跟团或个签的材料可能不同，递交前必须回到官方入口核对最新版。'
    ],
    documents: [
      { code: 'passport', title: '有效护照', note: '至少应确保有足够空白页，且护照状态完好。' },
      { code: 'photo', title: '证件照片', note: '尺寸和底色以当前使领馆或代办渠道说明为准。' },
      { code: 'bank_statement', title: '资金证明', note: '常见为银行流水、存款或其他能支撑旅行支付能力的材料。' }
    ]
  },
  korea: {
    id: 'korea',
    code: 'KR',
    flag: '🇰🇷',
    countryName: '韩国',
    visaName: '旅游签证',
    description: '韩国旅游签准备时，最重要的是先锁定签证种类，再按该类别的官方 PDF 核材料。这里先给你一版高频基础清单。',
    visaType: 'tourist',
    checkDate: '2026年3月22日',
    officialSources: [
      { label: '韩国驻华大使馆：签证种类及所需材料', url: 'https://overseas.mofa.go.kr/cn-zh/brd/m_1201/view.do?itm_seq_1=0&itm_seq_2=0&multi_itm_seq=0&page=1&seq=695439' },
      { label: '韩国驻华大使馆：常见问题解答', url: 'https://overseas.mofa.go.kr/cn-zh/wpge/m_1199/contents.do' }
    ],
    requirements: [
      '先看你是不是对应 C-3-9 等旅游签类别，不同类别材料会不同。',
      '韩国驻华使馆 FAQ 明确说明，原则上签证通过指定代办机构办理。',
      '费用、时效和补件要求都可能调整，出发前要重新下载一次官方材料 PDF。'
    ],
    documents: [
      { code: 'passport', title: '有效护照', note: '核对护照有效期和签证页空白页。' },
      { code: 'photo', title: '签证照片', note: '以韩国驻华使馆最新要求为准。' },
      { code: 'bank_statement', title: '财力或在职相关证明', note: '不同类别可能要求流水、在职、社保或资产补充材料。' }
    ]
  },
  france: {
    id: 'france',
    code: 'FR',
    flag: '🇫🇷',
    countryName: '法国',
    visaName: '申根旅游签证',
    description: '法国旅游签更适合按申根短期签思路准备。先跑 France-Visas 官方助手，再对照清单勾掉你已经具备的材料。',
    visaType: 'tourist',
    checkDate: '2026年3月22日',
    officialSources: [
      { label: 'France-Visas：中国申请入口', url: 'https://www.france-visas.gouv.fr/chine' },
      { label: 'France-Visas：旅游或私人访问', url: 'https://france-visas.gouv.fr/web/france-visas/sejour-touristique-ou-prive' }
    ],
    requirements: [
      'France-Visas 会根据你的居住地、身份和停留情况生成个性化材料单。',
      '短期旅游通常需要证明资金、住宿、往返安排和旅行医疗保险。',
      '真正递交由 TLScontact 接件，签证决定由法国驻华使领馆作出。'
    ],
    documents: [
      { code: 'passport', title: '有效护照', note: '确保签证页和有效期满足申根短期签要求。' },
      { code: 'photo', title: '签证照片', note: '规格以 France-Visas 或受理中心要求为准。' },
      { code: 'bank_statement', title: '资金证明', note: '常见为银行流水、存款或工资等证明，需能支撑全程旅行。' }
    ]
  }
};

const countryId = window.location.pathname.split('/').pop();
const country = countryMap[countryId] || countryMap.japan;

const titleEl = document.getElementById('country-title');
const flagEl = document.getElementById('country-flag');
const subtitleEl = document.getElementById('country-subtitle');
const descEl = document.getElementById('country-description');
const stampEl = document.getElementById('country-stamp');
const requirementsEl = document.getElementById('requirements');
const sourcesEl = document.getElementById('sources');
const checklistEl = document.getElementById('checklist');
const resultEl = document.getElementById('result');
const statusEl = document.getElementById('status');
const summaryEl = document.getElementById('summary');

function render() {
  titleEl.textContent = country.countryName;
  flagEl.textContent = country.flag;
  subtitleEl.textContent = country.visaName;
  descEl.textContent = country.description;
  stampEl.textContent = '官方信息核对日期：' + country.checkDate;
  requirementsEl.innerHTML = country.requirements.map((item) => '<li>' + item + '</li>').join('');
  sourcesEl.innerHTML = country.officialSources.map((item) =>
    '<a class="source" href="' + item.url + '" target="_blank" rel="noreferrer">' +
      '<strong>' + item.label + '</strong>' +
      '<span>' + item.url + '</span>' +
    '</a>'
  ).join('');
  checklistEl.innerHTML = country.documents.map((item) =>
    '<label class="item">' +
      '<input type="checkbox" value="' + item.code + '">' +
      '<div><div class="item-title">' + item.title + '</div><div class="item-note">' + item.note + '</div></div>' +
    '</label>'
  ).join('');
  summaryEl.textContent = '当前清单默认围绕三个基础高频项：护照、照片、资金证明。后面我会继续扩成更细分的官方材料结构。';
}

async function seedRule() {
  await fetch('/rules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      destinationCode: country.code,
      visaType: country.visaType,
      version: '2026.03.1',
      sourceUrl: country.officialSources[0].url,
      requiredDocuments: country.documents.map((item) => item.code)
    })
  });
}

function selectedDocuments() {
  return Array.from(document.querySelectorAll('#checklist input:checked')).map((node) => node.value);
}

document.getElementById('check-button').addEventListener('click', async () => {
  const uploadedDocuments = selectedDocuments();
  statusEl.textContent = '正在校验你目前已准备的材料…';
  statusEl.style.color = '#1f7a53';

  try {
    await seedRule();
    const response = await fetch('/completeness/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        destinationCode: country.code,
        visaType: country.visaType,
        uploadedDocuments
      })
    });
    const body = await response.json();
    resultEl.textContent = JSON.stringify(body, null, 2);
    if (body.isComplete) {
      statusEl.textContent = '材料已经齐了，可以继续准备预约和递交。';
      statusEl.style.color = '#1f7a53';
    } else {
      statusEl.textContent = '还有缺失项，先把 result 里的 missing 列表补齐。';
      statusEl.style.color = '#b5472e';
    }
  } catch (error) {
    resultEl.textContent = String(error);
    statusEl.textContent = '检查失败，请稍后重试。';
    statusEl.style.color = '#b5472e';
  }
});

document.getElementById('select-all').addEventListener('click', () => {
  document.querySelectorAll('#checklist input').forEach((input) => {
    input.checked = true;
  });
});

render();
`;

const checklistHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>旅游签证材料清单</title>
    <link rel="stylesheet" href="/app/checklist.css" />
  </head>
  <body>
    <main class="page">
      <div class="topbar">
        <a class="back-link" href="/">← 返回国家选择</a>
        <div id="country-stamp" class="stamp"></div>
      </div>

      <section class="hero">
        <div class="hero-head">
          <div id="country-flag" class="flag"></div>
          <div>
            <h1 id="country-title"></h1>
            <div id="country-subtitle" class="subtitle"></div>
          </div>
        </div>
        <p id="country-description"></p>
        <div class="hero-tags">
          <div class="tag">中国公民</div>
          <div class="tag">旅游签证准备</div>
          <div class="tag">先做材料自检，再去官方递交</div>
        </div>
      </section>

      <section class="layout">
        <section class="card">
          <h2>我的材料清单</h2>
          <p class="lead">先勾选你已经准备好的材料，再点“检查我的完整性”。系统会调用当前规则引擎，告诉你还缺什么。</p>
          <div id="checklist" class="checklist"></div>
          <div class="actions">
            <button id="check-button" type="button">检查我的完整性</button>
            <button id="select-all" type="button" class="secondary">一键全选示例</button>
          </div>
          <div id="status" class="status"></div>
          <pre id="result" class="result">点击上面的按钮后，系统会把完整性检查结果显示在这里。</pre>
        </section>

        <section class="panel-stack">
          <section class="card">
            <h2>官方要点</h2>
            <p class="lead">这些是你在正式递交前最值得再看一遍的提醒。</p>
            <ol id="requirements" class="list"></ol>
          </section>

          <section class="card">
            <h2>官方入口</h2>
            <p class="lead">递交前别只看这页，务必回到官方入口核对最新版本。</p>
            <div id="sources" class="sources"></div>
          </section>

          <section class="card">
            <h2>当前说明</h2>
            <div id="summary" class="summary"></div>
          </section>
        </section>
      </section>
    </main>
    <script src="/app/checklist.js"></script>
  </body>
</html>
`;

export function getChecklistHtml(): string {
  return checklistHtml;
}

export function getChecklistCss(): string {
  return checklistCss;
}

export function getChecklistJs(): string {
  return checklistJs;
}
