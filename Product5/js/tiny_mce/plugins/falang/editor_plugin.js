(function(){var a={96:247,49:1633,50:1634,51:1635,52:1636,53:1637,54:1638,55:1639,56:1640,57:1641,48:1632,113:1590,119:1589,101:1579,114:1602,116:1601,121:1594,117:1593,105:1607,111:1582,112:1581,91:1580,93:1670,92:1662,97:1588,115:1587,100:1740,102:1576,103:1604,104:1575,106:1578,107:1606,108:1605,59:1705,39:1711,122:1592,120:1591,99:1586,118:1585,98:1584,110:1583,109:1574,44:1608,126:215,40:41,41:40,81:1611,87:1612,69:1613,82:1585,84:1548,89:1563,85:44,73:93,79:91,80:92,123:125,125:123,65:1614,83:1615,68:1616,70:1617,71:1728,72:1570,74:1600,75:171,76:187,90:1577,88:1610,67:1688,86:1572,66:1573,78:1571,77:1569,63:1567};tinymce.create("tinymce.plugins.FaLang",{createControl:function(e,b){switch(e){case"faen":var d=b.createSplitButton("faen",{title:"فارسی",image:tinymce.baseURL+"/plugins/falang/images/fa.gif",onclick:function(){d.showMenu(1)}});d.onRenderMenu.add(function(g,f){f.add({title:"فارسی",id:"fa",onclick:function(){tinymce.DOM.get(g.id+"_action").childNodes[0].src=tinymce.baseURL+"/plugins/falang/images/fa.gif";tinymce.DOM.get(g.id+"_action").title="فارسی";b.editor.curentlanguage="fa"}});f.add({title:"English",id:"en",onclick:function(){tinymce.DOM.get(g.id+"_action").childNodes[0].src=tinymce.baseURL+"/plugins/falang/images/en.gif";tinymce.DOM.get(g.id+"_action").title="English";b.editor.curentlanguage="en"}})});return d}return null},init:function(b,c){b.curentlanguage="fa";b.isfaenenabled=true;b.ismanualfired=false;b.onNodeChange.add(function(e,d,f){if(!e.isfaenenabled){d.setActive("faen",false);d.setDisabled("faen",true)}else{d.setActive("faen",true)}});b.onKeyPress.add(function(d,h){if(d.curentlanguage=="fa"&&d.isfaenenabled){h=h||window.event;eElement=(h.srcElement)?h.srcElement:h.originalTarget;if(eElement.tagName=="HTML"){eElement=eElement.childNodes[1]}var g=(h.keyCode||h.charCode);if(tinymce.isOpera){g=h.which}if((h.charCode!=null)&&(h.charCode!=g)){return}else{if(h.ctrlKey||h.altKey||h.metaKey||g==13||g==27||g==8){return}else{if(g>128){if(d.ismanualfired){d.ismanualfired=false;return}else{if(d.isfaenenabled){d.isfaenenabled=false;d.nodeChanged()}}return}else{var i=g;if(g==32&&h.shiftKey){i=8204}else{i=a[g]||g}if(i!=g){try{if(tinymce.isIE){h.keyCode=i}else{var j=document.createEvent("KeyEvents");j.initKeyEvent("keypress",true,true,document.defaultView,false,false,false,false,0,i);h.preventDefault();d.ismanualfired=true;h.target.dispatchEvent(j)}}catch(f){d.isfaenenabled=false;return false}}}}}}})},getInfo:function(){return{longname:"tinyMCE Persian Keyboard",author:"Rad Danesh",authorurl:"http://www.raddanesh.com/",infourl:"http://www.samansystems.com/",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add("falang",tinymce.plugins.FaLang)})();