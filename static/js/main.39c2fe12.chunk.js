(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(22)},21:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(10),l=t.n(r),s=(t(21),t(2)),o=t(1),c=t(3),m=function(e){var a=e.openSidebar;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"sidebar-btn",onClick:a}),i.a.createElement("div",{className:"navbar"},i.a.createElement(s.c,{to:"/space",className:function(e){return e.isActive?"navbar__link--active":"navbar__link"}},i.a.createElement("b",null,"00")," home"),i.a.createElement(s.c,{to:"/destination",className:function(e){return e.isActive?"navbar__link--active":"navbar__link"}},i.a.createElement("b",null,"01")," destination"),i.a.createElement(s.c,{to:"/crew",className:function(e){return e.isActive?"navbar__link--active":"navbar__link"}},i.a.createElement("b",null,"02")," crew"),i.a.createElement(s.c,{to:"/technology",className:function(e){return e.isActive?"navbar__link--active":"navbar__link"}},i.a.createElement("b",null,"03")," technology")))},u=function(e){var a=e.isSidebarOpen,t=e.closeSidebar;return i.a.createElement("aside",{className:"".concat(a?"sidebar sidebar--active":"sidebar")},i.a.createElement("button",{className:"sidebar__close-btn",onClick:t}),i.a.createElement(s.b,{to:"/space",className:"sidebar__link"},i.a.createElement("b",null,"00")," home"),i.a.createElement(s.b,{to:"/destination",className:"sidebar__link"},i.a.createElement("b",null,"01")," destination"),i.a.createElement(s.b,{to:"/crew",className:"sidebar__link"},i.a.createElement("b",null,"02")," crew"),i.a.createElement(s.b,{to:"/technology",className:"sidebar__link"},i.a.createElement("b",null,"03")," technology"))},p=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1];return i.a.createElement("header",null,i.a.createElement(s.b,{to:"/space"},i.a.createElement("img",{className:"header__logo",src:"/space/assets/shared/logo.svg",alt:"home button"})),i.a.createElement("div",{className:"header__line"}),i.a.createElement(m,{openSidebar:function(){r(!0)}}),i.a.createElement(u,{closeSidebar:function(){r(!1)},isSidebarOpen:t}))},d=function(){return i.a.createElement("div",{className:"home"},i.a.createElement(p,null),i.a.createElement("main",{className:"flexbox home__content"},i.a.createElement("div",{className:"flex-item"},i.a.createElement("h5",null,"So, you want to travel to"),i.a.createElement("h1",null,"Space"),i.a.createElement("p",null,"Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!")),i.a.createElement("div",null,i.a.createElement(s.b,{to:"/destination"},i.a.createElement("div",{className:"home__explore"},"Explore")))))},h=t(7),g=t(24),b=function(){var e=Object(n.useState)(h.destinations),a=Object(c.a)(e,1)[0],t=Object(n.useState)(0),r=Object(c.a)(t,2),l=r[0],s=r[1],o=a[l],m=o.name,u=o.images,d=o.description,b=o.distance,E=o.travel;return i.a.createElement("div",{className:"destination"},i.a.createElement(p,null),i.a.createElement("main",null,i.a.createElement(g.a.h5,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("b",null,"01")," pick your destination"),i.a.createElement("div",{className:"flexbox destination__content"},i.a.createElement(g.a.img,{className:"destination__img",src:"/space".concat(u.webp),alt:m,initial:{x:"-30vw",opacity:0},animate:{x:0,opacity:1},transition:{duration:1.2,ease:"easeOut"}}),i.a.createElement(g.a.div,{className:"flex-item destination__text",initial:{x:"30vw",opacity:0},animate:{x:0,opacity:1},transition:{duration:1.2,ease:"easeOut"}},i.a.createElement("div",null,a.map(function(e,a){return i.a.createElement("button",{className:"destination__btn ".concat(a===l&&"destination__btn--active"),key:a.toString(),onClick:function(){return s(a)}},i.a.createElement("span",null,e.name))})),i.a.createElement("h2",null,m),i.a.createElement("p",null,d),i.a.createElement("div",{className:"destination__line"}),i.a.createElement("div",{className:"flexbox destination__footer"},i.a.createElement("div",{className:"destination__footnote"},i.a.createElement("span",null,"avg. distance"),i.a.createElement("h3",null,b)),i.a.createElement("div",{className:"destination__footnote"},i.a.createElement("span",null,"est. travel time"),i.a.createElement("h3",null,E)))))))},E=function(){var e=Object(n.useState)(h.crew),a=Object(c.a)(e,1)[0],t=Object(n.useState)(0),r=Object(c.a)(t,2),l=r[0],s=r[1],o=a[l],m=o.name,u=o.images,d=o.role,b=o.bio;return i.a.createElement("div",{className:"crew"},i.a.createElement(p,null),i.a.createElement("main",null,i.a.createElement(g.a.h5,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("b",null,"02")," meet your crew"),i.a.createElement(g.a.div,{className:"flexbox crew__content",initial:{y:"50vh",opacity:0},animate:{y:0,opacity:1},transition:{duration:1.2,ease:"easeOut"}},i.a.createElement("img",{className:"crew__img",src:"/space".concat(u.webp),alt:m}),i.a.createElement("div",{className:"crew__line"}),i.a.createElement("div",{className:"crew__btn-container"},a.map(function(e,a){return i.a.createElement("button",{key:a.toString(),onClick:function(){return s(a)},className:"crew__btn ".concat(a===l&&"crew__btn--active")})})),i.a.createElement("div",{className:"flex-item crew__text"},i.a.createElement("h6",null,d),i.a.createElement("h4",null,m),i.a.createElement("p",null,b)))))},f=t(11),y=function(){var e=Object(n.useState)(h.technology),a=Object(c.a)(e,1)[0],t=Object(n.useState)(0),r=Object(c.a)(t,2),l=r[0],s=r[1],o=a[l],m=o.name,u=o.images,d=o.description,b=Object(f.useMediaQuery)({query:"(min-width: 1024px)"});return i.a.createElement("div",{className:"technology"},i.a.createElement(p,null),i.a.createElement("main",null,i.a.createElement(g.a.h5,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("b",null,"03")," space launch 101"),i.a.createElement(g.a.div,{className:"flexbox technology__content",initial:{y:"-50vh",opacity:0},animate:{y:0,opacity:1},transition:{duration:1.2,ease:"easeOut"}},i.a.createElement("img",{className:"technology__img",src:"/space".concat(b?u.portrait:u.landscape),alt:m}),i.a.createElement("div",{className:"technology__btn-container"},a.map(function(e,a){return i.a.createElement("button",{className:"technology__btn ".concat(a===l&&"technology__btn--active"),key:a.toString(),onClick:function(){return s(a)}},a+1)})),i.a.createElement("div",{className:"flex-item technology__text"},i.a.createElement("span",null,"the terminology..."),i.a.createElement("h4",null,m),i.a.createElement("p",null,d)))))},v=function(){return i.a.createElement("div",{className:"destination"},i.a.createElement(p,null),i.a.createElement("div",{className:"flexbox"},i.a.createElement("div",{className:"flex-item"},i.a.createElement("h3",null,"oh no, looks like that page is lost in space")),i.a.createElement("div",{className:"flex-item"},i.a.createElement(s.b,{to:"/home"},i.a.createElement("span",null,"back home")))))},w=function(){return i.a.createElement(s.a,null,i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/space",element:i.a.createElement(d,null)}),i.a.createElement(o.a,{path:"/destination",element:i.a.createElement(b,null)}),i.a.createElement(o.a,{path:"/crew",element:i.a.createElement(E,null)}),i.a.createElement(o.a,{path:"/technology",element:i.a.createElement(y,null)}),i.a.createElement(o.a,{path:"*",element:i.a.createElement(v,null)})))};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)))},7:function(e){e.exports={destinations:[{name:"Moon",images:{png:"/assets/destination/image-moon.png",webp:"/assets/destination/image-moon.webp"},description:"See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 km",travel:"3 days"},{name:"Mars",images:{png:"/assets/destination/image-mars.png",webp:"/assets/destination/image-mars.webp"},description:"Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",distance:"225 mil. km",travel:"9 months"},{name:"Europa",images:{png:"/assets/destination/image-europa.png",webp:"/assets/destination/image-europa.webp"},description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 mil. km",travel:"3 years"},{name:"Titan",images:{png:"/assets/destination/image-titan.png",webp:"/assets/destination/image-titan.webp"},description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",distance:"1.6 bil. km",travel:"7 years"}],crew:[{name:"Douglas Hurley",images:{png:"/assets/crew/image-douglas-hurley.png",webp:"/assets/crew/image-douglas-hurley.webp"},role:"Commander",bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{name:"Mark Shuttleworth",images:{png:"/assets/crew/image-mark-shuttleworth.png",webp:"/assets/crew/image-mark-shuttleworth.webp"},role:"Mission Specialist",bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{name:"Victor Glover",images:{png:"/assets/crew/image-victor-glover.png",webp:"/assets/crew/image-victor-glover.webp"},role:"Pilot",bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{name:"Anousheh Ansari",images:{png:"/assets/crew/image-anousheh-ansari.png",webp:"/assets/crew/image-anousheh-ansari.webp"},role:"Flight Engineer",bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],technology:[{name:"Launch vehicle",images:{portrait:"/assets/technology/image-launch-vehicle-portrait.jpg",landscape:"/assets/technology/image-launch-vehicle-landscape.jpg"},description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},{name:"Spaceport",images:{portrait:"/assets/technology/image-spaceport-portrait.jpg",landscape:"/assets/technology/image-spaceport-landscape.jpg"},description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."},{name:"Space capsule",images:{portrait:"/assets/technology/image-space-capsule-portrait.jpg",landscape:"/assets/technology/image-space-capsule-landscape.jpg"},description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}}},[[12,1,2]]]);
//# sourceMappingURL=main.39c2fe12.chunk.js.map