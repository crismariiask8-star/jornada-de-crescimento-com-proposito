# Jornada de Crescimento com Propósito

Base inicial de uma plataforma web profissional para um curso online de desenvolvimento pessoal com princípios bíblicos.

## Como abrir

Abra o arquivo `index.html` diretamente no navegador.

Também é possível usar uma extensão de servidor local, como Live Server, mas a primeira versão funciona sem instalação de dependências.

## Ferramentas instaladas

O projeto inclui instalações locais do Node.js e do GitHub CLI em `.tools/`, pasta ignorada pelo Git. Para ativar as ferramentas nesta pasta:

```bash
source .envrc
```

Depois disso, use os comandos:

```bash
npm run dev
npm run check
npm run build
npm run preview
npm run format
```

Para conferir o GitHub CLI:

```bash
gh --version
gh auth status
```

## Publicação no GitHub Pages

O workflow `.github/workflows/pages.yml` publica a pasta `dist/` no GitHub Pages usando GitHub Actions.

Antes de publicar, autentique o GitHub CLI:

```bash
gh auth login --hostname github.com --web --git-protocol https --skip-ssh-key --scopes repo,workflow
```

## Estrutura

```text
/
├── .github/
│   └── workflows/
│       └── pages.yml
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   └── hero-course.png
├── scripts/
│   └── build-pages.js
├── package.json
├── package-lock.json
└── README.md
```

## O que esta versão inclui

- Layout responsivo com header fixo, navegação superior e menu lateral.
- Página inicial com chamada do curso, progresso geral, módulos, biblioteca, prova final e certificado.
- Oito módulos iniciais com título, descrição, referência bíblica, botão de acesso e status visual.
- Barra de progresso atualizada automaticamente.
- Persistência de progresso com `localStorage`.
- Liberação sequencial dos módulos.
- Prova final liberada apenas após conclusão de todos os módulos.
- Certificado liberado apenas após registro de aprovação na prova final.
- Foco de navegação por teclado com destaque visual.
- Workflow do GitHub Actions para publicar no GitHub Pages.

## Organização do código

- `index.html`: estrutura semântica da plataforma.
- `css/style.css`: tokens visuais, responsividade, componentes e estados.
- `js/app.js`: dados dos módulos, controle de progresso, navegação e persistência.
- `assets/hero-course.png`: imagem visual de apoio para a área inicial.
- `scripts/build-pages.js`: gera a pasta `dist/` usada pelo GitHub Pages.
- `.github/workflows/pages.yml`: workflow de deploy para GitHub Pages.
