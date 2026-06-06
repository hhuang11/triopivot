// Internationalization - CN/EN toggle
const translations = {
  // === Navigation ===
  "nav.home": { zh: "首页", en: "Home" },
  "nav.cases": { zh: "案例", en: "Cases" },
  "nav.demo": { zh: "演示", en: "Demo" },
  "nav.about": { zh: "关于", en: "About" },

  // === Homepage ===
  "hero.title": { zh: "三合策", en: "Trio-Pivot" },
  "hero.subtitle": { zh: "Trio-Pivot", en: "三合策" },
  "hero.tagline": { zh: "决策有据，行止有时", en: "Data-Driven Decisions, Timely Actions" },

  "home.who.title": { zh: "我们是谁", en: "Who We Are" },
  "home.who.lead": {
    zh: "三合策是一支跨学科的量化决策辅助团队，专注于将中西方传统智慧体系化、工程化。我们融合数据科学、文化研究与技术工程，构建多维度评估框架，为个人、企业和家族提供深度决策参考。",
    en: "Trio-Pivot is a multidisciplinary quantitative decision-support team dedicated to systematizing and engineering Eastern and Western traditional wisdom. We integrate data science, cultural research, and technical engineering to build multi-dimensional assessment frameworks, providing in-depth decision references for individuals, businesses, and families."
  },

  "home.modules.title": { zh: "系统模块", en: "System Modules" },
  "home.modules.intro": {
    zh: "决策领航系统由六大核心模块构成，覆盖从产业分析到个人决策的完整闭环。",
    en: "The Decision Voyager system consists of six core modules, covering the complete loop from industry analysis to personal decisions."
  },

  "home.mod1.title": { zh: "产业研究", en: "Industry Research" },
  "home.mod1.desc": {
    zh: "知识库增强 + 系统化研究 + 风险量化，提供数据驱动的产业研究与风险评估。",
    en: "Knowledge-base enhanced + systematic research + risk quantification, providing data-driven industry research and risk assessment."
  },
  "home.mod2.title": { zh: "负面清单", en: "Risk Checklist" },
  "home.mod2.desc": {
    zh: "基于多元思维模型与风险框架，识别潜在陷阱与不利因素，构建决策“防火墙”。",
    en: "Based on multidisciplinary mental models and risk frameworks, identifying potential pitfalls and adverse factors to build a decision \"firewall\"."
  },
  "home.mod3.title": { zh: "模拟复盘", en: "Scenario Replay" },
  "home.mod3.desc": {
    zh: "参考历史决策进行多情景回溯与模拟，量化不同路径的共性和差异。",
    en: "Multi-scenario retrospective and simulation based on historical decisions, quantifying commonalities and differences across paths."
  },
  "home.mod4.title": { zh: "文化沉淀", en: "Cultural Archive" },
  "home.mod4.desc": {
    zh: "将家族史、个人和企业经历结构化提炼，提供跨代际的智慧传承。",
    en: "Structuring and distilling family history, personal and business experiences for cross-generational wisdom inheritance."
  },
  "home.mod5.title": { zh: "命运转轮", en: "Destiny Wheel" },
  "home.mod5.desc": {
    zh: "基于中西方命理体系的量化建模，提供个人时间节律与趋势研判。",
    en: "Quantitative modeling based on Eastern and Western metaphysical systems, providing personal temporal rhythms and trend analysis."
  },
  "home.mod6.title": { zh: "易经筹策", en: "I Ching Strategy" },
  "home.mod6.desc": {
    zh: "将易经智慧数字化，结合情境分析，提供决策时机与策略建议。",
    en: "Digitizing I Ching wisdom combined with situational analysis, providing timing and strategy recommendations."
  },

  "home.boundary.title": { zh: "我们不做的事", en: "What We Don\'t Do" },
  "home.boundary.1": {
    zh: "不替代任何持牌专业人士（律师、会计师、理财顾问、医疗、心理等领域）",
    en: "No replacement for licensed professionals (lawyers, accountants, financial advisors, medical, psychological, etc.)"
  },
  "home.boundary.2": { zh: "不承诺任何确定性结果", en: "No guaranteed outcomes" },
  "home.boundary.3": { zh: "不提供投资建议或资产配置方案", en: "No investment advice or asset allocation plans" },
  "home.boundary.4": { zh: "不进行心理咨询或治疗", en: "No psychological counseling or therapy" },
  "home.boundary.5": { zh: "不收集或出售用户隐私数据", en: "No collection or sale of user privacy data" },

  "home.cta.title": { zh: "探索更多", en: "Explore More" },
  "home.cta.cases": { zh: "查看案例", en: "View Cases" },
  "home.cta.demo": { zh: "观看演示", en: "Watch Demo" },

  // === Cases Page ===
  "cases.title": { zh: "案例研究", en: "Case Studies" },
  "cases.intro": {
    zh: "以下案例基于真实咨询场景改编，展示决策领航系统在不同情境下的应用方式。",
    en: "The following cases are adapted from real consulting scenarios, demonstrating how the Decision Voyager system applies in different contexts."
  },
  "cases.privacy": {
    zh: "* 三合策注重用户隐私，所有案例均做过脱敏处理，信息虚化。",
    en: "* Trio Strategy values user privacy. All cases have been anonymized and details altered."
  },

  "case1.label": { zh: "案例一", en: "Case 1" },
  "case1.title": { zh: "科技企业转型决策", en: "Tech Enterprise Transformation" },
  "case1.client": { zh: "客户：", en: "Client: " },
  "case1.client.val": { zh: "赵铭辉，43岁，科技企业创始人", en: "Zhao Minghui, 43, Tech Company Founder" },
  "case1.bg": { zh: "背景：", en: "Background: " },
  "case1.bg.val": {
    zh: "公司面临转型关口，需要评估是否进入AI赛道",
    en: "Company at a transformation crossroads, evaluating entry into the AI sector"
  },
  "case1.modules": { zh: "使用模块", en: "Modules Used" },
  "case1.tag1": { zh: "负面清单", en: "Risk Checklist" },
  "case1.tag2": { zh: "产业研究", en: "Industry Research" },
  "case1.tag3": { zh: "模拟复盘", en: "Scenario Replay" },
  "case1.process": { zh: "分析过程", en: "Analysis Process" },
  "case1.p1": {
    zh: "<strong>负面清单：</strong>识别出三项关键风险——技术人才缺口、现金流压力期、竞品专利壁垒",
    en: "<strong>Risk Checklist:</strong> Identified three key risks \u2014 tech talent gap, cash flow pressure period, competitor patent barriers"
  },
  "case1.p2": {
    zh: "<strong>产业研究：</strong>量化AI行业景气度，对比中美市场窗口期差异",
    en: "<strong>Industry Research:</strong> Quantified AI sector performance, compared market window differences between China and US"
  },
  "case1.p3": {
    zh: "<strong>模拟复盘：</strong>对三条路径（全面转型/渐进试水/战略合作）进行压力测试",
    en: "<strong>Scenario Replay:</strong> Stress-tested three paths (full transformation / gradual pilot / strategic partnership)"
  },
  "case1.outcome.title": { zh: "决策参考", en: "Decision Reference" },
  "case1.outcome": {
    zh: "系统建议采用“渐进试水”路径，先以现有业务现金流支撑小规模AI团队，待验证后再扩大投入。客户最终采纳，6个月后AI部门实现正向现金流。",
    en: "The system recommended the \"gradual pilot\" path \u2014 supporting a small AI team with existing business cash flow, then scaling after validation. The client adopted this approach; 6 months later the AI division achieved positive cash flow."
  },

  "case2.label": { zh: "案例二", en: "Case 2" },
  "case2.title": { zh: "跨国家族文化传承", en: "Cross-Border Family Legacy" },
  "case2.client": { zh: "客户：", en: "Client: " },
  "case2.client.val": { zh: "Kevin Liu，48岁，新加坡/硅谷双基地", en: "Kevin Liu, 48, Singapore/Silicon Valley dual-base" },
  "case2.bg": { zh: "背景：", en: "Background: " },
  "case2.bg.val": {
    zh: "三代华人家族，子女在海外成长，面临文化断层与代际沟通困境",
    en: "Three-generation Chinese family, children raised overseas, facing cultural disconnection and intergenerational communication challenges"
  },
  "case2.modules": { zh: "使用模块", en: "Modules Used" },
  "case2.tag1": { zh: "文化沉淀", en: "Cultural Archive" },
  "case2.tag2": { zh: "模拟复盘", en: "Scenario Replay" },
  "case2.process": { zh: "分析过程", en: "Analysis Process" },
  "case2.p1": {
    zh: "<strong>文化沉淀：</strong>结构化梳理三代家族史，提取核心价值观与决策模式",
    en: "<strong>Cultural Archive:</strong> Structured analysis of three-generation family history, extracting core values and decision patterns"
  },
  "case2.p2": {
    zh: "<strong>模拟复盘：</strong>回溯家族关键决策节点（移民、创业、教育），分析决策逻辑",
    en: "<strong>Scenario Replay:</strong> Retrospective of key family decision points (immigration, entrepreneurship, education), analyzing decision logic"
  },
  "case2.outcome.title": { zh: "决策参考", en: "Decision Reference" },
  "case2.outcome": {
    zh: "生成了完整的“家族智慧手册”，以故事化方式呈现三代人的决策智慧。子女通过阅读手册理解了家族价值观的演变脉络，代际对话显著改善。",
    en: "Generated a complete \"Family Wisdom Handbook\" presenting three generations of decision wisdom in narrative form. Children understood the evolution of family values through the handbook, significantly improving intergenerational dialogue."
  },

  "case3.label": { zh: "案例三", en: "Case 3" },
  "case3.title": { zh: "伴侣关系深度评估", en: "Partnership Deep Assessment" },
  "case3.client": { zh: "客户：", en: "Client: " },
  "case3.client.val": { zh: "何嘉怡 & 陈立恒，结婚6年", en: "He Jiayi & Chen Liheng, married 6 years" },
  "case3.bg": { zh: "背景：", en: "Background: " },
  "case3.bg.val": {
    zh: "双方感到关系进入瓶颈期，希望从新视角理解彼此的行为模式",
    en: "Both feel the relationship has hit a plateau, hoping to understand each other\'s behavioral patterns from a new perspective"
  },
  "case3.modules": { zh: "使用模块", en: "Modules Used" },
  "case3.tag1": { zh: "命运转轮（合盘）", en: "Destiny Wheel (Synastry)" },
  "case3.process": { zh: "分析过程", en: "Analysis Process" },
  "case3.p1": {
    zh: "<strong>命运转轮：</strong>分别建立双方的个人时间节律模型，再进行“合盘”分析",
    en: "<strong>Destiny Wheel:</strong> Built individual temporal rhythm models for both parties, then performed synastry analysis"
  },
  "case3.p2": {
    zh: "<strong>互动模式：</strong>量化双方在沟通、财务决策、育儿等维度的互补与冲突点",
    en: "<strong>Interaction Patterns:</strong> Quantified complementary and conflict points in communication, financial decisions, and parenting"
  },
  "case3.p3": {
    zh: "<strong>节律叠加：</strong>标注双方能量高低期的重合与错位时段",
    en: "<strong>Rhythm Overlay:</strong> Mapped overlapping and misaligned high/low energy periods for both parties"
  },
  "case3.outcome.title": { zh: "决策参考", en: "Decision Reference" },
  "case3.outcome": {
    zh: "报告揭示了双方冲突高发期与各自低能量期的重合规律，建议在特定时段减少重大决策讨论。双方反馈“终于理解了为什么总在周末吵架”。",
    en: "The report revealed patterns where conflict peaks coincided with both parties\' low-energy periods, recommending reduced major decision discussions during specific timeframes. Both reported: \"Finally understand why we always argue on weekends.\""
  },

  "case4.label": { zh: "案例四", en: "Case 4" },
  "case4.title": { zh: "职业转型时机研判", en: "Career Transition Timing" },
  "case4.client": { zh: "客户：", en: "Client: " },
  "case4.client.val": { zh: "Michelle Chen，35岁，旧金山", en: "Michelle Chen, 35, San Francisco" },
  "case4.bg": { zh: "背景：", en: "Background: " },
  "case4.bg.val": {
    zh: "在大厂工作7年，考虑创业但对时机和方向犹豫不决",
    en: "7 years at a major tech company, considering entrepreneurship but undecided on timing and direction"
  },
  "case4.modules": { zh: "使用模块", en: "Modules Used" },
  "case4.tag1": { zh: "命运转轮", en: "Destiny Wheel" },
  "case4.tag2": { zh: "易经筹策", en: "I Ching Strategy" },
  "case4.process": { zh: "分析过程", en: "Analysis Process" },
  "case4.p1": {
    zh: "<strong>命运转轮：</strong>建立个人时间节律模型，识别近3年的能量波动周期",
    en: "<strong>Destiny Wheel:</strong> Built personal temporal rhythm model, identifying energy fluctuation cycles over the past 3 years"
  },
  "case4.p2": {
    zh: "<strong>易经筹策：</strong>针对“是否在今年Q3离职创业”进行情境分析",
    en: "<strong>I Ching Strategy:</strong> Conducted situational analysis for \"whether to leave and start a business in Q3 this year\""
  },
  "case4.p3": {
    zh: "<strong>综合研判：</strong>交叉验证两套系统的结论一致性",
    en: "<strong>Cross-Validation:</strong> Cross-verified consistency of conclusions from both systems"
  },
  "case4.outcome.title": { zh: "决策参考", en: "Decision Reference" },
  "case4.outcome": {
    zh: "两套系统一致显示当前处于“蓄势期”，建议推迟6个月再行动，利用这段时间完善商业计划与人脉储备。客户采纳后在次年Q1顺利启动，首轮融资成功。",
    en: "Both systems consistently indicated a current \"accumulation phase,\" recommending a 6-month delay to refine the business plan and build connections. The client adopted this advice, successfully launched in Q1 the following year, and closed the first funding round."
  },

  "cases.note": {
    zh: "* 以上案例均经过脱敏处理，人名和具体细节已做改编，仅用于展示系统应用方式。",
    en: "* All cases above have been anonymized. Names and specific details have been adapted, used only to demonstrate system applications."
  },

  // === Demo Page ===
  "demo.title": { zh: "系统演示", en: "System Demo" },
  "demo.intro": {
    zh: "观看决策领航系统的实际操作演示，了解各模块如何协同工作。",
    en: "Watch live demonstrations of the Decision Voyager system to see how modules work together."
  },
  "demo.screenshots.title": { zh: "系统界面", en: "System Interface" },
  "demo.screenshots.intro": {
    zh: "决策领航系统的核心操作界面，展示多维度分析框架的实际呈现。",
    en: "The core interface of the Decision Voyager system, showcasing the multi-dimensional analytical framework in action."
  },
  "demo.screenshot.caption": { zh: "系统主界面 \u2014 多模块协同分析", en: "Main Interface \u2014 Multi-Module Collaborative Analysis" },
  "demo.videos.title": { zh: "操作演示", en: "Live Demos" },
  "demo.videos.intro": {
    zh: "观看完整的系统操作流程，了解各模块如何为不同场景提供决策参考。",
    en: "Watch complete system operation workflows to see how modules provide decision references for different scenarios."
  },
  "demo.videos.privacy": {
    zh: "* 三合策注重用户隐私，所有案例均做过脱敏处理，信息虚化。",
    en: "* Trio Strategy values user privacy. All cases have been anonymized and details altered."
  },
  "demo.male.title": { zh: "系统全景 \u00b7 企业与家族决策", en: "Full Overview \u00b7 Business & Family Decisions" },
  "demo.male.caption": {
    zh: "涵盖产业研究、负面清单、模拟复盘、文化沉淀等核心模块，展示企业级决策场景的完整服务流程。",
    en: "Covers Industry Research, Risk Checklist, Scenario Replay, Cultural Archive and other core modules \u2014 demonstrating the full service workflow for enterprise-level decision scenarios."
  },
  "demo.female.title": { zh: "系统全景 \u00b7 个人成长与转型", en: "Full Overview \u00b7 Personal Growth & Transition" },
  "demo.female.caption": {
    zh: "涵盖命运转轮、易经筹策、时机研判等核心模块，展示个人决策场景的完整服务流程。",
    en: "Covers Destiny Wheel, I Ching Strategy, Timing Analysis and other core modules \u2014 demonstrating the full service workflow for personal decision scenarios."
  },
  "demo.more": { zh: "了解更多", en: "Learn More" },
  "demo.btn.cases": { zh: "查看案例", en: "View Cases" },
  "demo.btn.about": { zh: "关于我们", en: "About Us" },

  // === About Page ===
  "about.title": { zh: "关于我们", en: "About Us" },
  "about.mission": {
    zh: "三合策致力于为决策者构建数字化、多维度的评估框架。我们不替代人做决策，旨在辅助决策者优化思维模型，在复杂系统中，达成“天时、地利、人和”的动态平衡。",
    en: "Trio-Pivot is dedicated to building digital, multi-dimensional evaluation frameworks for decision-makers. We don\'t make decisions for people \u2014 we help decision-makers optimize their mental models to achieve dynamic balance of timing, positioning, and human factors in complex systems."
  },
  "about.capabilities.title": { zh: "核心能力", en: "Core Capabilities" },
  "about.cap1.title": { zh: "技术与工程", en: "Technology & Engineering" },
  "about.cap1.desc": {
    zh: "核心成员具备10年以上软件工程与系统设计背景。自研多模块量化决策引擎，从数据、模型到可视化报告生成，端到端闭环。",
    en: "Core team members have 10+ years of software engineering and system design experience. Self-developed multi-module quantitative decision engine, end-to-end from data and models to visual report generation."
  },
  "about.cap2.title": { zh: "中西融合", en: "East-West Integration" },
  "about.cap2.desc": {
    zh: "东方古典智慧工程化 + 时运周期分析；西方清单决策框架 + 多学科思维模型 + 风险量化。所有结论均附带评分依据与因子拆解。",
    en: "Eastern classical wisdom engineering + temporal cycle analysis; Western checklist frameworks + multidisciplinary mental models + risk quantification. All conclusions include scoring rationale and factor decomposition."
  },
  "about.cap3.title": { zh: "文化与历史纵深", en: "Cultural & Historical Depth" },
  "about.cap3.desc": {
    zh: "团队具备中西方政治、经济、历史的系统性研究积累。本地化运维历史人物和事件数据库，用于模式匹配和案例参照。",
    en: "Systematic research in Eastern and Western politics, economics, and history. Locally maintained database of historical figures and events for pattern matching and case reference."
  },
  "about.cap4.title": { zh: "高净值客户咨询经验", en: "HNW Client Advisory" },
  "about.cap4.desc": {
    zh: "长期服务企业家、家族办公室、高管群体。擅长处理复杂、多变量的决策场景。严格保密机制，一对一专属服务。",
    en: "Long-term service to entrepreneurs, family offices, and senior executives. Expert in complex, multi-variable decision scenarios. Strict confidentiality, one-on-one dedicated service."
  },
  "about.contact.title": { zh: "联系我们", en: "Contact Us" },
  "about.contact.desc": {
    zh: "如您有兴趣了解更多，欢迎通过以下方式联系：",
    en: "If you\'re interested in learning more, please reach out:"
  },

  // === Footer ===
  "footer.disclaimer": {
    zh: '本平台提供的所有内容仅供参考，不构成任何投资建议或专业意见。<a href="disclaimer.html">完整免责声明</a>',
    en: 'All content on this platform is for reference only and does not constitute investment advice or professional opinions. <a href="disclaimer.html">Full Disclaimer</a>'
  },
  "footer.copy": {
    zh: '&copy; ' + new Date().getFullYear() + ' Trio-Pivot. All rights reserved. | <a href="mailto:triopivot@gmail.com">triopivot@gmail.com</a>',
    en: '&copy; ' + new Date().getFullYear() + ' Trio-Pivot. All rights reserved. | <a href="mailto:triopivot@gmail.com">triopivot@gmail.com</a>'
  }
};

// Language toggle logic
let currentLang = 'zh';

function getLang() {
  try {
    return localStorage.getItem('trio-lang') || 'zh';
  } catch (e) {
    return currentLang;
  }
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('trio-lang', lang); } catch (e) {}
  applyLang(lang);
  updateToggleBtn(lang);
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.innerHTML = translations[key][lang];
    }
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function updateToggleBtn(lang) {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'zh' ? 'EN' : '中文';
    btn.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切换到中文');
  }
}

function toggleLang() {
  const current = getLang();
  setLang(current === 'zh' ? 'en' : 'zh');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyLang(lang);
  updateToggleBtn(lang);
});
