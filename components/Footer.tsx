import type {Locale} from '@/lib/catalog';import {getCopy} from '@/lib/copy';
export function Footer({locale}:{locale:Locale}){const c=getCopy(locale);return <footer className="footer"><span className="brand">YUL</span><span>{c.footer}</span><span>© {new Date().getFullYear()} Yul</span></footer>}
