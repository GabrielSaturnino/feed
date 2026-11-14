# Feed em React
Interface de estudo para praticar **componentização e estilização em React**, utilizando Vite.

## O que foi implementado
- Estrutura de página com cabeçalho, barra lateral e área principal.
- Componentes de publicação, avatar e comentários.
- Estilização com CSS Modules.
- Área visual de formulário de feedback.

O conteúdo e os comentários são demonstrativos. A interface do formulário não deve ser confundida com um sistema de publicação persistente: não há backend de comentários demonstrado neste exercício.

## Tecnologias
React 18, JavaScript, Vite 4, CSS Modules e Phosphor React.

## Executar localmente
```bash
git clone https://github.com/GabrielSaturnino/feed.git
cd feed/01-fundamentos
npm install
npm run dev
```

Abra a URL exibida pelo Vite no terminal.

## Build
```bash
npm run build
npm run preview
```

## Estrutura
| Caminho | Responsabilidade |
| --- | --- |
| `src/App.jsx` | Composição da página |
| `src/components/` | Componentes da interface |
| `src/global.css` | Estilos globais |
| `src/App.module.css` | Layout da aplicação |

## Contexto
Exercício de fundamentos de React. O objetivo é apresentar a organização dos componentes e a construção da interface, sem alegação de uso comercial ou de funcionalidades de rede social completas.

Aplicação e build não executados na revisão desta documentação.
