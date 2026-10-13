import type {Metadata} from 'next';
import './globals.css';
export const metadata: Metadata = {title:{default:'Yul — Art to Wear',template:'%s | Yul'},description:'A considered collection of kimonos and festival clothing.'};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
