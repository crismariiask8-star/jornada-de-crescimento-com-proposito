const STORAGE_KEY = "jornadaCrescimentoProposito:v1";

// Catálogo inicial da trilha; os cards são renderizados a partir destes dados.
const modules = [
  {
    id: "identidade-proposito",
    title: "Identidade e Propósito",
    description:
      "Fundamentos para reconhecer valor, vocação e direção a partir da identidade em Deus.",
    verse: "Efésios 2:10",
    focus: "Clareza de identidade, dons e propósito pessoal.",
  },
  {
    id: "disciplina-habitos",
    title: "Disciplina e Hábitos",
    description:
      "Práticas consistentes para transformar intenção em maturidade, rotina e perseverança.",
    verse: "1 Coríntios 9:25",
    focus: "Ritmos semanais, constância e domínio próprio.",
  },
  {
    id: "renovacao-mente",
    title: "Renovação da Mente",
    description:
      "Caminhos para substituir padrões limitantes por pensamentos alinhados à verdade.",
    verse: "Romanos 12:2",
    focus: "Mentalidade, discernimento e tomada de decisão.",
  },
  {
    id: "inteligencia-emocional-crista",
    title: "Inteligência Emocional Cristã",
    description:
      "Maturidade para lidar com emoções, conflitos, ansiedade e pressões com sabedoria.",
    verse: "Provérbios 4:23",
    focus: "Autoconsciência, domínio emocional e restauração.",
  },
  {
    id: "financas-sabedoria",
    title: "Finanças com Sabedoria",
    description:
      "Princípios para organizar recursos, praticar generosidade e construir estabilidade.",
    verse: "Provérbios 21:5",
    focus: "Orçamento, reservas, prioridades e contentamento.",
  },
  {
    id: "familia-relacionamentos-honra",
    title: "Família, Relacionamentos e Honra",
    description:
      "Bases para cultivar honra, reconciliação, presença e comunicação saudável.",
    verse: "Romanos 12:10",
    focus: "Relacionamentos, escuta, perdão e serviço no lar.",
  },
  {
    id: "lideranca-servico",
    title: "Liderança e Serviço",
    description:
      "Uma visão de liderança que começa no caráter e floresce no cuidado com pessoas.",
    verse: "Marcos 10:45",
    focus: "Influência, responsabilidade e serviço ao próximo.",
  },
  {
    id: "chamado-missao-futuro",
    title: "Chamado, Missão e Futuro",
    description:
      "Integração da jornada para viver com direção, coragem e impacto no longo prazo.",
    verse: "Filipenses 3:14",
    focus: "Missão pessoal, legado e próximos passos.",
  },
];

const initialState = {
  completedModules: [],
  activeModuleId: null,
  examApproved: false,
};

const state = loadState();

const elements = {
  moduleGrid: document.querySelector("#moduleGrid"),
  progressPercent: document.querySelector("#progressPercent"),
  progressBar: document.querySelector("#progressBar"),
  moduleCounter: document.querySelector("#moduleCounter"),
  examStatus: document.querySelector("#examStatus"),
  certificateStatus: document.querySelector("#certificateStatus"),
  startCourse: document.querySelector("#startCourse"),
  roomTitle: document.querySelector("#room-title"),
  roomDescription: document.querySelector("#roomDescription"),
  roomVerse: document.querySelector("#roomVerse"),
  roomFocus: document.querySelector("#roomFocus"),
  completeCurrentModule: document.querySelector("#completeCurrentModule"),
  examPill: document.querySelector("#examPill"),
  examMessage: document.querySelector("#examMessage"),
  approveExam: document.querySelector("#approveExam"),
  certificatePreview: document.querySelector("#certificatePreview"),
  certificateMessage: document.querySelector("#certificateMessage"),
  certificateText: document.querySelector("#certificateText"),
  resetProgress: document.querySelector("#resetProgress"),
  navLinks: document.querySelectorAll("[data-nav]"),
};

function loadState() {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);

    if (!rawState) {
      return { ...initialState };
    }

    const savedState = JSON.parse(rawState);
    const validIds = modules.map((module) => module.id);
    const completedModules = Array.isArray(savedState.completedModules)
      ? savedState.completedModules.filter((id) => validIds.includes(id))
      : [];

    return {
      ...initialState,
      ...savedState,
      completedModules,
      examApproved:
        Boolean(savedState.examApproved) &&
        completedModules.length === modules.length,
    };
  } catch (error) {
    console.warn("Não foi possível carregar o progresso salvo.", error);
    return { ...initialState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// A liberação é sequencial: o próximo módulo abre quando o anterior é concluído.
function getModuleStatus(index) {
  const module = modules[index];
  const previousModule = modules[index - 1];

  if (state.completedModules.includes(module.id)) {
    return "completed";
  }

  if (index === 0 || state.completedModules.includes(previousModule.id)) {
    return "available";
  }

  return "locked";
}

function getStatusLabel(status) {
  const labels = {
    completed: "Concluído",
    available: "Disponível",
    locked: "Bloqueado",
  };

  return labels[status];
}

function renderModules() {
  elements.moduleGrid.innerHTML = modules
    .map((module, index) => {
      const status = getModuleStatus(index);
      const moduleNumber = String(index + 1).padStart(2, "0");
      const isLocked = status === "locked";
      const isCompleted = status === "completed";

      return `
        <article class="module-card is-${status}" data-module-id="${module.id}">
          <div class="module-topline">
            <span class="module-number">Módulo ${moduleNumber}</span>
            <span class="status-pill status-${status}">${getStatusLabel(status)}</span>
          </div>
          <h3>${module.title}</h3>
          <p class="module-description">${module.description}</p>
          <p class="verse">${module.verse}</p>
          <div class="card-actions">
            <button class="btn btn-secondary" type="button" data-action="open-module" ${
              isLocked ? "disabled" : ""
            }>
              Acessar módulo
            </button>
            <button class="btn btn-primary" type="button" data-action="complete-module" ${
              isLocked || isCompleted ? "disabled" : ""
            }>
              ${isCompleted ? "Concluído" : "Concluir"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

// Sincroniza barra, contadores, prova e certificado em uma única atualização.
function updateProgress() {
  const completedCount = state.completedModules.length;
  const progress = Math.round((completedCount / modules.length) * 100);
  const examUnlocked = completedCount === modules.length;

  elements.progressPercent.textContent = `${progress}%`;
  elements.moduleCounter.textContent = `${completedCount}/${modules.length}`;
  elements.progressBar.setAttribute("aria-valuenow", String(progress));
  elements.progressBar.querySelector("span").style.width = `${progress}%`;

  elements.examStatus.textContent = state.examApproved
    ? "Aprovada"
    : examUnlocked
      ? "Liberada"
      : "Bloqueada";

  elements.certificateStatus.textContent = state.examApproved
    ? "Liberado"
    : "Bloqueado";

  renderExam(examUnlocked);
  renderCertificate();
}

function renderExam(examUnlocked) {
  elements.approveExam.disabled = !examUnlocked || state.examApproved;

  if (state.examApproved) {
    elements.examPill.textContent = "Aprovada";
    elements.examPill.className = "status-pill status-completed";
    elements.examMessage.textContent =
      "A aprovação foi registrada. O certificado está liberado.";
    elements.approveExam.textContent = "Aprovação registrada";
    return;
  }

  if (examUnlocked) {
    elements.examPill.textContent = "Liberada";
    elements.examPill.className = "status-pill status-available";
    elements.examMessage.textContent =
      "Todos os módulos foram concluídos. A prova final está liberada.";
    elements.approveExam.textContent = "Registrar aprovação";
    return;
  }

  elements.examPill.textContent = "Bloqueada";
  elements.examPill.className = "status-pill status-locked";
  elements.examMessage.textContent =
    "Conclua todos os módulos para liberar a prova.";
  elements.approveExam.textContent = "Registrar aprovação";
}

function renderCertificate() {
  elements.certificatePreview.classList.toggle(
    "is-unlocked",
    state.examApproved,
  );

  if (state.examApproved) {
    elements.certificateMessage.textContent =
      "Certificado liberado após aprovação na prova final.";
    elements.certificateText.textContent =
      "Concedido pela conclusão da Jornada de Crescimento com Propósito.";
    return;
  }

  elements.certificateMessage.textContent =
    "O certificado será liberado após aprovação na prova final.";
  elements.certificateText.textContent =
    "Bloqueado até a aprovação na prova final.";
}

function selectModule(moduleId, shouldScroll = true) {
  const module = modules.find((item) => item.id === moduleId);

  if (!module) {
    return;
  }

  state.activeModuleId = module.id;
  saveState();

  elements.roomTitle.textContent = module.title;
  elements.roomDescription.textContent = module.description;
  elements.roomVerse.textContent = module.verse;
  elements.roomFocus.textContent = module.focus;
  elements.completeCurrentModule.disabled = state.completedModules.includes(
    module.id,
  );

  if (shouldScroll) {
    document
      .querySelector("#sala-modulo")
      .scrollIntoView({ behavior: "smooth" });
  }
}

function completeModule(moduleId) {
  if (!moduleId || state.completedModules.includes(moduleId)) {
    return;
  }

  state.completedModules.push(moduleId);
  saveState();

  renderModules();
  updateProgress();
  selectModule(moduleId);
  elements.completeCurrentModule.disabled = true;
}

function findFirstAvailableModule() {
  return (
    modules.find((_, index) => getModuleStatus(index) === "available") ||
    modules[0]
  );
}

// Delegação mantém os cards renderizados por JS simples de controlar.
function handleModuleActions(event) {
  const button = event.target.closest("button[data-action]");
  const card = event.target.closest("[data-module-id]");

  if (!button || !card) {
    return;
  }

  const moduleId = card.dataset.moduleId;

  if (button.dataset.action === "open-module") {
    selectModule(moduleId);
  }

  if (button.dataset.action === "complete-module") {
    completeModule(moduleId);
  }
}

function handleNavigation(event) {
  const link = event.target.closest("[data-nav]");

  if (!link) {
    return;
  }

  const targetSelector = link.getAttribute("href");
  const target = document.querySelector(targetSelector);

  if (!target) {
    return;
  }

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", targetSelector);
}

function setActiveNavLink() {
  const sections = ["inicio", "modulos", "biblioteca", "prova", "certificado"];
  const pageSections = sections
    .map((id) => document.querySelector(`#${id}`))
    .filter(Boolean);
  let currentSection = pageSections[0];

  pageSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 140) {
      currentSection = section;
    }
  });

  if (!currentSection) {
    return;
  }

  elements.navLinks.forEach((link) => {
    link.classList.toggle(
      "is-active",
      link.getAttribute("href") === `#${currentSection.id}`,
    );
  });
}

function resetProgress() {
  const shouldReset = window.confirm(
    "Deseja reiniciar o progresso salvo neste navegador?",
  );

  if (!shouldReset) {
    return;
  }

  state.completedModules = [];
  state.activeModuleId = null;
  state.examApproved = false;
  saveState();
  render();
}

function resetRoom() {
  elements.roomTitle.textContent = "Selecione um módulo disponível";
  elements.roomDescription.textContent =
    "A etapa selecionada exibirá foco prático, referência bíblica e conclusão.";
  elements.roomVerse.textContent = "-";
  elements.roomFocus.textContent = "-";
  elements.completeCurrentModule.disabled = true;
}

function render() {
  renderModules();
  updateProgress();

  const activeModule = state.activeModuleId
    ? modules.find((module) => module.id === state.activeModuleId)
    : null;

  if (activeModule) {
    selectModule(activeModule.id, false);
  } else {
    resetRoom();
  }
}

elements.moduleGrid.addEventListener("click", handleModuleActions);
elements.startCourse.addEventListener("click", () => {
  selectModule(findFirstAvailableModule().id);
});
elements.completeCurrentModule.addEventListener("click", () => {
  completeModule(state.activeModuleId);
});
elements.approveExam.addEventListener("click", () => {
  state.examApproved = true;
  saveState();
  updateProgress();
  document.querySelector("#certificado").scrollIntoView({ behavior: "smooth" });
});
elements.resetProgress.addEventListener("click", resetProgress);
document.addEventListener("click", handleNavigation);
window.addEventListener("scroll", setActiveNavLink, { passive: true });

render();
setActiveNavLink();
