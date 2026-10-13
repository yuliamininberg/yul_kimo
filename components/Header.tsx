import Link from 'next/link';
import type {Locale} from '@/lib/catalog';
import {getCopy} from '@/lib/copy';
export function Header({locale}:{locale:Locale}){
 const c=getCopy(locale); const other=locale==='he'?'en':'he';
 return <><div className="announcement">{c.announcement}</div><header className="header"><Link className="brand" href={`/${locale}`}>YUL</Link><nav className="nav" aria-label="Main navigation"><Link href={`/${locale}`}>{c.home}</Link><Link href={`/${locale}#collection`}>{c.collection}</Link><a href="#contact">{c.contact}</a><span className="lang"><Link href={`/${locale}`} aria-current="page">{locale==='he'?'עב':'EN'}</Link><span>/</span><Link href={`/${other}`}>{other==='he'?'עב':'EN'}</Link></span></nav></header></>;
}
