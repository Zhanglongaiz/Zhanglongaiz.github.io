window.__require=function e(i,t,n){function o(s,r){if(!t[s]){if(!i[s]){var a=s.split("/");if(a=a[a.length-1],!i[a]){var h="function"==typeof __require&&__require;if(!r&&h)return h(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var u=t[s]={exports:{}};i[s][0].call(u.exports,function(e){return o(i[s][1][e]||e)},u,u.exports,e,i,t,n)}return t[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<n.length;s++)o(n[s]);return o}({Ani1:[function(e,i,t){"use strict";cc._RF.push(i,"015058znoFM94HCf1iofM0l","Ani1"),cc.Class({extends:cc.Component,properties:{spriteframes:{type:cc.SpriteFrame,default:[]}},onLoad:function(){this.isPlaying=!1,this.isLoop=!0,this.sprite=this.getComponent(cc.Sprite),this.sprite||(this.sprite=this.addComponent(cc.Sprite)),this.countTime=.05},start:function(){this.node.y=9e3,this.node.zIndex=3},Play:function(){this.sprite.spriteFrame=this.spriteframes[0],this.time=0,this.isPlaying=!0,this.index=0,this.node.y=0},Stop:function(){this.isPlaying=!1,this.node.y=9e3},SetLoop:function(e){this.isLoop=e},update:function(e){this.isPlaying&&(this.time+=e,this.time>=this.countTime&&(this.time-=this.countTime,this.index+=1,this.index>=this.spriteframes.length?this.isLoop?this.index=0:(this.isPlaying=!1,this.node.y=9e3):this.sprite.spriteFrame=this.spriteframes[this.index]))}}),cc._RF.pop()},{}],ontouch:[function(e,i,t){"use strict";cc._RF.push(i,"7848eyZy4dAbY6UKMIlF6zG","ontouch"),cc.Class({extends:cc.Component,properties:{audioTrue:{default:null,type:cc.AudioClip},audioFalse:{default:null,type:cc.AudioClip},audioGood:{default:null,type:cc.AudioClip},audioHeCai:{default:null,type:cc.AudioClip},Ani1:cc.Node,Ani2:cc.Node,Tree1:cc.Node,Tree2:cc.Node,Tree3:cc.Node,Tree4:cc.Node,SmallTree2:cc.Node,SmallTree3:cc.Node},start:function(){this.delay=!1,this.gameend=!1,this.Anijs=this.Ani1.getComponent("Ani1"),this.Anijs2=this.Ani2.getComponent("Ani1"),this.SmallTree2.y=1e3,this.SmallTree3.y=1e3;var e=this;this.Tree1.on(cc.Node.EventType.TOUCH_START,function(i){var t=i.getLocation();e.Tree1.x=t.x-960,e.Tree1.y=t.y-540}),this.Tree1.on(cc.Node.EventType.TOUCH_MOVE,function(i){var t=i.getLocation();e.Tree1.x=t.x-960,e.Tree1.y=t.y-540}),this.Tree1.on(cc.Node.EventType.TOUCH_END,function(i){e.CheckTree(1)}),this.Tree2.on(cc.Node.EventType.TOUCH_START,function(i){var t=i.getLocation();e.Tree2.x=t.x-960,e.Tree2.y=t.y-540}),this.Tree2.on(cc.Node.EventType.TOUCH_MOVE,function(i){var t=i.getLocation();e.Tree2.x=t.x-960,e.Tree2.y=t.y-540}),this.Tree2.on(cc.Node.EventType.TOUCH_END,function(i){e.CheckTree(2)}),this.Tree3.on(cc.Node.EventType.TOUCH_START,function(i){var t=i.getLocation();e.Tree3.x=t.x-960,e.Tree3.y=t.y-540}),this.Tree3.on(cc.Node.EventType.TOUCH_MOVE,function(i){var t=i.getLocation();e.Tree3.x=t.x-960,e.Tree3.y=t.y-540}),this.Tree3.on(cc.Node.EventType.TOUCH_END,function(i){e.CheckTree(3)}),this.Tree4.on(cc.Node.EventType.TOUCH_START,function(i){var t=i.getLocation();e.Tree4.x=t.x-960,e.Tree4.y=t.y-540}),this.Tree4.on(cc.Node.EventType.TOUCH_MOVE,function(i){var t=i.getLocation();e.Tree4.x=t.x-960,e.Tree4.y=t.y-540}),this.Tree4.on(cc.Node.EventType.TOUCH_END,function(i){e.CheckTree(4)})},CheckTree:function(e){var i;cc.log("TreeNum="+e);var t=0;1==e?(i=this.Tree1,t=269):2==e?(i=this.Tree2,t=88):3==e?(i=this.Tree3,t=-91):4==e&&(i=this.Tree4,t=-250),this.PosCheck(-220,160,i)?(i.x=643,i.y=t,cc.audioEngine.play(this.audioFalse,!1,1)):this.PosCheck(-220,-235,i)?(this.SmallTree2.y=0,i.y=1e3,cc.audioEngine.play(this.audioTrue,!1,1)):this.PosCheck(460,160,i)?(this.SmallTree3.y=0,i.y=1e3,cc.audioEngine.play(this.audioTrue,!1,1)):(this.PosCheck(460,-235,i),i.x=643,i.y=t,cc.audioEngine.play(this.audioFalse,!1,1)),this.AnimationCheck()},PosCheck:function(e,i,t){var n=t.position;return n.x>=e-120&&n.x<=e+120&&n.y>=i-120&&n.y<=i+120},AnimationCheck:function(){0==this.gameend&&0==this.SmallTree2.y&&0==this.SmallTree3.y&&(this.AniMation(),this.gameend=!0)},AniMation:function(){this.DelayCallBack(.7,function(){cc.audioEngine.play(this.audioHeCai,!1,1),this.Anijs2.Play(),this.Anijs2.SetLoop(!1),cc.audioEngine.play(this.audioGood,!1,1),this.Anijs.Play()})},OnCli_False:function(){cc.audioEngine.play(this.audioFalse,!1,1),cc.log("false")},DelayCallBack:function(e,i){this.delay=!0,this.delayTime=e,this.countTime=0,this.callback=i},update:function(e){this.delay&&(this.countTime+=e,this.countTime>=this.delayTime&&(this.delay=!1,this.callback()))}}),cc._RF.pop()},{}],touchScale:[function(e,i,t){"use strict";cc._RF.push(i,"e1ef45Gb+BEwpRXiNIM/Iyw","touchScale"),cc.Class({extends:cc.Component,properties:{FadeoutList:{type:cc.Node,default:[]}},start:function(){this.posx=this.node.x,this.posy=this.node.y,this.isbig=!1;var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(i){if(e.isbig){for(var t=0;t<e.FadeoutList.length;t++)e.FadeoutList[t].runAction(cc.fadeIn(.2));e.isbig=!1,e.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.1,e.posx,e.posy),cc.scaleTo(.1,1)),cc.callFunc(function(){e.node.zIndex=0})))}else{for(t=0;t<e.FadeoutList.length;t++)e.FadeoutList[t].runAction(cc.fadeOut(.2));e.node.zIndex=3,e.isbig=!0,e.node.runAction(cc.spawn(cc.moveTo(.1,0,0),cc.scaleTo(.1,2)))}})}}),cc._RF.pop()},{}]},{},["Ani1","ontouch","touchScale"]);