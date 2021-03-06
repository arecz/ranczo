// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInLongAnimation =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fadeInLongAnimation', [

       // route 'enter' transition
       transition(':enter', [

           // css styles at start of transition
           style({ opacity: 0 }),

           // animation and styles at end of transition
           animate('.6s 3.5s', style({ opacity: 1 }))
       ]),
   ]);
