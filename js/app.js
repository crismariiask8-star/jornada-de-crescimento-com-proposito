const STORAGE_KEY = "jornadaCrescimentoProposito:v2";
const LEGACY_STORAGE_KEY = "jornadaCrescimentoProposito:v1";

const modules = [
  {
    id: "identidade-proposito",
    title: "Identidade e Propósito",
    description:
      "Fundamentos para reconhecer valor, vocação e direção a partir da identidade em Deus.",
    verse: "Efésios 2:10",
    focus: "Clareza de identidade, dons e propósito pessoal.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Compreenda identidade como ponto de partida para uma vida com propósito.",
        content:
          "Identidade não começa no desempenho, na opinião das pessoas ou nas conquistas visíveis. Na perspectiva cristã, ela nasce da convicção de que fomos criados por Deus com valor, dignidade e responsabilidade.\n\nQuando a identidade está confusa, o propósito vira pressão. Quando a identidade está firmada, o propósito se torna resposta: vivemos para honrar a Deus com quem somos, com o que temos e com o modo como servimos.",
        verse: "Efésios 2:10",
        question:
          "Que rótulo ou expectativa externa você precisa deixar de usar como medida da sua identidade?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary:
          "Transforme identidade em decisões, prioridades e postura diária.",
        content:
          "Propósito se torna concreto quando aparece na agenda, nas escolhas e na maneira como lidamos com responsabilidades. Uma pessoa que sabe quem é consegue dizer sim com direção e não com paz.\n\nNesta semana, observe três áreas: tempo, relacionamentos e trabalho. Pergunte se suas escolhas refletem medo de aprovação ou fidelidade ao chamado que Deus tem amadurecido em você.",
        verse: "Colossenses 3:23",
        question:
          "Qual decisão simples desta semana pode alinhar melhor sua rotina ao propósito que você reconhece?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary: "Escreva uma declaração pessoal de identidade e propósito.",
        content:
          "Reserve alguns minutos em silêncio e escreva uma declaração curta começando com: “Eu sou...” e “Fui chamado para...”. Evite frases genéricas. Use palavras que expressem caráter, serviço, dons e responsabilidades reais.\n\nDepois, transforme essa declaração em uma prática: uma conversa que precisa ser honesta, um compromisso que precisa ser assumido ou um limite que precisa ser estabelecido.",
        verse: "Jeremias 1:5",
        question:
          "Qual frase resumiria, com humildade e clareza, quem você entende que Deus está formando em você?",
      },
    ],
  },
  {
    id: "disciplina-habitos",
    title: "Disciplina e Hábitos",
    description:
      "Práticas consistentes para transformar intenção em maturidade, rotina e perseverança.",
    verse: "1 Coríntios 9:25",
    focus: "Ritmos semanais, constância e domínio próprio.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Veja disciplina como mordomia da vida, não como rigidez sem alma.",
        content:
          "Disciplina cristã não é tentativa de provar valor. É resposta madura a um Deus que nos confiou tempo, corpo, mente e oportunidades. Hábitos são pequenas liturgias: repetimos algo até que isso forme nossos desejos e decisões.\n\nUma vida sem ritmo fica refém da urgência. Uma vida com bons hábitos cria espaço para oração, estudo, trabalho responsável, descanso e serviço.",
        verse: "1 Coríntios 9:25",
        question:
          "Em qual área a falta de rotina tem custado mais energia espiritual, emocional ou prática?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary:
          "Construa um ciclo simples de hábito com gatilho, ação e revisão.",
        content:
          "Escolha um hábito pequeno o suficiente para ser repetido por sete dias. Defina um gatilho claro, como “após acordar” ou “antes de dormir”, e uma ação objetiva, como dez minutos de leitura bíblica, planejamento ou exercício.\n\nAo final do dia, registre apenas duas coisas: se cumpriu e o que dificultou. A revisão honesta evita culpa improdutiva e transforma tropeços em aprendizagem.",
        verse: "Provérbios 21:5",
        question:
          "Qual hábito pequeno, se repetido por uma semana, poderia mudar seu senso de direção?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary:
          "Identifique o hábito que precisa ser protegido e o que precisa ser abandonado.",
        content:
          "Faça duas listas curtas: hábitos que fortalecem sua fé e hábitos que drenam seu foco. Não escreva para se condenar; escreva para enxergar padrões.\n\nDepois escolha uma troca prática: reduzir uma distração e inserir uma prática formativa no lugar. Disciplina cresce melhor quando existe substituição sábia, não apenas proibição.",
        verse: "Hebreus 12:11",
        question:
          "Qual troca de hábito seria um ato concreto de domínio próprio hoje?",
      },
    ],
  },
  {
    id: "renovacao-mente",
    title: "Renovação da Mente",
    description:
      "Caminhos para substituir padrões limitantes por pensamentos alinhados à verdade.",
    verse: "Romanos 12:2",
    focus: "Mentalidade, discernimento e tomada de decisão.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Entenda a renovação da mente como processo espiritual e prático.",
        content:
          "A mente é um campo de interpretação. Ela atribui significado ao que vivemos, decide o que tememos e alimenta o que buscamos. Por isso, Romanos 12 fala de transformação pela renovação da mente.\n\nRenovar a mente não é negar problemas. É aprender a discernir pensamentos, confrontar mentiras e receber a verdade de Deus como base para decisões mais maduras.",
        verse: "Romanos 12:2",
        question:
          "Qual pensamento repetido tem guiado suas decisões sem ser confrontado pela verdade?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary:
          "Use um roteiro simples para avaliar pensamentos e responder com verdade.",
        content:
          "Quando perceber ansiedade, comparação ou desânimo, pare e nomeie o pensamento principal. Em seguida, pergunte: isso é verdadeiro, completo e coerente com o caráter de Deus?\n\nDepois escreva uma resposta bíblica e uma ação pequena. A mente é renovada quando a verdade deixa de ser apenas ideia e se torna direção prática.",
        verse: "Filipenses 4:8",
        question:
          "Que verdade bíblica você precisa declarar antes de tomar sua próxima decisão importante?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary: "Mapeie um padrão mental e escolha uma resposta renovada.",
        content:
          "Descreva uma situação recente em que você reagiu de forma automática. Identifique o pensamento, a emoção, a reação e a consequência. Esse mapa revela o caminho interno que precisa de renovação.\n\nAgora escreva uma nova resposta: pensamento alinhado à verdade, emoção acolhida com maturidade e ação obediente. Pratique essa resposta na próxima oportunidade.",
        verse: "2 Coríntios 10:5",
        question:
          "Qual reação automática você deseja substituir por uma resposta mais sábia?",
      },
    ],
  },
  {
    id: "inteligencia-emocional-crista",
    title: "Inteligência Emocional Cristã",
    description:
      "Maturidade para lidar com emoções, conflitos, ansiedade e pressões com sabedoria.",
    verse: "Provérbios 4:23",
    focus: "Autoconsciência, domínio emocional e restauração.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Aprenda a tratar emoções como sinais que precisam de cuidado e direção.",
        content:
          "Emoções não são inimigas da fé. Elas revelam desejos, dores, limites e necessidades. A maturidade cristã não anestesia sentimentos; ela os submete à presença de Deus e à sabedoria.\n\nGuardar o coração, como ensina Provérbios, não significa trancar tudo dentro. Significa vigiar o que entra, discernir o que governa e escolher respostas que preservem vida.",
        verse: "Provérbios 4:23",
        question:
          "Qual emoção você costuma ignorar até que ela se transforme em reação desproporcional?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary:
          "Use pausa, nomeação e resposta para lidar melhor com pressões.",
        content:
          "Antes de responder sob pressão, pratique três passos: pause, nomeie a emoção e escolha a resposta. Dizer “estou irritado”, “estou com medo” ou “estou frustrado” reduz o impulso de agir no automático.\n\nDepois pergunte: qual resposta honra a Deus, respeita pessoas e protege meu coração? Essa pergunta transforma emoção em oportunidade de maturidade.",
        verse: "Tiago 1:19",
        question:
          "Em qual conversa você precisa praticar mais escuta antes de responder?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary:
          "Construa um plano pessoal para momentos de sobrecarga emocional.",
        content:
          "Escreva os sinais de que você está chegando ao limite: tom de voz, isolamento, pressa, pensamentos acelerados ou vontade de desistir. Depois defina uma resposta saudável para cada sinal.\n\nInclua oração breve, respiração, pedido de ajuda, conversa honesta ou descanso. Maturidade emocional também é humildade para reconhecer limites.",
        verse: "Salmos 139:23-24",
        question:
          "Que sinal interno você precisa levar mais a sério antes de tomar decisões?",
      },
    ],
  },
  {
    id: "financas-sabedoria",
    title: "Finanças com Sabedoria",
    description:
      "Princípios para organizar recursos, praticar generosidade e construir estabilidade.",
    verse: "Provérbios 21:5",
    focus: "Orçamento, reservas, prioridades e contentamento.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Enxergue finanças como mordomia, contentamento e responsabilidade.",
        content:
          "Dinheiro revela prioridades. A Bíblia trata finanças com seriedade porque recursos, desejos e segurança competem pelo coração. Sabedoria financeira começa quando reconhecemos Deus como fonte e nós como administradores.\n\nOrganização, generosidade e prudência não são temas separados da espiritualidade. Eles expressam confiança, domínio próprio e cuidado com o futuro.",
        verse: "Provérbios 21:5",
        question:
          "O que seus gastos recentes revelam sobre suas prioridades e preocupações?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary: "Organize entradas, saídas, dívidas, generosidade e reserva.",
        content:
          "Faça um mapa simples: quanto entra, quanto sai, quanto está comprometido e quanto pode ser direcionado com intenção. Não comece tentando controlar tudo; comece enxergando a realidade com honestidade.\n\nDepois defina quatro destinos: necessidades, compromissos, generosidade e reserva. A clareza reduz ansiedade e abre caminho para decisões mais responsáveis.",
        verse: "Lucas 14:28",
        question:
          "Qual número financeiro você precisa encarar com honestidade nesta semana?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary:
          "Defina uma decisão financeira alinhada a sabedoria e contentamento.",
        content:
          "Reflita sobre uma compra, dívida ou compromisso financeiro atual. Pergunte se essa decisão nasce de necessidade, vaidade, medo, pressão social ou propósito.\n\nEscolha uma atitude concreta: renegociar, cancelar, poupar, contribuir, planejar ou esperar. Esperar também pode ser uma forma madura de fé e sabedoria.",
        verse: "1 Timóteo 6:6",
        question:
          "Qual decisão financeira mostraria contentamento e responsabilidade agora?",
      },
    ],
  },
  {
    id: "familia-relacionamentos-honra",
    title: "Família, Relacionamentos e Honra",
    description:
      "Bases para cultivar honra, reconciliação, presença e comunicação saudável.",
    verse: "Romanos 12:10",
    focus: "Relacionamentos, escuta, perdão e serviço no lar.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Compreenda honra como postura ativa de valor, respeito e cuidado.",
        content:
          "Honra não é concordar com tudo nem esconder problemas. Honra é reconhecer valor, tratar pessoas com dignidade e buscar caminhos de paz sem abandonar a verdade.\n\nFamília e relacionamentos são ambientes onde o caráter é treinado todos os dias. A espiritualidade madura aparece no tom de voz, na escuta, no perdão e na disposição de servir.",
        verse: "Romanos 12:10",
        question:
          "Em qual relacionamento sua postura precisa expressar mais honra e menos defesa?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary: "Pratique comunicação clara, escuta respeitosa e reparação.",
        content:
          "Escolha uma conversa importante e prepare três elementos: o fato observado, o sentimento envolvido e o pedido claro. Evite acusações globais como “você sempre” ou “você nunca”.\n\nHonra também exige escutar. Antes de responder, repita com suas palavras o que entendeu. Essa prática simples reduz ruído e abre espaço para reconciliação.",
        verse: "Efésios 4:29",
        question:
          "Que conversa você precisa conduzir com mais clareza, mansidão e verdade?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary:
          "Identifique uma atitude de serviço que fortaleça um relacionamento.",
        content:
          "Pense em alguém próximo que precisa de presença, ajuda ou reconhecimento. Escreva uma forma prática de servir essa pessoa nos próximos dias sem esperar aplauso ou retorno imediato.\n\nO serviço cotidiano cura a indiferença. Pequenos atos de honra, quando repetidos, podem reconstruir confiança e tornar o lar um lugar mais saudável.",
        verse: "Gálatas 5:13",
        question:
          "Qual ato de serviço concreto você pode praticar por alguém da sua casa ou círculo próximo?",
      },
    ],
  },
  {
    id: "lideranca-servico",
    title: "Liderança e Serviço",
    description:
      "Uma visão de liderança que começa no caráter e floresce no cuidado com pessoas.",
    verse: "Marcos 10:45",
    focus: "Influência, responsabilidade e serviço ao próximo.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Redefina liderança como influência formada por caráter e serviço.",
        content:
          "Jesus apresenta uma liderança diferente da busca por posição. Liderar é assumir responsabilidade pelo bem de pessoas, usando influência para servir e não para controlar.\n\nAntes de liderar projetos, lideramos atitudes: pontualidade, palavra confiável, humildade para aprender e coragem para fazer o que é correto quando ninguém está vendo.",
        verse: "Marcos 10:45",
        question:
          "Onde você já exerce influência e precisa tratá-la como responsabilidade espiritual?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary:
          "Mapeie pessoas, necessidades e uma ação de liderança servidora.",
        content:
          "Liste três pessoas ou ambientes que são impactados por suas escolhas. Pergunte: o que essas pessoas precisam receber de mim com mais consistência, clareza ou cuidado?\n\nDepois escolha uma ação de liderança servidora: orientar alguém, resolver uma pendência, assumir uma responsabilidade ou reconhecer publicamente o esforço de outra pessoa.",
        verse: "1 Pedro 4:10",
        question:
          "Qual responsabilidade você tem evitado que poderia se tornar serviço ao próximo?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary: "Avalie motivações e defina um padrão de liderança saudável.",
        content:
          "Reflita sobre suas motivações: você deseja liderar para ser visto, para controlar ou para contribuir? Todos enfrentamos misturas internas, e reconhecer isso é parte da formação do caráter.\n\nEscreva um padrão pessoal de liderança: como você deseja tratar pessoas, tomar decisões e lidar com erros. Esse padrão servirá como régua quando a pressão aumentar.",
        verse: "Filipenses 2:3-4",
        question:
          "Qual motivação precisa ser purificada para que sua liderança sirva melhor?",
      },
    ],
  },
  {
    id: "chamado-missao-futuro",
    title: "Chamado, Missão e Futuro",
    description:
      "Integração da jornada para viver com direção, coragem e impacto no longo prazo.",
    verse: "Filipenses 3:14",
    focus: "Missão pessoal, legado e próximos passos.",
    lessons: [
      {
        id: "fundamento",
        title: "Aula 1: Fundamento",
        summary:
          "Entenda chamado como fidelidade progressiva, não apenas um grande evento.",
        content:
          "Chamado não é somente uma resposta dramática sobre o futuro. Muitas vezes ele se revela na fidelidade às responsabilidades de hoje, no amadurecimento do caráter e na disposição de servir onde Deus já nos colocou.\n\nMissão integra dons, dores, oportunidades e obediência. O futuro é construído por pequenas decisões fiéis repetidas ao longo do tempo.",
        verse: "Filipenses 3:14",
        question:
          "Que responsabilidade atual pode estar formando você para uma missão maior?",
      },
      {
        id: "aplicacao",
        title: "Aula 2: Aplicação prática",
        summary: "Transforme visão de futuro em próximos passos mensuráveis.",
        content:
          "Escreva uma visão simples para os próximos doze meses em quatro áreas: fé, família, trabalho/estudos e serviço. Depois escolha um próximo passo para cada área.\n\nEvite metas grandiosas sem rotina. Uma visão cristã de futuro precisa de oração, conselho, planejamento e coragem para obedecer no que já está claro.",
        verse: "Habacuque 2:2",
        question:
          "Qual próximo passo mensurável aproxima sua vida da missão que você deseja viver?",
      },
      {
        id: "reflexao",
        title: "Aula 3: Exercício de reflexão",
        summary:
          "Faça uma síntese da jornada e defina seu compromisso de continuidade.",
        content:
          "Revise os oito módulos e escreva três aprendizados que você não quer perder. Em seguida, escolha uma prática semanal que manterá sua formação ativa após o curso.\n\nCrescimento com propósito não termina no certificado. Ele continua no modo como você ora, decide, trabalha, cuida de pessoas e serve ao próximo com perseverança.",
        verse: "2 Timóteo 4:7",
        question:
          "Qual compromisso simples ajudará você a continuar crescendo depois desta jornada?",
      },
    ],
  },
];

const initialState = {
  completedLessons: [],
  activeModuleId: null,
  activeLessonId: null,
  overallProgress: 0,
  examUnlocked: false,
  examApproved: false,
  certificateUnlocked: false,
};

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
  examPill: document.querySelector("#examPill"),
  examMessage: document.querySelector("#examMessage"),
  approveExam: document.querySelector("#approveExam"),
  certificatePreview: document.querySelector("#certificatePreview"),
  certificateMessage: document.querySelector("#certificateMessage"),
  certificateText: document.querySelector("#certificateText"),
  resetProgress: document.querySelector("#resetProgress"),
  navLinks: document.querySelectorAll("[data-nav]"),
};

const state = loadState();

function getLessonKey(moduleId, lessonId) {
  return `${moduleId}:${lessonId}`;
}

function getAllLessonKeys() {
  return modules.flatMap((module) =>
    module.lessons.map((lesson) => getLessonKey(module.id, lesson.id)),
  );
}

function getModuleById(moduleId) {
  return modules.find((module) => module.id === moduleId) || null;
}

function getModuleIndex(moduleId) {
  return modules.findIndex((module) => module.id === moduleId);
}

function getActiveLesson(module) {
  if (!module) {
    return null;
  }

  return (
    module.lessons.find((lesson) => lesson.id === state.activeLessonId) ||
    module.lessons[0]
  );
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function contentToParagraphs(content) {
  return content
    .split("\n\n")
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");
}

function loadState() {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);

    if (rawState) {
      return normalizeState(JSON.parse(rawState));
    }

    const legacyState = JSON.parse(
      localStorage.getItem(LEGACY_STORAGE_KEY) || "null",
    );

    if (!legacyState) {
      return { ...initialState };
    }

    const completedLessons = Array.isArray(legacyState.completedModules)
      ? modules.flatMap((module) =>
          legacyState.completedModules.includes(module.id)
            ? module.lessons.map((lesson) => getLessonKey(module.id, lesson.id))
            : [],
        )
      : [];

    return normalizeState({
      ...initialState,
      completedLessons,
      activeModuleId: legacyState.activeModuleId || null,
      examApproved: Boolean(legacyState.examApproved),
    });
  } catch (error) {
    console.warn("Não foi possível carregar o progresso salvo.", error);
    return { ...initialState };
  }
}

function normalizeState(savedState) {
  const validLessonKeys = getAllLessonKeys();
  const completedLessons = Array.isArray(savedState.completedLessons)
    ? savedState.completedLessons.filter((key) => validLessonKeys.includes(key))
    : [];

  const activeModule = getModuleById(savedState.activeModuleId);
  const activeLesson = activeModule?.lessons.find(
    (lesson) => lesson.id === savedState.activeLessonId,
  );
  const allLessonsCompleted =
    completedLessons.length === validLessonKeys.length;
  const overallProgress = Math.round(
    (completedLessons.length / validLessonKeys.length) * 100,
  );
  const examApproved = Boolean(savedState.examApproved) && allLessonsCompleted;

  return {
    ...initialState,
    ...savedState,
    completedLessons,
    activeModuleId: activeModule ? activeModule.id : null,
    activeLessonId: activeLesson ? activeLesson.id : null,
    overallProgress,
    examUnlocked: allLessonsCompleted,
    examApproved,
    certificateUnlocked: examApproved,
  };
}

function syncDerivedState() {
  const completedLessons = getCompletedLessonCount();
  const totalLessons = getTotalLessonCount();

  state.overallProgress = Math.round((completedLessons / totalLessons) * 100);
  state.examUnlocked = completedLessons === totalLessons;
  state.examApproved = state.examApproved && state.examUnlocked;
  state.certificateUnlocked = state.examApproved;
}

function saveState() {
  syncDerivedState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getTotalLessonCount() {
  return getAllLessonKeys().length;
}

function getCompletedLessonCount() {
  return state.completedLessons.length;
}

function isLessonCompleted(moduleId, lessonId) {
  return state.completedLessons.includes(getLessonKey(moduleId, lessonId));
}

function getModuleCompletedCount(module) {
  return module.lessons.filter((lesson) =>
    isLessonCompleted(module.id, lesson.id),
  ).length;
}

function isModuleCompleted(module) {
  return getModuleCompletedCount(module) === module.lessons.length;
}

function getCompletedModuleCount() {
  return modules.filter((module) => isModuleCompleted(module)).length;
}

function getModuleStatus(index) {
  const module = modules[index];
  const previousModule = modules[index - 1];

  if (isModuleCompleted(module)) {
    return "completed";
  }

  if (index === 0 || isModuleCompleted(previousModule)) {
    return "available";
  }

  return "locked";
}

function getStatusLabel(status) {
  const labels = {
    completed: "Concluído",
    available: "Disponível",
    locked: "Bloqueado",
    pending: "Pendente",
  };

  return labels[status];
}

function getModuleProgress(module) {
  return Math.round(
    (getModuleCompletedCount(module) / module.lessons.length) * 100,
  );
}

function findFirstStudyModule() {
  return (
    modules.find(
      (module, index) =>
        getModuleStatus(index) === "available" && !isModuleCompleted(module),
    ) || modules[0]
  );
}

function findFirstStudyLesson(module) {
  return (
    module.lessons.find((lesson) => !isLessonCompleted(module.id, lesson.id)) ||
    module.lessons[0]
  );
}

function renderModules() {
  elements.moduleGrid.innerHTML = modules
    .map((module, index) => {
      const status = getModuleStatus(index);
      const moduleNumber = String(index + 1).padStart(2, "0");
      const completedLessons = getModuleCompletedCount(module);
      const progress = getModuleProgress(module);
      const isLocked = status === "locked";
      const isActive = state.activeModuleId === module.id;

      return `
        <article class="module-card is-${status} ${
          isActive ? "is-active-module" : ""
        }" data-module-id="${module.id}">
          <div class="module-topline">
            <span class="module-number">Módulo ${moduleNumber}</span>
            <span class="status-pill status-${status}">${getStatusLabel(status)}</span>
          </div>
          <h3>${escapeHTML(module.title)}</h3>
          <p class="module-description">${escapeHTML(module.description)}</p>
          <p class="verse">${escapeHTML(module.verse)}</p>
          <div class="module-card-progress">
            <span>${completedLessons}/${module.lessons.length} aulas</span>
            <strong>${progress}%</strong>
          </div>
          <div class="progress-track progress-track-mini" aria-hidden="true">
            <span style="width: ${progress}%"></span>
          </div>
          <div class="card-actions">
            <button class="btn btn-secondary" type="button" data-action="open-module" ${
              isLocked ? "disabled" : ""
            }>
              ${status === "completed" ? "Revisar módulo" : "Acessar módulo"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateProgress() {
  syncDerivedState();

  const completedLessons = getCompletedLessonCount();
  const totalLessons = getTotalLessonCount();
  const completedModules = getCompletedModuleCount();
  const progress = state.overallProgress;

  elements.progressPercent.textContent = `${progress}%`;
  elements.moduleCounter.textContent = `${completedModules}/${modules.length}`;
  elements.lessonCounter.textContent = `${completedLessons}/${totalLessons}`;
  elements.progressBar.setAttribute("aria-valuenow", String(progress));
  elements.progressBar.querySelector("span").style.width = `${progress}%`;

  elements.examStatus.textContent = state.examApproved
    ? "Aprovada"
    : state.examUnlocked
      ? "Liberada"
      : "Bloqueada";

  elements.certificateStatus.textContent = state.certificateUnlocked
    ? "Liberado"
    : "Bloqueado";

  renderExam();
  renderCertificate();
}

function renderClassroom() {
  const module = getModuleById(state.activeModuleId);

  if (!module || getModuleStatus(getModuleIndex(module.id)) === "locked") {
    resetClassroom();
    return;
  }

  const moduleIndex = getModuleIndex(module.id);
  const lesson = getActiveLesson(module);
  const lessonIndex = module.lessons.findIndex((item) => item.id === lesson.id);
  const completedLessons = getModuleCompletedCount(module);
  const progress = getModuleProgress(module);
  const lessonCompleted = isLessonCompleted(module.id, lesson.id);

  state.activeLessonId = lesson.id;

  elements.classroomDescription.textContent =
    "Continue o estudo pelas aulas internas do módulo selecionado.";
  elements.classroomModuleNumber.textContent = `Módulo ${String(moduleIndex + 1).padStart(2, "0")}`;
  elements.classroomModuleTitle.textContent = module.title;
  elements.classroomModuleDescription.textContent = module.description;
  elements.moduleProgressPercent.textContent = `${progress}%`;
  elements.moduleProgressBar.setAttribute("aria-valuenow", String(progress));
  elements.moduleProgressBar.querySelector("span").style.width = `${progress}%`;
  elements.moduleLessonCounter.textContent = `${completedLessons} de ${module.lessons.length} aulas concluídas`;

  renderLessonList(module);
  renderLessonContent(module, lesson, lessonIndex, lessonCompleted);
}

function renderLessonList(module) {
  elements.lessonList.innerHTML = module.lessons
    .map((lesson, index) => {
      const completed = isLessonCompleted(module.id, lesson.id);
      const active = state.activeLessonId === lesson.id;

      return `
        <button
          class="lesson-item ${active ? "is-active" : ""} ${
            completed ? "is-completed" : ""
          }"
          type="button"
          data-action="select-lesson"
          data-lesson-id="${lesson.id}"
          aria-pressed="${active}"
        >
          <span class="lesson-item-index">${String(index + 1).padStart(2, "0")}</span>
          <span>
            <strong>${escapeHTML(lesson.title)}</strong>
            <small>${completed ? "Concluída" : "Pendente"}</small>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderLessonContent(module, lesson, lessonIndex, lessonCompleted) {
  elements.lessonStatusPill.textContent = lessonCompleted
    ? "Concluída"
    : "Pendente";
  elements.lessonStatusPill.className = `status-pill ${
    lessonCompleted ? "status-completed" : "status-locked"
  }`;
  elements.lessonKicker.textContent = `${module.title} • Aula ${lessonIndex + 1}`;
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonSummary.textContent = lesson.summary;
  elements.lessonVerse.textContent = lesson.verse;
  elements.lessonText.innerHTML = contentToParagraphs(lesson.content);
  elements.lessonQuestion.textContent = lesson.question;
  elements.previousLesson.disabled = lessonIndex === 0;
  elements.nextLesson.disabled = lessonIndex === module.lessons.length - 1;
  elements.completeCurrentLesson.disabled = lessonCompleted;
  elements.completeCurrentLesson.textContent = lessonCompleted
    ? "Aula concluída"
    : "Marcar aula como concluída";
}

function resetClassroom() {
  elements.classroomDescription.textContent =
    "Acesse um módulo disponível para visualizar as aulas, avançar pela trilha e registrar sua conclusão.";
  elements.classroomModuleNumber.textContent = "Módulo";
  elements.classroomModuleTitle.textContent = "Nenhum módulo selecionado";
  elements.classroomModuleDescription.textContent =
    "Clique em “Acessar módulo” para abrir a área de estudo.";
  elements.moduleProgressPercent.textContent = "0%";
  elements.moduleProgressBar.setAttribute("aria-valuenow", "0");
  elements.moduleProgressBar.querySelector("span").style.width = "0%";
  elements.moduleLessonCounter.textContent = "0 de 3 aulas concluídas";
  elements.lessonList.innerHTML =
    '<p class="empty-state">Os tópicos da aula aparecerão quando um módulo for aberto.</p>';
  elements.lessonStatusPill.textContent = "Pendente";
  elements.lessonStatusPill.className = "status-pill status-locked";
  elements.lessonKicker.textContent = "Aula selecionada";
  elements.lessonTitle.textContent = "Selecione uma aula";
  elements.lessonSummary.textContent =
    "O conteúdo da aula aparecerá aqui com fundamento, prática e reflexão.";
  elements.lessonVerse.textContent = "-";
  elements.lessonText.innerHTML =
    "<p>Abra um módulo disponível e escolha uma aula para começar seus estudos.</p>";
  elements.lessonQuestion.textContent =
    "Qual próximo passo prático você deseja assumir nesta jornada?";
  elements.previousLesson.disabled = true;
  elements.completeCurrentLesson.disabled = true;
  elements.completeCurrentLesson.textContent = "Marcar aula como concluída";
  elements.nextLesson.disabled = true;
}

function openModule(moduleId, lessonId = null, shouldScroll = true) {
  const module = getModuleById(moduleId);
  const moduleIndex = getModuleIndex(moduleId);

  if (!module || getModuleStatus(moduleIndex) === "locked") {
    return;
  }

  const targetLesson =
    module.lessons.find((lesson) => lesson.id === lessonId) ||
    findFirstStudyLesson(module);

  state.activeModuleId = module.id;
  state.activeLessonId = targetLesson.id;
  saveState();
  render();

  if (shouldScroll) {
    document.querySelector("#sala-aula").scrollIntoView({ behavior: "smooth" });
  }
}

function selectLesson(lessonId) {
  const module = getModuleById(state.activeModuleId);

  if (!module || !module.lessons.some((lesson) => lesson.id === lessonId)) {
    return;
  }

  state.activeLessonId = lessonId;
  saveState();
  renderClassroom();
}

function completeCurrentLesson() {
  const module = getModuleById(state.activeModuleId);
  const lesson = getActiveLesson(module);

  if (!module || !lesson) {
    return;
  }

  const lessonKey = getLessonKey(module.id, lesson.id);

  if (!state.completedLessons.includes(lessonKey)) {
    state.completedLessons.push(lessonKey);
  }

  saveState();
  render();
}

function moveLesson(direction) {
  const module = getModuleById(state.activeModuleId);
  const lesson = getActiveLesson(module);

  if (!module || !lesson) {
    return;
  }

  const currentIndex = module.lessons.findIndex(
    (item) => item.id === lesson.id,
  );
  const nextLesson = module.lessons[currentIndex + direction];

  if (nextLesson) {
    selectLesson(nextLesson.id);
  }
}

function handleModuleActions(event) {
  const button = event.target.closest("button[data-action]");
  const card = event.target.closest("[data-module-id]");

  if (!button || !card) {
    return;
  }

  if (button.dataset.action === "open-module") {
    openModule(card.dataset.moduleId);
  }
}

function handleLessonActions(event) {
  const button = event.target.closest("button[data-action='select-lesson']");

  if (!button) {
    return;
  }

  selectLesson(button.dataset.lessonId);
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
  const sections = [
    "inicio",
    "modulos",
    "sala-aula",
    "biblioteca",
    "prova",
    "certificado",
  ];
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

function renderExam() {
  elements.approveExam.disabled = !state.examUnlocked || state.examApproved;

  if (state.examApproved) {
    elements.examPill.textContent = "Aprovada";
    elements.examPill.className = "status-pill status-completed";
    elements.examMessage.textContent =
      "A aprovação foi registrada. O certificado está liberado.";
    elements.approveExam.textContent = "Aprovação registrada";
    return;
  }

  if (state.examUnlocked) {
    elements.examPill.textContent = "Liberada";
    elements.examPill.className = "status-pill status-available";
    elements.examMessage.textContent =
      "Todas as aulas foram concluídas. A prova final está liberada.";
    elements.approveExam.textContent = "Registrar aprovação";
    return;
  }

  elements.examPill.textContent = "Bloqueada";
  elements.examPill.className = "status-pill status-locked";
  elements.examMessage.textContent =
    "Conclua todos os módulos e aulas para liberar a prova.";
  elements.approveExam.textContent = "Registrar aprovação";
}

function renderCertificate() {
  elements.certificatePreview.classList.toggle(
    "is-unlocked",
    state.certificateUnlocked,
  );

  if (state.certificateUnlocked) {
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

function resetProgress() {
  const shouldReset = window.confirm(
    "Deseja reiniciar o progresso salvo neste navegador?",
  );

  if (!shouldReset) {
    return;
  }

  state.completedLessons = [];
  state.activeModuleId = null;
  state.activeLessonId = null;
  state.overallProgress = 0;
  state.examUnlocked = false;
  state.examApproved = false;
  state.certificateUnlocked = false;
  saveState();
  render();
}

function render() {
  renderModules();
  updateProgress();
  renderClassroom();
}

elements.moduleGrid.addEventListener("click", handleModuleActions);
elements.lessonList.addEventListener("click", handleLessonActions);
elements.startCourse.addEventListener("click", () => {
  const module = findFirstStudyModule();
  openModule(module.id);
});
elements.previousLesson.addEventListener("click", () => moveLesson(-1));
elements.nextLesson.addEventListener("click", () => moveLesson(1));
elements.completeCurrentLesson.addEventListener("click", completeCurrentLesson);
elements.backToModules.addEventListener("click", () => {
  document.querySelector("#modulos").scrollIntoView({ behavior: "smooth" });
});
elements.approveExam.addEventListener("click", () => {
  if (!state.examUnlocked) {
    return;
  }

  state.examApproved = true;
  saveState();
  render();
  document.querySelector("#certificado").scrollIntoView({ behavior: "smooth" });
});
elements.resetProgress.addEventListener("click", resetProgress);
document.addEventListener("click", handleNavigation);
window.addEventListener("scroll", setActiveNavLink, { passive: true });

render();
setActiveNavLink();
