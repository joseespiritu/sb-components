var i=Object.defineProperty;var l=(e,a)=>i(e,"name",{value:a,configurable:!0});import{j as n}from"./jsx-runtime-69008c6b.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";const r=l(({label:e="No Label",size:a="normal",allCaps:t=!1,color:s="primary",fontColor:c})=>n("span",{className:`label ${a} text-${s}`,style:{color:c},children:t?e.toUpperCase():e}),"MyLabel");try{r.displayName="MyLabel",r.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Este es el mensaje que se va a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamaño que tomará la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Opción para activar capitalizado",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Selecciona color de etiqueta",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const g={parameters:{storySource:{source:`import { MyLabel } from '../../components/MyLabel';\r
import { ComponentMeta, ComponentStory } from '@storybook/react';\r
\r
export default {\r
    title: 'UI/MyLabel',\r
    component: MyLabel,\r
    argTypes: {\r
        size: { control: 'select' },\r
        color: { control: 'select' }\r
    }\r
} as ComponentMeta<typeof MyLabel>\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
    size: 'normal',\r
    allCaps: false\r
}\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
    size: 'normal',\r
    allCaps: true\r
}\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
    size: 'normal',\r
    color: 'secondary'\r
}\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
    size: 'normal',\r
    color: 'tertiary'\r
}\r
\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
    size: 'h1',\r
    fontColor: '#9615c4'\r
}`,locationsMap:{basic:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},"all-caps":{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},secondary:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},tertiary:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},"custom-font-color":{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}}}}},title:"UI/MyLabel",component:r,argTypes:{size:{control:"select"},color:{control:"select"}}},o=l(e=>n(r,{...e}),"Template"),p=o.bind({});p.args={size:"normal",allCaps:!1};const d=o.bind({});d.args={size:"normal",allCaps:!0};const m=o.bind({});m.args={size:"normal",color:"secondary"};const y=o.bind({});y.args={size:"normal",color:"tertiary"};const u=o.bind({});u.args={size:"h1",fontColor:"#9615c4"};const z=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{d as AllCaps,p as Basic,u as CustomFontColor,m as Secondary,y as Tertiary,z as __namedExportsOrder,g as default};
//# sourceMappingURL=MyLabel.stories-1757a7c1.js.map
