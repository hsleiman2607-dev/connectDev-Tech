
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 w-full text-slate-100 flex flex-col justify-between p-6">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-between">
        
        {/* Header */}
        <header className="py-4 flex justify-between items-center border-b border-slate-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            connectDevs-Tech
          </h1>
          <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
             Matchmaking de desenvolvedores e startups reais
          </span>
        </header>

        {/* Hero Section */}
        <main className="my-12 text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Deixe de construir projetos sozinhos. <br />
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Encontre a squad ideal.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Conectamos desenvolvedores e profissionais de tecnologia por stack, disponibilidade e objetivos reais para tirar ideias de startups do papel.
          </p>

          {/* CTA Button */}
          <div className="pt-2 flex justify-center max-w-md mx-auto">
            <a
              href="https://tally.so/r/Ek9Vyq" // Substitua pelo link real do seu formulário
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-6 rounded-lg font-semibold bg-blue-600 hover:bg-blue-500 transition-all text-white shadow-lg shadow-blue-500/25"
            >
              Garantir Acesso Antecipado →
            </a>
          </div>
          <p className="text-xs text-slate-500">Gratuito para os primeiros inscritos no lote Beta.</p>
        </main>

        {/* Seção 1: O Problema */}
        <section className="my-12 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-red-400 font-semibold">
              Os Problemas reais dos Projetos Solitários
            </h3>
            <h4 className="text-2xl font-bold text-slate-200">
              Por que a maioria das ideias de devs morre antes do MVP?
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 space-y-2">
              <span className="text-2xl">💡</span>
              <h5 className="font-semibold text-slate-200">Ideias engavetadas por falta de braço</h5>
              <p className="text-sm text-slate-400">
                Você tem uma excelente ideia, mas não tem tempo nem domínio para construir todas as pontas (front, back, mobile, infra) sozinho.
              </p>
            </div>

            <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 space-y-2">
              <span className="text-2xl">📂</span>
              <h5 className="font-semibold text-slate-200">Projetos de tutoriais não encantam</h5>
              <p className="text-sm text-slate-400">
                Criar mais um clone de aplicativo genérico não te destaca mais em processos seletivos ou no mercado de startups.
              </p>
            </div>

            <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 space-y-2">
              <span className="text-2xl">👻</span>
              <h5 className="font-semibold text-slate-200">Falta de parceiros comprometidos</h5>
              <p className="text-sm text-slate-400">
                Procurar sócios em fóruns genéricos costuma terminar em projetos abandonados e conversas sem continuidade.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2: A Solução */}
        <section className="my-12 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              A Solução do connectDevs-Tech
            </h3>
            <h4 className="text-2xl font-bold text-slate-200">
              Como a plataforma acelera a sua jornada dev
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/40 space-y-2">
              <h5 className="font-semibold text-blue-400 flex items-center gap-2">
                ⚡ Matching por Tech Stack e Complementaridade
              </h5>
              <p className="text-sm text-slate-400">
                Encontre exatamente quem falta na sua equipe: se você domina o backend em Node.js ou Java, conecte-se a quem domina React ou UI/UX.
              </p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/40 space-y-2">
              <h5 className="font-semibold text-teal-400 flex items-center gap-2">
                🎯 Comprometimento Alinhado
              </h5>
              <p className="text-sm text-slate-400">
                Sem surpresas. Filtre parceiros por nível de experiência, disponibilidade de horas semanais e objetivo (portfólio, sociedade ou aprendizado).
              </p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/40 space-y-2">
              <h5 className="font-semibold text-emerald-400 flex items-center gap-2">
                🚀 Squads Prontas para Executar
              </h5>
              <p className="text-sm text-slate-400">
                Crie uma ideia do zero ou entre como desenvolvedor em projetos de startups em estágio inicial que já possuem validação.
              </p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/40 space-y-2">
              <h5 className="font-semibold text-indigo-400 flex items-center gap-2">
                🛠️ Experiência Prática de Mercado
              </h5>
              <p className="text-sm text-slate-400">
                Viva a rotina real de desenvolvimento em equipe, com versionamento no GitHub, decisões de arquitetura e entregas de alto impacto.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Repetido no final para converter quem rolou a página */}
        <div className="my-12 text-center p-8 bg-slate-800/40 rounded-2xl border border-slate-800 space-y-4 max-w-2xl mx-auto">
          <h4 className="text-xl font-bold">Pronto para sair da teoria e criar software de verdade?</h4>
          <a
            href="https://tally.so/r/Ek9Vyq"
            target="_blank"
            rel="noreferrer"
            className="inline-block py-3 px-8 rounded-lg font-semibold bg-blue-600 hover:bg-blue-500 transition-all text-white shadow-lg shadow-blue-500/25"
          >
            Quero Entrar na Lista 
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center py-6 text-slate-600 text-sm border-t border-slate-800">
          © 2026 connectDevs-Tech. Conectando devs a startups reais.
        </footer>

      </div>
    </div>
  );
}