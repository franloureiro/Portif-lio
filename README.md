# Francisco Loureiro — Portfólio

Portfólio em HTML semântico, CSS responsivo e JavaScript modular. Vite gera a versão de produção. GSAP e ScrollTrigger são melhorias opcionais: conteúdo e imagens são renderizados antes das animações e continuam disponíveis se elas falharem. Movimento reduzido é respeitado.

## Executar

Com Node.js 22+ e npm instalados:

```sh
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite. Não abra o HTML diretamente com `file://`: módulos JavaScript exigem um servidor HTTP.

```sh
npm test
npm run format:check
npm run build
npm run preview
```

`dist/` contém o site compilado, incluindo as imagens. Para servir com um servidor estático em produção, use essa pasta, e não apenas os HTMLs da raiz.

## Organização

```text
src/
  data/                      Dados pessoais e projetos
  scripts/
    main.js                  Inicialização da página atual
    components/              Cards, imagens e contatos reutilizáveis
    pages/project.js         Renderização dos cases
    features/                Menu, rolagem, animações e erros de imagem
    utils/html.js            Escape de conteúdo e validação de URLs
  styles/
    main.css                 Base, componentes e responsividade
    editorial.css            Composição editorial e personalizações visuais
public/
  images/                    Capturas reais e fotografias
tests/                       Testes de dados, imagens e renderização do DOM
```

Os cases usam uma entrada HTML própria, sem duplicar todas as seções da home. Dados, componentes e comportamentos ficam separados. Prettier padroniza a formatação: `npm run format`.

## Contatos

Edite `src/data/config.js`. GitHub, LinkedIn e Instagram abrem os perfis em outra aba. O e-mail é exibido com o ícone de envelope, sem clique, conforme solicitado. Telefone e WhatsApp não aparecem. Outras redes podem ser cadastradas em `socialLinks`, com `name` e `url`. Nunca configure URLs fictícias.

## Projetos e imagens

Edite `src/data/projects.js`. Cada projeto tem um `slug` exclusivo e gera um card e um case em `projeto.html?projeto=slug`. Campos sem confirmação ficam vazios; objetivo, funcionalidades, desafios e galeria são omitidos quando não preenchidos.

As capturas atuais são `public/images/BRLP.png`, `public/images/joed.png` e `public/images/LPLAURA.png`. Seus endereços são definidos com `new URL('../../public/images/ARQUIVO.png', import.meta.url).href`: assim, o caminho parte do módulo de dados e é resolvido pelo Vite durante o build. Respeite as letras maiúsculas dos arquivos, pois o servidor de publicação pode diferenciar maiúsculas e minúsculas.

Para acrescentar uma captura, coloque-a em `public/images/` e use o mesmo padrão em `image`. A galeria usa uma lista de URLs. Na lista e nos cases as capturas aparecem inteiras; na grade o enquadramento se adapta aos cards. Se a imagem falhar, um aviso substitui a área vazia. A captura da JOED TRANSPORTES está em `public/images/joed.png`.

Sua fotografia pessoal é configurada em `photo`, em `config.js`, e aparece na seção Sobre. A URL pode ser `/images/francisco.webp` ao executar com Vite. Foto ausente mantém o texto editorial.

Na abertura, configure `heroPhoto` para sua fotografia de fundo. Se o campo estiver vazio, o fundo permanece preto. A foto de Sobre é configurada separadamente em `photo`. A imagem recebe preto e branco por CSS, sem alterar o arquivo original. Prefira um recorte horizontal com você no centro-direita, deixando o lado esquerdo livre para o título. Exemplo: `heroPhoto: '/images/francisco-fundo.webp'` com o arquivo em `public/images/`.

## Verificações

Os testes usam o executor nativo do Node e LinkeDOM para verificar:

- Slugs, campos obrigatórios e arquivos PNG das capturas.
- Renderização das imagens na home e nos cases corretos.
- Visualização inicial em lista e alternância para grade.
- Links sociais, e-mail sem clique e recuperação para projeto inexistente.
- Escape de conteúdo editável e rejeição de URLs inseguras.

Testes de DOM e build não substituem uma inspeção visual no navegador. Consulte `design-qa.md` para os limites dessa verificação.

## Publicação na Vercel

1. Execute os testes e o build.
2. Importe o repositório na Vercel, selecionando Vite.
3. Configure `npm run build` e diretório de saída `dist`.
4. Confira os dados reais e autorize a publicação.
5. Depois de definir o domínio, preencha `siteUrl` e prepare sitemap e imagem Open Graph com URLs reais.

Nenhuma publicação foi executada. Fontes e ícones usam Google Fonts e Bootstrap Icons via CDN; as capturas são locais.
