(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{395:function(e,a,o){"use strict";o.r(a);var s=o(25),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"operacoes-em-1-clique"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#operacoes-em-1-clique"}},[e._v("#")]),e._v(" Operações em 1 Clique")]),e._v(" "),o("p",[e._v("Esta página aparece depois de clicar na opção "),o("strong",[e._v("Operações em 1 Clique")]),e._v(" no "),o("RouterLink",{attrs:{to:"/pt-BR/guide/main-page.html#menu-de-opcoes"}},[e._v("menu principal")]),e._v(". As operações atualmente suportadas incluem "),o("em",[e._v("bloquear/desbloquear rastreadores")]),e._v(", "),o("em",[e._v("bloquear componentes")]),e._v(" e "),o("em",[e._v("negar operações de aplicativo")]),e._v(". Mais opções serão adicionadas mais tarde.")],1),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Tabela de Conteúdos")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#block-unblock-trackers"}},[e._v("Block/Unblock Trackers")])]),o("li",[o("a",{attrs:{href:"#bloquear-componentes"}},[e._v("Bloquear Componentes…")])]),o("li",[o("a",{attrs:{href:"#set-mode-for-app-ops"}},[e._v("Set Mode for App Ops…")])])])]),o("p")]),e._v(" "),o("h2",{attrs:{id:"block-unblock-trackers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#block-unblock-trackers"}},[e._v("#")]),e._v(" Block/Unblock Trackers")]),e._v(" "),o("p",[e._v("Essa opção pode ser usada para bloquear ou desbloquear componentes de anúncios ou rastreadores de todos os aplicativos instalados. Ao clicar nesta opção, você terá as opções de listar todos os aplicativos ou apenas os aplicativos do usuário. Os usuários iniciantes devem selecionar apenas os aplicativos do usuário. Depois disso, uma caixa de diálogo com multiplas escolhas aparecerá, nela você pode desmarcar os aplicativos que deseja excluir desta operação. Clicar em "),o("em",[e._v("bloquear")]),e._v(" ou "),o("em",[e._v("desbloquear")]),e._v(" aplicará as alterações imediatamente.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Aviso")]),e._v(" "),o("p",[e._v("Certos aplicativos podem não funcionar como esperado após a aplicação do bloqueio. Se esse for o caso, remova as regras de bloqueio de uma vez ou uma por uma usando a página correspondente em "),o("RouterLink",{attrs:{to:"/pt-BR/guide/app-details-page.html"}},[e._v("Detalhes do Aplicativo")]),e._v(".")],1)]),e._v(" "),o("p",[o("em",[e._v("Veja também:")])]),e._v(" "),o("ul",[o("li",[o("em",[o("RouterLink",{attrs:{to:"/pt-BR/faq/app-components.html#como-desbloquear-os-componentes-rastreadores-bloqueados-usando-operacoes-em-1-clique-ou-operacoes-em-lote"}},[e._v("Como desbloquear os componentes rastreadores bloqueados usando Operações em 1 Clique ou Operações de Lote?")])],1)]),e._v(" "),o("li",[o("em",[o("RouterLink",{attrs:{to:"/pt-BR/guide/app-details-page.html#blocking-trackers"}},[e._v("App Details Page: Blocking Trackers")])],1)])]),e._v(" "),o("h2",{attrs:{id:"bloquear-componentes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bloquear-componentes"}},[e._v("#")]),e._v(" Bloquear Componentes…")]),e._v(" "),o("p",[e._v("Essa opção pode ser usada para bloquear certos componentes do aplicativo denotados pelas assinaturas. A assinatura do aplicativo é o nome completo ou o nome parcial dos componentes. Por segurança, é recomendável que você adicione um "),o("code",[e._v(".")]),e._v(" (ponto) no final de cada nome de assinatura parcial, pois o algoritmo usado aqui escolhe todos os componentes combinados de forma gananciosa. Você pode inserir mais de uma assinatura, caso em que todas as assinaturas têm que ser separadas por espaços. Semelhante à opção acima, há uma opção de aplicar bloqueio aos aplicativos do sistema também.")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("Atenção")]),e._v(" "),o("p",[e._v("Se você não estiver ciente das consequências de bloquear componentes de aplicativos por assinatura(s), você deve evitar usar esta configuração, pois pode resultar em boot loop ou soft brick, e você pode ter que aplicar um reset de fábrica para usar seu sistema operacional.")])]),e._v(" "),o("h2",{attrs:{id:"set-mode-for-app-ops"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-mode-for-app-ops"}},[e._v("#")]),e._v(" Set Mode for App Ops…")]),e._v(" "),o("p",[e._v("Esta opção pode ser usada para bloquear certas "),o("RouterLink",{attrs:{to:"/pt-BR/tech/AppOps.html"}},[e._v("operações de aplicativo")]),e._v(" de todos ou aplicativos selecionados. Você pode inserir mais de uma constante de operação de aplicativo separadas por espaços. Não é possível conhecer com antecedência todas as constantes de operações de aplicativo, pois elas variam de dispositivo para dispositivo e de OS para OS. Para encontrar a constante de operação de aplicativo desejada, navegue pela aba "),o("em",[e._v("Operações de Aplicativo")]),e._v(" na página de "),o("RouterLink",{attrs:{to:"/pt-BR/guide/app-details-page.html"}},[e._v("Detalhes do Aplicativo")]),e._v(". As constantes são números inteiros fechados dentro de parênteses ao lado do nome de cada aplicação. You can also use the app op names. You also have select one of the "),o("RouterLink",{attrs:{to:"/pt-BR/tech/AppOps.html#constantes-mode"}},[e._v("modes")]),e._v(" that will be applied against the app ops.")],1),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("Atenção")]),e._v(" "),o("p",[e._v("A menos que você esteja bem informado sobre as operações de aplicativos e as consequências de bloqueá-las, você deve evitar usar esta função, pois pode resultar em boot loop ou soft brick, e você pode ter que aplicar um reset de fábrica para usar o seu sistema operacional.")])])])}),[],!1,null,null,null);a.default=t.exports}}]);