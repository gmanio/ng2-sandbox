import { trigger, state, animate, transition, style } from '@angular/animations';

export const routerAnimation =
  trigger('routerAnimation', [

    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),

    // when enter page
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('1s linear', style({ transform: 'translateX(0%)' }))
    ]),

    //when leave page
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('1s linear', style({ transform: 'translateX(-100%)' }))
    ])
  ]);

export const leaveAnimation = trigger('leaveAnimation', [
  transition(':leave', [
    style({ position: 'fixed', width: '100%', height: '100%' }),
    animate('1s linear', style({ transform: 'translateX(-100%)' }))
  ])
]);
