import logoFoco from '@/assets/logo-foco.png';

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-6 border-b border-border/50">
      <div className="flex items-center gap-4">
        <img
          src={logoFoco}
          alt="Foco Marketing"
          className="h-10 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
        />
        <div className="h-8 w-px bg-border/50" />
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            <span className="text-primary">Boticário</span>{' '}
            <span className="text-foreground/80">São Francisco</span>
          </h1>
          <p className="text-xs text-muted-foreground">Dashboard de Métricas Meta Ads</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Powered by</span>
        <span className="text-sm font-semibold text-primary">Foco Marketing</span>
      </div>
    </header>
  );
}
