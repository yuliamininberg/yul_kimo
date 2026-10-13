import {defineField, defineType} from 'sanity';
export const product = defineType({
  name: 'product', title: 'Product', type: 'document', fields: [
    defineField({name:'title',title:'Name',type:'object',fields:[
      defineField({name:'he',title:'Hebrew',type:'string',validation:r=>r.required()}),
      defineField({name:'en',title:'English',type:'string',validation:r=>r.required()})
    ]}),
    defineField({name:'slug',title:'URL slug',type:'slug',options:{source:'title.en',maxLength:96},validation:r=>r.required()}),
    defineField({name:'description',title:'Description',type:'object',fields:[
      defineField({name:'he',title:'Hebrew',type:'text',rows:5}),
      defineField({name:'en',title:'English',type:'text',rows:5})
    ]}),
    defineField({name:'image',title:'Product image',type:'image',options:{hotspot:true},fields:[
      defineField({name:'alt',title:'Alternative text',type:'object',fields:[
        defineField({name:'he',title:'Hebrew',type:'string'}),defineField({name:'en',title:'English',type:'string'})
      ]})
    ]}),
    defineField({name:'price',title:'Price',type:'number',validation:r=>r.min(0)}),
    defineField({name:'currency',title:'Currency code',type:'string',initialValue:'ILS'}),
    defineField({name:'availability',title:'Availability',type:'string',options:{list:[
      {title:'Available',value:'available'},{title:'Made to order',value:'madeToOrder'},{title:'Sold out',value:'soldOut'}
    ]},initialValue:'available',validation:r=>r.required()})
  ], preview:{select:{title:'title.en',media:'image',availability:'availability'},prepare({title,media,availability}){return {title:title||'Untitled product',subtitle:availability,media}}}
});
