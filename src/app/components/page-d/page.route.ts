import { RouterModule } from '@angular/router';
import { PageDComponent } from "./page-d/page-d.component";
import { PageDContainerComponent } from "./page-d.component";

export const childRouter = RouterModule.forChild([
  {
    path: 'd', component: PageDContainerComponent,
    children: [
      { path: '', redirectTo: 'd-sub', pathMatch: 'full' },
      { path: 'd-sub', component: PageDComponent }
    ]
  },
]);
