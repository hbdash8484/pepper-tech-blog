'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = pathname.startsWith('/en/') || pathname === '/en';

  const koUrl = isEnglish ? pathname.slice(3) || '/ep/00' : pathname;
  const enUrl = isEnglish ? pathname : `/en${pathname}`;

  const handleLang = (lang: 'ko' | 'en') => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pepper_lang', lang);
    }
    router.push(lang === 'en' ? enUrl : koUrl);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-monogram">P</div>
        <div className="navbar-brand">
          <span className="navbar-wordmark">Pepper</span>
          <span className="navbar-sub">A Build Log</span>
        </div>
      </div>
      <div className="navbar-right">
        <button
          onClick={() => handleLang('ko')}
          className={`lang-btn ${!isEnglish ? 'active' : ''}`}
        >
          KO
        </button>
        <span className="lang-sep">/</span>
        <button
          onClick={() => handleLang('en')}
          className={`lang-btn ${isEnglish ? 'active' : ''}`}
        >
          EN
        </button>
      </div>
    </nav>
  );
}
