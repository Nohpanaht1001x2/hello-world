import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";


//fadeInmini =
export let fadeIn = trigger('fadeIn', [
  transition('* => *', [ //element become exist 0
    style({
      opacity: 0,
      width: '0px',
    }),
    animate(600)//implicitly style with default width and opacity
  ])
])
export let fadeInEx = trigger('fadeInEx', [
  state('void', style({
    opacity: 0
  })),
  transition('void => *', [
    style({
      opacity: 0,
      width: '0px'
    }),
    animate('1000ms ease-in') //implicitly style with default width and opacity
  ])
])
export let fadeInmini = trigger('fadeInmini', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(600)
  ])
])
export let fadeInInframe = trigger('fadeInInframe', [
  state('wow', style({})),
  transition('*<=>wow', [
    style({
      opacity: 0,
      width: '10%',
    }),
    animate('1000ms 100ms ease', keyframes([
      // style({offset:0.3,transform: 'rotate(60deg)'}),
      style({offset: 0.5, transform: 'rotate(180deg)'}),
      style({opacity: 0.7, offset: 0.7, width: '300%',}),
      style({opacity: 1, offset: 1, width: '*', transform: 'rotate(360deg)'})
    ]))
  ])
])
export let fadeInframe = trigger('fadeInframe', [
  state('standby', style({opacity: 1})),
  state('hover', style({opacity: 1})),
  transition('void=>*,standby<=>hover', [
    animate('1000ms 100ms ease', keyframes([
      // style({offset:0.3,transform: 'rotate(60deg)'}),
      style({offset: 0,width:'*',transform: 'rotate(0deg)','background': '*'}),
      style({offset: 0.3,width:'160%',transform: 'rotate(108deg)','background': 'blue'}),
      style({offset: 0.5,width:'200%',transform: 'rotate(180deg)','background': '#f75676'}),
      style({offset: 0.7,width:'160%',transform: 'rotate(252deg)','background': 'blue'}),
      style({offset: 1,width:'*',transform: 'rotate(360deg)','background': '*'})
    ])),
  ]),
])
export let fadeOut = trigger('fadeOut', [
  transition(' => *', [ //element become exist 0
    style({
      opacity: 1
    }),
    animate(600, style({opacity: 0}))
  ])
])

