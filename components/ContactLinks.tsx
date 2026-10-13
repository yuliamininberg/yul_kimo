export function ContactLinks({message}:{message?:string}){
 const phone=process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;const instagram=process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME;
 const wa=phone?`https://wa.me/${phone}${message?`?text=${encodeURIComponent(message)}`:''}`:null;
 return <div className="contact">{wa&&<a className="button" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>}{instagram&&<a className="button" href={`https://instagram.com/${instagram.replace(/^@/,'')}`} target="_blank" rel="noreferrer">Instagram</a>}{!wa&&!instagram&&<span className="status">Contact links will be added soon</span>}</div>;
}
