import { RouterModule } from '@angular/router';
import { PageDComponent } from "./page-d/page-d.component";

export const childRouter = RouterModule.forChild([
  { path: 'd', component:PageDComponent},
]);
