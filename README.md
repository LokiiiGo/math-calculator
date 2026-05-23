## Visão Geral
Este projeto foi desenvolvido para demonstrar uma calculadora web com:
- UI responsiva e minimalista;
- operações matemáticas básicas;
- validações simples de entrada;
- tratamento de erros para casos comuns (ex.: divisão por zero).

---

## Funcionalidades
A calculadora permite calcular usando dois valores numéricos e selecionando uma operação:

### Operações suportadas
- **Soma**: `+`
- **Subtração**: `-`
- **Multiplicação**: `*`
- **Divisão**: `/` *(com bloqueio de divisão por zero)*
- **Módulo**: `%` *(com bloqueio de módulo por zero)*
- **Exponenciação**: `^` (via `Math.pow`)

### Controles
- **Campo “Número 1” e “Número 2”**: aceitam entrada numérica.
- **Botão “Limpar”**: reseta `Número 1`, `Número 2` e o `Resultado`.

### Tratamento de entrada
- Se qualquer um dos valores não puder ser interpretado como número, o sistema exibe um `alert` solicitando valores válidos.
- Entradas aceitam **vírgula** (`,`), que é convertida para ponto (`.`) antes do cálculo.

---

## Tecnologias Utilizadas
- **Next.js (App Router)**
- **React**
- **TailwindCSS**
- **TypeScript**

---

## Como funciona (resumo técnico)
O componente principal (`src/app/components/Calcular.tsx`) mantém estado via React:
- `numero1` (string)
- `numero2` (string)
- `resultado` (number)

Ao clicar em uma operação:
1. Os valores são convertidos para número (tratando vírgula → ponto).
2. É executado um `switch` com o operador selecionado.
3. Casos inválidos (ex.: divisão por zero) interrompem o cálculo com mensagens via `alert`.
4. O `resultado` é atualizado no estado e exibido na tela.

---

## Estrutura do Projeto
- `src/app/page.tsx`
  - Renderiza o componente principal `<Calcular />`.

- `src/app/components/Calcular.tsx`
  - Lógica de cálculo e interface da calculadora.

- `src/app/layout.tsx`
  - Metadata do projeto e carregamento de fonte.

- `src/app/globals.css`
  - Estilos globais (ex.: classe `arimo`).

---

## Como executar localmente
Pré-requisitos:
- **Node.js** (versão compatível com o projeto)
- Gerenciador de pacotes (npm)

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode em modo desenvolvimento:
   ```bash
   npm run dev
   ```
3. Para produção:
   ```bash
   npm run start
   ```

---

## Observações de UX/Qualidade
- A interface foi pensada para ser clara: inputs bem destacados e botões com feedback visual (hover).
- O componente é “auto-contido” e fácil de manter/estender (novas operações podem ser adicionadas no `switch`).

---

## Créditos
Desenvolvido por **Lucas Chambi**.

---

## Status
Em desenvolvimento/entrega em andamento (projeto funcional com operações e validações básicas).
