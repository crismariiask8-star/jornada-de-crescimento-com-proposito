const STORAGE_KEY = "jornadaLmsState:v1";
const MODULES_MANIFEST = "data/modules/index.json";
const LIBRARY_INDEX = "data/library/index.json";
const SEARCH_INDEX = "data/search-index.json";
const PROJECT_FINAL = "data/project-final.json";
const CERTIFICATE_CONFIG = "data/certificates/config.json";

const moduleCache = new Map();
const quizCache = new Map();

const app = {
  manifest: null,
  modules: [],
  library: { categories: [] },
  searchIndex: { records: [] },
  project: null,
  certificate: null,
};

const initialState = {
  activeModuleId: null,
  activeLessonId: null,
  completedLessons: [],
  favorites: [],
  notes: {},
  quizAttempts: {},
  moduleAssessments: {},
  finalProject: {
    completed: false,
    sections: {},
  },
  finalExamApproved: false,
  certificateUnlocked: false,
  overallProgress: 0,
};

const state = loadState();

const elements = {
  moduleGrid: document.querySelector("#moduleGrid"),
  progressPercent: document.querySelector("#progressPercent"),
  progressBar: document.querySelector("#progressBar"),
  moduleCounter: document.querySelector("#moduleCounter"),
  lessonCounter: document.querySelector("#lessonCounter"),
  examStatus: document.querySelector("#examStatus"),
  certificateStatus: document.querySelector("#certificateStatus"),
  startCourse: document.querySelector("#startCourse"),
  classroomDescription: document.querySelector("#classroomDescription"),
  classroomModuleNumber: document.querySelector("#classroomModuleNumber"),
  classroomModuleTitle: document.querySelector("#classroomModuleTitle"),
  classroomModuleDescription: document.querySelector(
    "#classroomModuleDescription",
  ),
  moduleProgressPercent: document.querySelector("#moduleProgressPercent"),
  moduleProgressBar: document.querySelector("#moduleProgressBar"),
  moduleLessonCounter: document.querySelector("#moduleLessonCounter"),
  lessonList: document.querySelector("#lessonList"),
  lessonStatusPill: document.querySelector("#lessonStatusPill"),
  favoriteLesson: document.querySelector("#favoriteLesson"),
  favoritesList: document.querySelector("#favoritesList"),
  lessonKicker: document.querySelector("#lessonKicker"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonSummary: document.querySelector("#lessonSummary"),
  lessonVerse: document.querySelector("#lessonVerse"),
  lessonText: document.querySelector("#lessonText"),
  lessonQuestion: document.querySelector("#lessonQuestion"),
  previousLesson: document.querySelector("#previousLesson"),
  completeCurrentLesson: document.querySelector("#completeCurrentLesson"),
  nextLesson: document.querySelector("#nextLesson"),
  backToModules: document.querySelector("#backToModules"),
  lessonNotes: document.querySelector("#lessonNotes"),
  saveNotes: document.querySelector("#saveNotes"),
  lessonQuiz: document.querySelector("#lessonQuiz"),
  moduleAssessmentTitle: document.querySelector("#moduleAssessmentTitle"),
  moduleAssessmentStatus: document.querySelector("#moduleAssessmentStatus"),
  moduleAssessmentQuiz: document.querySelector("#moduleAssessmentQuiz"),
  globalSearch: document.querySelector("#globalSearch"),
  searchResults: document.querySelector("#searchResults"),
  libraryGrid: document.querySelector("#libraryGrid"),
  projectDescription: document.querySelector("#projectDescription"),
  projectSections: document.querySelector("#projectSections"),
  completeProject: document.querySelector("#completeProject"),
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
    return {
      ...initialState,
      ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"),
    };
  } catch (error) {
    console.warn("Não foi possível carregar o estado do LMS.", error);
    return structuredClone(initialState);
  }
}

function saveState() {
  syncProgressState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function fetchJSON(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Falha ao carregar ${path}`);
  }

  return response.json();
}

async function initializeLms() {
  try {
    const [manifest, library, searchIndex, project, certificate] =
      await Promise.all([
        fetchJSON(MODULES_MANIFEST),
        fetchJSON(LIBRARY_INDEX),
        fetchJSON(SEARCH_INDEX),
        fetchJSON(PROJECT_FINAL),
        fetchJSON(CERTIFICATE_CONFIG),
      ]);

    app.manifest = manifest;
    app.modules = manifest.modules;
    app.library = library;
    app.searchIndex = searchIndex;
    app.project = project;
    app.certificate = certificate;

    render();
  } catch (error) {
    renderFatalError(error);
  }
}

function renderFatalError(error) {
  elements.moduleGrid.innerHTML = `
    <article class="module-card is-locked">
      <h3>Não foi possível carregar os dados</h3>
      <p class="module-description">${escapeHTML(error.message)}</p>
      <p class="verse">Use um servidor local, como <strong>npm run dev</strong>, para carregar arquivos JSON.</p>
    </article>
  `;
}

async function loadModule(moduleId) {
  const meta = getModuleMeta(moduleId);

  if (!meta?.dataPath) {
    return null;
  }

  if (!moduleCache.has(moduleId)) {
    moduleCache.set(moduleId, fetchJSON(meta.dataPath));
  }

  return moduleCache.get(moduleId);
}

async function loadQuiz(quizId) {
  if (!quizId) {
    return null;
  }

  if (!quizCache.has(quizId)) {
    quizCache.set(quizId, fetchJSON(`data/quizzes/${quizId}.json`));
  }

  return quizCache.get(quizId);
}

function getModuleMeta(moduleId) {
  return app.modules.find((module) => module.id === moduleId) || null;
}

function getModuleIndex(moduleId) {
  return app.modules.findIndex((module) => module.id === moduleId);
}

function getLessonKey(moduleId, lessonId) {
  return `${moduleId}:${lessonId}`;
}

function getTotalExpectedLessons() {
  return app.modules.reduce(
    (total, module) => total + (module.lessonCount || 0),
    0,
  );
}

function getCompletedLessonCount(moduleId = null) {
  if (!moduleId) {
    return state.completedLessons.length;
  }

  return state.completedLessons.filter((lessonKey) =>
    lessonKey.startsWith(`${moduleId}:`),
  ).length;
}

function isLessonCompleted(moduleId, lessonId) {
  return state.completedLessons.includes(getLessonKey(moduleId, lessonId));
}

function isModuleCompleted(module) {
  return (
    module.lessonCount > 0 &&
    getCompletedLessonCount(module.id) >= module.lessonCount
  );
}

function getCompletedModuleCount() {
  return app.modules.filter((module) => isModuleCompleted(module)).length;
}

function getModuleStatus(module, index) {
  if (isModuleCompleted(module)) {
    return "completed";
  }

  if (module.status === "planned" || !module.dataPath) {
    return "planned";
  }

  if (index === 0 || isModuleCompleted(app.modules[index - 1])) {
    return "available";
  }

  return "locked";
}

function getStatusLabel(status) {
  const labels = {
    completed: "Concluído",
    available: "Disponível",
    locked: "Bloqueado",
    planned: "Em estrutura",
  };

  return labels[status];
}

function syncProgressState() {
  const totalLessons = getTotalExpectedLessons();
  const completedLessons = getCompletedLessonCount();

  state.overallProgress = totalLessons
    ? Math.round((completedLessons / totalLessons) * 100)
    : 0;
  state.certificateUnlocked =
    state.finalExamApproved && Boolean(state.finalProject.completed);
}

function render() {
  syncProgressState();
  renderModules();
  renderProgress();
  renderLibrary();
  renderProjectFinal();
  renderFavorites();
  renderExam();
  renderCertificate();
  renderSearchResults("");

  if (state.activeModuleId) {
    openModule(state.activeModuleId, state.activeLessonId, false);
  } else {
    resetClassroom();
  }
}

function renderModules() {
  elements.moduleGrid.innerHTML = app.modules
    .map((module, index) => {
      const status = getModuleStatus(module, index);
      const completedLessons = getCompletedLessonCount(module.id);
      const progress = module.lessonCount
        ? Math.round((completedLessons / module.lessonCount) * 100)
        : 0;
      const isDisabled = status === "locked" || status === "planned";

      return `
        <article class="module-card is-${status}" data-module-id="${module.id}">
          <div class="module-topline">
            <span class="module-number">Módulo ${String(module.order).padStart(2, "0")}</span>
            <span class="status-pill status-${status}">${getStatusLabel(status)}</span>
          </div>
          <h3>${escapeHTML(module.title)}</h3>
          <p class="module-description">${escapeHTML(module.description)}</p>
          <div class="module-card-progress">
            <span>${completedLessons}/${module.lessonCount} aulas</span>
            <strong>${progress}%</strong>
          </div>
          <div class="progress-track progress-track-mini" aria-hidden="true">
            <span style="width: ${progress}%"></span>
          </div>
          <div class="card-actions">
            <button class="btn btn-secondary" type="button" data-action="open-module" ${
              isDisabled ? "disabled" : ""
            }>
              ${status === "completed" ? "Revisar módulo" : "Acessar módulo"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProgress() {
  const totalLessons = getTotalExpectedLessons();
  const completedLessons = getCompletedLessonCount();

  elements.progressPercent.textContent = `${state.overallProgress}%`;
  elements.moduleCounter.textContent = `${getCompletedModuleCount()}/${app.modules.length}`;
  elements.lessonCounter.textContent = `${completedLessons}/${totalLessons}`;
  elements.progressBar.setAttribute(
    "aria-valuenow",
    String(state.overallProgress),
  );
  elements.progressBar.querySelector("span").style.width =
    `${state.overallProgress}%`;
}

async function openModule(moduleId, lessonId = null, shouldScroll = true) {
  const meta = getModuleMeta(moduleId);
  const index = getModuleIndex(moduleId);

  if (!meta || getModuleStatus(meta, index) === "locked") {
    return;
  }

  const module = await loadModule(moduleId);

  if (!module) {
    return;
  }

  const targetLesson =
    module.lessons.find((lesson) => lesson.id === lessonId) ||
    module.lessons.find((lesson) => !isLessonCompleted(module.id, lesson.id)) ||
    module.lessons[0];

  state.activeModuleId = module.id;
  state.activeLessonId = targetLesson.id;
  saveState();

  renderClassroom(module, targetLesson);
  renderModules();

  if (shouldScroll) {
    document.querySelector("#sala-aula").scrollIntoView({ behavior: "smooth" });
  }
}

function renderClassroom(module, lesson) {
  const meta = getModuleMeta(module.id);
  const moduleIndex = getModuleIndex(module.id);
  const completedLessons = getCompletedLessonCount(module.id);
  const progress = meta.lessonCount
    ? Math.round((completedLessons / meta.lessonCount) * 100)
    : 0;
  const lessonIndex = module.lessons.findIndex((item) => item.id === lesson.id);
  const completed = isLessonCompleted(module.id, lesson.id);
  const favorite = state.favorites.includes(getLessonKey(module.id, lesson.id));

  elements.classroomDescription.textContent =
    "Conteúdo carregado dinamicamente a partir dos arquivos JSON do LMS.";
  elements.classroomModuleNumber.textContent = `Módulo ${String(moduleIndex + 1).padStart(2, "0")}`;
  elements.classroomModuleTitle.textContent = module.title;
  elements.classroomModuleDescription.textContent = module.description;
  elements.moduleProgressPercent.textContent = `${progress}%`;
  elements.moduleProgressBar.setAttribute("aria-valuenow", String(progress));
  elements.moduleProgressBar.querySelector("span").style.width = `${progress}%`;
  elements.moduleLessonCounter.textContent = `${completedLessons} de ${meta.lessonCount} aulas concluídas`;
  elements.lessonStatusPill.textContent = completed ? "Concluída" : "Pendente";
  elements.lessonStatusPill.className = `status-pill ${
    completed ? "status-completed" : "status-locked"
  }`;
  elements.favoriteLesson.disabled = false;
  elements.favoriteLesson.textContent = favorite
    ? "Remover favorito"
    : "Favoritar aula";
  elements.lessonKicker.textContent = `${module.title} • Aula ${lesson.order}`;
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonSummary.textContent = lesson.summary || lesson.objective || "";
  elements.lessonVerse.textContent =
    (lesson.biblicalReferences || []).join(", ") || "-";
  elements.lessonText.innerHTML = renderLessonBody(lesson);
  elements.lessonQuestion.textContent =
    lesson.content?.challenge || "Sem desafio cadastrado.";
  elements.completeCurrentLesson.disabled = completed;
  elements.completeCurrentLesson.textContent = completed
    ? "Aula concluída"
    : "Marcar aula como concluída";
  elements.previousLesson.disabled = lessonIndex === 0;
  elements.nextLesson.disabled = lessonIndex === module.lessons.length - 1;
  elements.lessonNotes.value =
    state.notes[getLessonKey(module.id, lesson.id)] || "";
  elements.saveNotes.disabled = false;

  renderLessonList(module);
  renderQuizPanel(lesson.quizId, elements.lessonQuiz, "lesson");
  renderModuleAssessment(module);
}

function renderLessonBody(lesson) {
  const caseStudy = lesson.content?.caseStudy;
  const exercises = lesson.content?.exercises || [];
  const bibliography = lesson.bibliography || [];

  return `
    <section>
      <h4>Objetivo</h4>
      <p>${escapeHTML(lesson.objective || "Objetivo não cadastrado.")}</p>
    </section>
    <section>
      <h4>Conteúdo</h4>
      <p>${escapeHTML(lesson.content?.main || "Conteúdo em preparação.")}</p>
    </section>
    <section>
      <h4>Estudo de caso</h4>
      <p><strong>${escapeHTML(caseStudy?.title || "Caso não cadastrado")}</strong></p>
      <p>${escapeHTML(caseStudy?.problem || "")}</p>
      <p>${escapeHTML(caseStudy?.analysis || "")}</p>
      <p>${escapeHTML(caseStudy?.solution || "")}</p>
    </section>
    <section>
      <h4>Exercícios</h4>
      <ul>${exercises.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    </section>
    <section>
      <h4>Bibliografia</h4>
      <ul>${bibliography
        .map(
          (item) =>
            `<li>${escapeHTML(item.title)} — ${escapeHTML(item.author)} (${escapeHTML(item.type)})</li>`,
        )
        .join("")}</ul>
    </section>
  `;
}

function renderLessonList(module) {
  elements.lessonList.innerHTML = module.lessons
    .map((lesson) => {
      const completed = isLessonCompleted(module.id, lesson.id);
      const active = state.activeLessonId === lesson.id;

      return `
        <button class="lesson-item ${active ? "is-active" : ""} ${
          completed ? "is-completed" : ""
        }" type="button" data-action="select-lesson" data-lesson-id="${lesson.id}">
          <span class="lesson-item-index">${String(lesson.order).padStart(2, "0")}</span>
          <span>
            <strong>${escapeHTML(lesson.title)}</strong>
            <small>${completed ? "Concluída" : "Pendente"}</small>
          </span>
        </button>
      `;
    })
    .join("");
}

async function renderQuizPanel(quizId, target, scope) {
  if (!quizId) {
    target.innerHTML = "<p>Quiz ainda não configurado para este item.</p>";
    return;
  }

  const quiz = await loadQuiz(quizId);
  const attempt = state.quizAttempts[quiz.id];

  target.innerHTML = `
    <form class="quiz-form" data-quiz-id="${quiz.id}" data-scope="${scope}">
      <h5>${escapeHTML(quiz.title)}</h5>
      ${quiz.questions.map(renderQuestion).join("")}
      <button class="btn btn-primary" type="submit">Enviar respostas</button>
      <p class="quiz-result">${attempt ? `Última nota: ${attempt.score}%` : "Sem tentativa registrada."}</p>
    </form>
  `;
}

function renderQuestion(question, index) {
  if (question.type === "reflection") {
    return `
      <fieldset>
        <legend>${index + 1}. ${escapeHTML(question.prompt)}</legend>
        <textarea name="${question.id}" rows="3"></textarea>
      </fieldset>
    `;
  }

  if (question.type === "true-false") {
    return `
      <fieldset>
        <legend>${index + 1}. ${escapeHTML(question.prompt)}</legend>
        <label><input type="radio" name="${question.id}" value="true" /> Verdadeiro</label>
        <label><input type="radio" name="${question.id}" value="false" /> Falso</label>
      </fieldset>
    `;
  }

  return `
    <fieldset>
      <legend>${index + 1}. ${escapeHTML(question.prompt)}</legend>
      ${question.options
        .map(
          (option) =>
            `<label><input type="radio" name="${question.id}" value="${escapeHTML(option)}" /> ${escapeHTML(option)}</label>`,
        )
        .join("")}
    </fieldset>
  `;
}

function gradeQuiz(quiz, formData) {
  const gradable = quiz.questions.filter(
    (question) => question.type !== "reflection",
  );
  const correct = gradable.filter((question) => {
    const answer = formData.get(question.id);
    return String(answer) === String(question.answer);
  }).length;

  return gradable.length ? Math.round((correct / gradable.length) * 100) : 100;
}

async function renderModuleAssessment(module) {
  elements.moduleAssessmentTitle.textContent = `Avaliação — ${module.title}`;
  elements.moduleAssessmentStatus.textContent =
    "Avaliação carregada dinamicamente a partir de /data/quizzes.";
  await renderQuizPanel(
    module.assessmentQuizId,
    elements.moduleAssessmentQuiz,
    "module",
  );
}

function renderLibrary() {
  elements.libraryGrid.innerHTML = app.library.categories
    .map(
      (category) => `
        <article class="resource-card" data-category-id="${category.id}">
          <span class="resource-type">${escapeHTML(category.title)}</span>
          <h3>${escapeHTML(category.description)}</h3>
          <ul>
            ${category.resources
              .map(
                (resource) =>
                  `<li><strong>${escapeHTML(resource.title)}</strong><span>${escapeHTML(resource.type)}</span></li>`,
              )
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderProjectFinal() {
  if (!app.project) {
    return;
  }

  elements.projectDescription.textContent = app.project.description;
  elements.projectSections.innerHTML = app.project.sections
    .map(
      (section) => `
        <label class="project-item">
          <span>${escapeHTML(section.title)}</span>
          <textarea data-project-section="${section.id}" rows="4">${escapeHTML(
            state.finalProject.sections[section.id] || "",
          )}</textarea>
        </label>
      `,
    )
    .join("");
  elements.completeProject.textContent = state.finalProject.completed
    ? "Projeto final concluído"
    : "Marcar projeto final como concluído";
}

function renderFavorites() {
  const favoriteLessons = state.favorites;

  elements.favoritesList.innerHTML = favoriteLessons.length
    ? favoriteLessons
        .map((key) => {
          const [moduleId, lessonId] = key.split(":");
          const module = getModuleMeta(moduleId);
          return `
            <button class="mini-link" type="button" data-favorite-module="${moduleId}" data-favorite-lesson="${lessonId}">
              ${escapeHTML(module?.title || moduleId)} • ${escapeHTML(lessonId)}
            </button>
          `;
        })
        .join("")
    : "<p>Nenhuma aula favoritada.</p>";
}

function renderSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  const records = normalized
    ? app.searchIndex.records.filter((record) =>
        [record.title, record.summary, ...(record.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(normalized),
      )
    : [];

  elements.searchResults.innerHTML = records.length
    ? records
        .map(
          (record) => `
            <button class="search-result-item" type="button" data-search-type="${record.type}" data-module-id="${record.moduleId || ""}" data-lesson-id="${record.lessonId || ""}">
              <strong>${escapeHTML(record.title)}</strong>
              <span>${escapeHTML(record.summary)}</span>
            </button>
          `,
        )
        .join("")
    : "<p>Digite um termo para pesquisar conteúdos indexados.</p>";
}

function renderExam() {
  const allLessonsCompleted =
    getCompletedLessonCount() >= getTotalExpectedLessons();

  elements.approveExam.disabled =
    !allLessonsCompleted || state.finalExamApproved;

  if (state.finalExamApproved) {
    elements.examPill.textContent = "Aprovada";
    elements.examPill.className = "status-pill status-completed";
    elements.examMessage.textContent =
      "A aprovação final foi registrada. O certificado depende também do projeto final.";
    elements.approveExam.textContent = "Aprovação registrada";
    return;
  }

  elements.examPill.textContent = allLessonsCompleted
    ? "Liberada"
    : "Bloqueada";
  elements.examPill.className = `status-pill ${
    allLessonsCompleted ? "status-available" : "status-locked"
  }`;
  elements.examMessage.textContent = allLessonsCompleted
    ? "Todas as aulas esperadas foram concluídas. A prova final está liberada."
    : "Conclua todas as aulas esperadas para liberar a prova final.";
}

function renderCertificate() {
  elements.certificatePreview.classList.toggle(
    "is-unlocked",
    state.certificateUnlocked,
  );
  elements.certificateStatus.textContent = state.certificateUnlocked
    ? "Liberado"
    : "Bloqueado";
  elements.certificateMessage.textContent = state.certificateUnlocked
    ? "Certificado liberado após aprovação final e projeto final concluído."
    : "O certificado será liberado após aprovação final e conclusão do projeto final.";
  elements.certificateText.textContent = state.certificateUnlocked
    ? `Concedido pela conclusão da formação ${app.certificate?.courseName || ""}.`
    : "Bloqueado até cumprir os requisitos de certificação.";
}

function resetClassroom() {
  elements.classroomDescription.textContent =
    "Selecione um módulo disponível para carregar aulas via JSON.";
  elements.classroomModuleNumber.textContent = "Módulo";
  elements.classroomModuleTitle.textContent = "Nenhum módulo selecionado";
  elements.classroomModuleDescription.textContent =
    "A arquitetura está preparada para centenas de aulas dinâmicas.";
  elements.moduleProgressPercent.textContent = "0%";
  elements.moduleProgressBar.querySelector("span").style.width = "0%";
  elements.moduleLessonCounter.textContent = "0 aulas concluídas";
  elements.lessonList.innerHTML =
    '<p class="empty-state">A lista será carregada a partir do JSON do módulo.</p>';
  elements.lessonTitle.textContent = "Selecione uma aula";
  elements.lessonSummary.textContent =
    "O conteúdo estruturado será renderizado nesta área.";
  elements.lessonText.innerHTML = "<p>Nenhuma aula carregada.</p>";
  elements.lessonVerse.textContent = "-";
  elements.lessonQuestion.textContent = "-";
  elements.favoriteLesson.disabled = true;
  elements.lessonNotes.value = "";
  elements.saveNotes.disabled = true;
  elements.lessonQuiz.innerHTML = "Selecione uma aula para carregar o quiz.";
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

elements.moduleGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='open-module']");
  const card = event.target.closest("[data-module-id]");

  if (button && card) {
    openModule(card.dataset.moduleId);
  }
});

elements.lessonList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='select-lesson']");

  if (button && state.activeModuleId) {
    openModule(state.activeModuleId, button.dataset.lessonId);
  }
});

elements.startCourse.addEventListener("click", () => {
  const firstAvailable = app.modules.find(
    (module, index) => getModuleStatus(module, index) === "available",
  );

  if (firstAvailable) {
    openModule(firstAvailable.id);
  }
});

elements.completeCurrentLesson.addEventListener("click", () => {
  if (!state.activeModuleId || !state.activeLessonId) {
    return;
  }

  const lessonKey = getLessonKey(state.activeModuleId, state.activeLessonId);

  if (!state.completedLessons.includes(lessonKey)) {
    state.completedLessons.push(lessonKey);
  }

  saveState();
  openModule(state.activeModuleId, state.activeLessonId, false);
});

elements.previousLesson.addEventListener("click", async () => {
  const module = await loadModule(state.activeModuleId);
  const index = module.lessons.findIndex(
    (lesson) => lesson.id === state.activeLessonId,
  );
  const lesson = module.lessons[index - 1];

  if (lesson) {
    openModule(module.id, lesson.id);
  }
});

elements.nextLesson.addEventListener("click", async () => {
  const module = await loadModule(state.activeModuleId);
  const index = module.lessons.findIndex(
    (lesson) => lesson.id === state.activeLessonId,
  );
  const lesson = module.lessons[index + 1];

  if (lesson) {
    openModule(module.id, lesson.id);
  }
});

elements.favoriteLesson.addEventListener("click", () => {
  const lessonKey = getLessonKey(state.activeModuleId, state.activeLessonId);
  const favoriteIndex = state.favorites.indexOf(lessonKey);

  if (favoriteIndex >= 0) {
    state.favorites.splice(favoriteIndex, 1);
  } else {
    state.favorites.push(lessonKey);
  }

  saveState();
  openModule(state.activeModuleId, state.activeLessonId, false);
});

elements.saveNotes.addEventListener("click", () => {
  const lessonKey = getLessonKey(state.activeModuleId, state.activeLessonId);
  state.notes[lessonKey] = elements.lessonNotes.value;
  saveState();
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest(".quiz-form");

  if (!form) {
    return;
  }

  event.preventDefault();

  const quiz = await loadQuiz(form.dataset.quizId);
  const score = gradeQuiz(quiz, new FormData(form));

  state.quizAttempts[quiz.id] = {
    score,
    passed: score >= quiz.passScore,
    completedAt: new Date().toISOString(),
  };

  if (form.dataset.scope === "module") {
    state.moduleAssessments[state.activeModuleId] = state.quizAttempts[quiz.id];
  }

  saveState();
  openModule(state.activeModuleId, state.activeLessonId, false);
});

elements.globalSearch.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

elements.searchResults.addEventListener("click", (event) => {
  const item = event.target.closest("[data-search-type]");

  if (item?.dataset.searchType === "lesson") {
    openModule(item.dataset.moduleId, item.dataset.lessonId);
  }
});

elements.favoritesList.addEventListener("click", (event) => {
  const item = event.target.closest("[data-favorite-module]");

  if (item) {
    openModule(item.dataset.favoriteModule, item.dataset.favoriteLesson);
  }
});

elements.projectSections.addEventListener("input", (event) => {
  const field = event.target.closest("[data-project-section]");

  if (field) {
    state.finalProject.sections[field.dataset.projectSection] = field.value;
    saveState();
  }
});

elements.completeProject.addEventListener("click", () => {
  state.finalProject.completed = true;
  saveState();
  renderProjectFinal();
  renderCertificate();
});

elements.approveExam.addEventListener("click", () => {
  state.finalExamApproved = true;
  saveState();
  renderExam();
  renderCertificate();
});

elements.backToModules.addEventListener("click", () => {
  document.querySelector("#modulos").scrollIntoView({ behavior: "smooth" });
});

elements.resetProgress.addEventListener("click", () => {
  const shouldReset = window.confirm("Deseja reiniciar o progresso salvo?");

  if (!shouldReset) {
    return;
  }

  Object.assign(state, structuredClone(initialState));
  saveState();
  render();
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-nav]");

  if (!link) {
    return;
  }

  const target = document.querySelector(link.getAttribute("href"));

  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  }
});

initializeLms();
