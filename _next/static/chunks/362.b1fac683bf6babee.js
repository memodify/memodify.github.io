"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{1362:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var t=s(5893),i=s(1151),o=s(1898);function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(o.Z,{frontmatter:{title:"Not well-documented APIs of Monaco Editor",created_at:"2023-04-07T00:15:00.000Z",layoutPath:"../components/layouts/BlogEntryLayout",published:!0},children:[(0,t.jsx)(n.h1,{id:"summary",children:"Summary"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://microsoft.github.io/monaco-editor/",children:"Monaco Editor"})," is a powerful web-based code editor\nused in a variety of programming environments. Although the editor has extensive documentation,\nsome of its APIs, such as ",(0,t.jsx)(n.code,{children:"addKeybindingRule"})," and ",(0,t.jsx)(n.code,{children:"getContribution"}),", are not well-documented.\nThese APIs provide developers with powerful customization options for the editor."]}),(0,t.jsx)(n.p,{children:"Memodify uses Monaco Editor and the APIs in order to support some features."}),(0,t.jsx)(n.h1,{id:"apis",children:"APIs"}),(0,t.jsx)(n.h2,{id:"addkeybindingrule",children:"addKeybindingRule"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://microsoft.github.io/monaco-editor/typedoc/functions/editor.addKeybindingRule.html",children:(0,t.jsx)(n.code,{children:"addKeybindingRule"})}),"\nis an API used to add custom keybindings to Monaco Editor.\nThe API takes an object with properties keybinding and handler,\nwhere keybinding is a string representing the desired key combination,\nand handler is a function to be called when the key combination is pressed."]}),(0,t.jsx)(n.p,{children:"Here's an example:"}),(0,t.jsx)(n.pre,{className:"language-typescript",children:(0,t.jsxs)(n.code,{className:"language-typescript",children:["monaco",(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token property-access",children:"editor"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"addKeybindingRule"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n    keybinding",(0,t.jsx)(n.span,{className:"token operator",children:":"})," monaco",(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token property-access",children:(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"KeyMod"})}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token property-access",children:(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"CtrlCmd"})})," ",(0,t.jsx)(n.span,{className:"token operator",children:"|"})," monaco",(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token property-access",children:(0,t.jsx)(n.span,{className:"token maybe-class-name",children:"KeyCode"})}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token constant",children:"KEY_S"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","}),"\n    command",(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token string",children:"'my.custom.keybinding'"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","}),"\n",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})}),(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"command"})," property is a unique identifier for the keybinding,\nand the ",(0,t.jsx)(n.code,{children:"keybinding"})," property uses the monaco.KeyMod and monaco.KeyCode enums to define the desired key combination."]}),(0,t.jsx)(n.h2,{id:"getcontribution",children:"getContribution"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.ICodeEditor.html#getContribution",children:(0,t.jsx)(n.code,{children:"getContribution"})}),"\nis an API used to retrieve a contribution from Monaco Editor.\nContributions are modules that extend the editor's functionality, such as code completion,\nsyntax highlighting, and linting. The ",(0,t.jsx)(n.code,{children:"getContribution"})," API takes a single parameter,\nthe ID of the desired contribution, and returns the contribution object. Here's an example:"]}),(0,t.jsx)(n.pre,{className:"language-typescript",children:(0,t.jsxs)(n.code,{className:"language-typescript",children:[(0,t.jsx)(n.span,{className:"token keyword",children:"const"})," contrib ",(0,t.jsx)(n.span,{className:"token operator",children:"="})," monaco",(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token property-access",children:"editor"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"getContribution"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token string",children:"'my.contribution.id'"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,t.jsx)(n.span,{className:"token spread operator",children:"..."}),"\n"]})}),(0,t.jsx)(n.p,{children:"Once retrieved, the contribution can be used in a variety of ways, such as:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"controlling editor functionality programmatically"}),"\n",(0,t.jsx)(n.li,{children:"creating custom UI elements"}),"\n",(0,t.jsx)(n.li,{children:"dynamically adding functionality to the editor"}),"\n"]}),(0,t.jsx)(n.h1,{id:"related-github-issues",children:"Related GitHub Issues"}),(0,t.jsxs)(n.p,{children:["Although these APIs are not well-documented, they have been discussed in GitHub issues for Monaco Editor.\nFor example, the ",(0,t.jsx)(n.code,{children:"addKeybindingRule"})," API is discussed in this issue:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/microsoft/monaco-editor/issues/102#issuecomment-1300619657",children:"https://github.com/microsoft/monaco-editor/issues/102#issuecomment-1300619657"})}),(0,t.jsxs)(n.p,{children:["And the ",(0,t.jsx)(n.code,{children:"getContribution"})," API is mentioned in this issue:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/microsoft/monaco-editor/issues/1218#issuecomment-445993306",children:"https://github.com/microsoft/monaco-editor/issues/1218#issuecomment-445993306"})}),(0,t.jsx)(n.p,{children:"These issues contain detailed information from the developer community, and are a useful resource for troubleshooting\nany issues that may arise when using these APIs."}),(0,t.jsxs)(n.p,{children:["In conclusion, the ",(0,t.jsx)(n.code,{children:"addKeybindingRule"})," and ",(0,t.jsx)(n.code,{children:"getContribution"})," APIs in Monaco Editor provide powerful customization options for developers.\n",(0,t.jsx)(n.code,{children:"addKeybindingRule"})," can be used to easily customize keybindings, while ",(0,t.jsx)(n.code,{children:"getContribution"})," can be used\nto retrieve and control editor functionality programmatically. Developers can use these APIs to achieve even more\nadvanced customizations in their Monaco Editor applications."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1898:function(e,n,s){s.d(n,{Z:function(){return a}});var t=s(5893),i=s(5696),o=s(38);function a(e){let{children:n,frontmatter:s}=e;return(0,t.jsxs)("div",{className:"min-h-screen px-5",children:[(0,t.jsx)(o.Z,{}),(0,t.jsxs)("main",{className:"prose mx-auto",children:[(0,t.jsx)("h1",{className:"dark:text-gray-300",children:s.title}),(0,t.jsx)("div",{className:"flex justify-end dark:text-gray-400",children:s.created_at}),(0,t.jsx)("article",{className:"[&_h1]:dark:text-gray-300 [&_h2]:dark:text-gray-300 [&_code]:dark:text-gray-300 [&_a]:dark:text-gray-400 dark:text-gray-400 ",children:n})]}),(0,t.jsx)("div",{className:"sticky top-[100vh]",children:(0,t.jsx)(i.Z,{})})]})}},1151:function(e,n,s){s.d(n,{a:function(){return o}});var t=s(7294);let i=t.createContext({});function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}}}]);