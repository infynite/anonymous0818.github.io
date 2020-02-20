(this["webpackJsonpvoice-conversion"]=this["webpackJsonpvoice-conversion"]||[]).push([[0],{19:function(e,c,a){},28:function(e,c,a){e.exports=a(39)},33:function(e,c,a){},38:function(e,c,a){},39:function(e,c,a){"use strict";a.r(c);var t=a(0),r=a.n(t),o=a(10),l=a.n(o),n=(a(33),a(9)),s=a(13),i=a(12),m=a(4),d=a(56),h=a(58),b=a(57),u=a(55),p=(a(19),Object(m.a)({root:{color:"rgb(50, 50, 50)","&$checked":{color:"rgb(88, 195, 194)"}},checked:{}})((function(e){return r.a.createElement(b.a,Object.assign({color:"default"},e))}))),k=Object(m.a)({switchBase:{color:"rgb(88, 195, 194)","&$checked":{color:"rgb(88, 195, 194)"},"&$checked + $track":{backgroundColor:"rgb(88, 195, 194)"}},checked:{},track:{}})(u.a),v=function(e,c){var a=null;switch(e){case"FFF":a=c+"_S";break;case"TFF":a=c+"_R";break;case"FTF":a=c+"_F";break;case"FFT":a=c+"_U";break;case"TTF":a=c+"_RF";break;case"TFT":a=c+"_RU";break;case"FTT":a=c+"_FU";break;case"TTT":a=c+"_RFU"}return a};var E=function(e){var c=e.root,a=e.reverse,t=e.uttr_id,o=e.bkg_id,l=e.lb_bkg_id,m=r.a.useState({checkedRhythm:!1,checkedPitch:!1,checkedTimbre:!1,source:"".concat(c),target:"".concat(a),converted:"".concat(c,"_S"),isReversed:!1}),b=Object(i.a)(m,2),u=b[0],E=b[1],_=r.a.useRef(),g=r.a.useRef(),w=r.a.useRef(),T=function(c){return function(a){var t,r=u;u[c]=a.target.checked;var o=u.isReversed?e.reverse:e.root,l=(r.checkedRhythm?"T":"F")+(r.checkedPitch?"T":"F")+(r.checkedTimbre?"T":"F");E(Object(s.a)({},u,(t={},Object(n.a)(t,c,a.target.checked),Object(n.a)(t,"converted",v(l,o)),t))),_.current.load()}};return r.a.createElement("div",{style:{width:1e3}},r.a.createElement("p",{className:l},t),r.a.createElement("div",{className:o},r.a.createElement("p",{className:"speech-label"},"Source Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.source,"_S.png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:g},r.a.createElement("source",{src:"/audio/".concat(u.source,"_S.wav"),type:"audio/wav"}),"Your browser does not support the audio element."))),r.a.createElement("p",{className:"speech-label"},"Target Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.target,"_S.png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:w},r.a.createElement("source",{src:"/audio/".concat(u.target,"_S.wav"),type:"audio/wav"}),"Your browser does not support the audio element."))),r.a.createElement("p",{className:"speech-label"},"Choose What To Convert:"),r.a.createElement(d.a,{style:{padding:"0 30px"},row:!0},r.a.createElement(h.a,{control:r.a.createElement(p,{checked:u.checkedRhythm,onChange:T("checkedRhythm"),value:"checkedRhythm"}),label:"Rhythm"}),r.a.createElement(h.a,{control:r.a.createElement(p,{checked:u.checkedPitch,onChange:T("checkedPitch"),value:"checkedPitch"}),label:"Pitch"}),r.a.createElement(h.a,{control:r.a.createElement(p,{checked:u.checkedTimbre,onChange:T("checkedTimbre"),value:"checkedTimbre"}),label:"Timbre"}),r.a.createElement(h.a,{control:r.a.createElement(k,{checked:u.isReversed,onChange:function(c){var a=u,t=c.target.checked?e.reverse:e.root,r=c.target.checked?e.root:e.reverse,o=(a.checkedRhythm?"T":"F")+(a.checkedPitch?"T":"F")+(a.checkedTimbre?"T":"F");E(Object(s.a)({},u,{isReversed:c.target.checked,converted:v(o,t),source:t,target:r})),g.current.load(),w.current.load(),_.current.load()},value:"checkedB"}),label:"Flip source and target"})),r.a.createElement("p",{className:"speech-label"},"Converted Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.converted,".png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:_},r.a.createElement("source",{src:"/audio/".concat(u.converted,".wav"),type:"audio/wav"}),"Your browser does not support the audio element.")))))},_=Object(m.a)({root:{color:"rgb(50, 50, 50)","&$checked":{color:"rgb(88, 195, 194)"}},checked:{}})((function(e){return r.a.createElement(b.a,Object.assign({color:"default"},e))})),g=(Object(m.a)({switchBase:{color:"rgb(88, 195, 194)","&$checked":{color:"rgb(88, 195, 194)"},"&$checked + $track":{backgroundColor:"rgb(88, 195, 194)"}},checked:{},track:{}})(u.a),function(e,c){var a=null;switch(e){case"FFF":a=c+"_S";break;case"TFF":a=c+"_R";break;case"FTF":a=c+"_F";break;case"FFT":a=c+"_U";break;case"TTF":a=c+"_RF";break;case"TFT":a=c+"_RU";break;case"FTT":a=c+"_FU";break;case"TTT":a=c+"_RFU"}return a});var w=function(e){var c=e.root,a=e.reverse,t=e.uttr_id,o=e.bkg_id,l=e.lb_bkg_id,m=r.a.useState({checkedRhythm:!1,checkedPitch:!1,checkedTimbre:!1,source:"".concat(c),target:"".concat(a),converted:"".concat(c,"_S"),isReversed:!1}),b=Object(i.a)(m,2),u=b[0],p=b[1],k=r.a.useRef(),v=r.a.useRef(),E=r.a.useRef(),w=function(c){return function(a){var t,r=u;u[c]=a.target.checked;var o=e.root,l=(r.checkedRhythm?"T":"F")+(r.checkedPitch?"T":"F")+(r.checkedTimbre?"T":"F");p(Object(s.a)({},u,(t={},Object(n.a)(t,c,a.target.checked),Object(n.a)(t,"converted",g(l,o)),t))),k.current.load()}};return r.a.createElement("div",{style:{width:1e3}},r.a.createElement("p",{className:l},t),r.a.createElement("div",{className:o},r.a.createElement("p",{className:"speech-label"},"Source Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.source,"_S.png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:v},r.a.createElement("source",{src:"/audio/".concat(u.source,"_S.wav"),type:"audio/wav"}),"Your browser does not support the audio element."))),r.a.createElement("p",{className:"speech-label"},"Rhythm Target Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.source,"_RT.png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:E},r.a.createElement("source",{src:"/audio/".concat(u.source,"_RT.wav"),type:"audio/wav"}),"Your browser does not support the audio element."))),r.a.createElement("p",{className:"speech-label"},"Pitch Target Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.source,"_FT.png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:E},r.a.createElement("source",{src:"/audio/".concat(u.source,"_FT.wav"),type:"audio/wav"}),"Your browser does not support the audio element."))),r.a.createElement("p",{className:"speech-label"},"Timbre Target Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.target,"_S.png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:E},r.a.createElement("source",{src:"/audio/".concat(u.target,"_S.wav"),type:"audio/wav"}),"Your browser does not support the audio element."))),r.a.createElement("p",{className:"speech-label"},"Choose What To Convert:"),r.a.createElement(d.a,{style:{padding:"0 30px"},row:!0},r.a.createElement(h.a,{control:r.a.createElement(_,{checked:u.checkedRhythm,onChange:w("checkedRhythm"),value:"checkedRhythm"}),label:"Rhythm"}),r.a.createElement(h.a,{control:r.a.createElement(_,{checked:u.checkedPitch,onChange:w("checkedPitch"),value:"checkedPitch"}),label:"Pitch"}),r.a.createElement(h.a,{control:r.a.createElement(_,{checked:u.checkedTimbre,onChange:w("checkedTimbre"),value:"checkedTimbre"}),label:"Timbre"})),r.a.createElement("p",{className:"speech-label"},"Converted Speech"),r.a.createElement("div",{className:"voice-block"},r.a.createElement("div",{className:"voice-block-img"},r.a.createElement("img",{src:"/spect/".concat(u.converted,".png")})),r.a.createElement("div",{className:"voice-block-wav"},r.a.createElement("audio",{controls:!0,ref:k},r.a.createElement("source",{src:"/audio/".concat(u.converted,".wav"),type:"audio/wav"}),"Your browser does not support the audio element.")))))};a(38);var T=function(e){return r.a.createElement("div",{id:"main"},r.a.createElement("div",{className:"main-inner"},r.a.createElement("h1",null,"Unsupervised Speech Decomposition Via Triple Information Bootleneck:",r.a.createElement("font",{style:{color:"#58c3c2"}}," Audio Demo")),r.a.createElement("p",null,"This demo webpage provides sound examples for ",r.a.createElement("font",{style:{color:"#58c3c2"}},r.a.createElement("b",null,"SpeechFlow")),", an autoencoder that can decompose speech into content, timbre, rhythm and pitch. The following GIF illustrates the working mechanism of SpeechFlow."),r.a.createElement("p",null),r.a.createElement("div",{style:{margin:"30px auto"}},r.a.createElement("img",{src:"spect/flow_plot.gif",alt:"animated",width:"900px"})),r.a.createElement("p",null,"Below are audio clips of aspect-specific conversion, which corresponds to ",r.a.createElement("font",{style:{color:"#58c3c2"}},r.a.createElement("b",null,"section 5.2"))," in the paper. It is an iteractive experience. For each source-target pair, you can:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("font",{style:{color:"#58c3c2"}},r.a.createElement("b",null,"Select the aspect(s) you wish to convert")),", and then the corresponding converted speech will automatically load."),r.a.createElement("li",null,r.a.createElement("font",{style:{color:"#58c3c2"}},r.a.createElement("b",null,"Flip the source and target speech"))," by toggling the switch.")),r.a.createElement(E,{root:"p226_p231_003002",reverse:"p231_p226_003002",uttr_id:"Utterance 1",bkg_id:"block2",lb_bkg_id:"block-label1"}),r.a.createElement(E,{root:"p240_p256_024001",reverse:"p256_p240_024001",uttr_id:"Utterance 2",bkg_id:"block2",lb_bkg_id:"block-label1"}),r.a.createElement(E,{root:"p231_p270_003002",reverse:"p270_p231_003002",uttr_id:"Utterance 3",bkg_id:"block2",lb_bkg_id:"block-label1"}),r.a.createElement(w,{root:"p226_p231_024002",reverse:"p231_p226_024002",uttr_id:"Something Fun",bkg_id:"block3",lb_bkg_id:"block-label2"}),r.a.createElement(E,{root:"p245_p258_001",reverse:"p258_p245_001",uttr_id:"Utterance 4",bkg_id:"block2",lb_bkg_id:"block-label1"}),r.a.createElement(E,{root:"p233_p240_003001",reverse:"p240_p233_003001",uttr_id:"Utterance 5",bkg_id:"block2",lb_bkg_id:"block-label1"}),r.a.createElement(E,{root:"p239_p226_006001",reverse:"p226_p239_006001",uttr_id:"Utterance 6",bkg_id:"block2",lb_bkg_id:"block-label1"}),r.a.createElement(E,{root:"p228_p270_024002",reverse:"p270_p228_024002",uttr_id:"Utterance 7",bkg_id:"block2",lb_bkg_id:"block-label1"}),r.a.createElement(E,{root:"p225_p258_001",reverse:"p258_p225_001",uttr_id:"Utterance 8",bkg_id:"block2",lb_bkg_id:"block-label1"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("wrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.7e077204.chunk.js.map