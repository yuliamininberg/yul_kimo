'use client';
import {useMemo,useState} from 'react';import Link from 'next/link';import Image from 'next/image';
import type {Locale,Product,Availability} from '@/lib/catalog';import {getCopy} from '@/lib/copy';
export function ProductGrid({products,locale}:{products:Product[];locale:Locale}){
 const c=getCopy(locale);const [filter,setFilter]=useState<'all'|Availability>('all');
 const shown=useMemo(()=>filter==='all'?products:products.filter(p=>p.availability===filter),[filter,products]);
 const filters:[typeof filter,string][]=[['all',c.all],['available',c.available],['madeToOrder',c.madeToOrder],['soldOut',c.soldOut]];
 return <><div className="filters" role="group" aria-label={locale==='he'?'סינון לפי זמינות':'Filter by availability'}>{filters.map(([value,label])=><button key={value} className={`filter ${filter===value?'active':''}`} aria-pressed={filter===value} onClick={()=>setFilter(value)}>{label}</button>)}</div>
 {shown.length?<div className="products">{shown.map(p=><Link className="product-card" href={`/${locale}/products/${p.slug}`} key={p._id}><div className="product-image">{p.imageUrl?<Image src={p.imageUrl} alt={p.imageAlt||p.title} fill sizes="(max-width: 700px) 50vw, 33vw"/>:<span className="image-empty">Yul · {p.title}</span>}</div><div className="product-meta"><div><h3>{p.title}</h3>{typeof p.price==='number'&&<p>{p.currency||'ILS'} {p.price}</p>}</div><span className="status">{c.availability[p.availability]}</span></div></Link>)}</div>:<p className="empty-state">{products.length?c.noProducts:<>{c.empty}<br/>{c.emptyHelp}</>}</p>}</>;
}
