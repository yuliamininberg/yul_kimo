import type {Locale} from './catalog';
export const copy = {
  en:{
    announcement:'MADE FOR MOVEMENT · DESIGNED TO BE LIVED IN',catalog:'Shop the collection',home:'Home',collection:'Collection',contact:'Contact',
    eyebrow:'YUL · ART TO WEAR',hero:'Clothing for your own kind of wild.',intro:'Kimonos and festival pieces made to move with you. Discover the collection and find the piece that feels like yours.',
    explore:'Explore the collection',featured:'A little freedom, in every thread.',featuredText:'Easy layers, expressive prints and thoughtful details. Pieces to wear your way, wherever the day takes you.',
    shop:'View the collection',ourStory:'Made for your own rhythm',story:'Yul is a small world of expressive layers and considered details. Find a piece that feels like you, then make it your own.',
    availability:{available:'Available',madeToOrder:'Made to order',soldOut:'Sold out'},all:'All pieces',available:'Available',madeToOrder:'Made to order',soldOut:'Sold out',empty:'The collection is taking shape.',emptyHelp:'New pieces will appear here soon. For a personal inquiry, get in touch.',
    noProducts:'No pieces in this selection just yet.',ask:'Ask us about this piece',back:'Back to collection',priceOnRequest:'Price on request',footer:'Made with care · Israel'
  },
  he:{
    announcement:'נוצרו לתנועה · נועדו לחיים',catalog:'הקולקציה',home:'בית',collection:'קולקציה',contact:'יצירת קשר',
    eyebrow:'יול · אמנות ללבישה',hero:'בגדים לקצב שהוא רק שלך.',intro:'קימונו ופריטים לפסטיבלים שנעים איתך. מוזמנת לגלות את הקולקציה ולמצוא את הפריט שמרגיש שלך.',
    explore:'לגלות את הקולקציה',featured:'קצת חופש, בכל חוט.',featuredText:'שכבות קלילות, הדפסים מלאי אופי ופרטים שנבחרו בקפידה. פריטים ללבוש בדרך שלך, לכל מקום שהיום ייקח אותך.',
    shop:'לצפייה בקולקציה',ourStory:'נוצרו לקצב שלך',story:'יול היא עולם קטן של שכבות מלאות אופי ופרטים שנבחרו בקפידה. מצאי פריט שמרגיש שלך והפכי אותו לשלך.',
    availability:{available:'זמין',madeToOrder:'בהזמנה אישית',soldOut:'אזל מהמלאי'},all:'כל הפריטים',available:'זמין',madeToOrder:'בהזמנה אישית',soldOut:'אזל מהמלאי',empty:'הקולקציה מתגבשת.',emptyHelp:'פריטים חדשים יופיעו כאן בקרוב. לבירור אישי, נשמח לשמוע ממך.',
    noProducts:'אין עדיין פריטים בבחירה הזו.',ask:'לברר לגבי הפריט',back:'חזרה לקולקציה',priceOnRequest:'מחיר בפרטי',footer:'נוצר באהבה · ישראל'
  }
} as const;
export function getCopy(locale:Locale){return copy[locale];}
