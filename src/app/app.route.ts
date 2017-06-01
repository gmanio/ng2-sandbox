import { RouterModule } from '@angular/router';
import { SwiperComponent } from "./components/swiper/swiper.component";
import { PageAComponent } from "./components/page-a/page-a.component";
import { PageBComponent } from "./components/page-b/page-b.component";
import { PageCComponent } from "./components/page-c/page-c.component";

export const RootRouter = RouterModule.forRoot([
  { path: '', redirectTo: 'swiper', pathMatch: 'full' },
  { path: 'a', component:PageAComponent},
  { path: 'b', component:PageBComponent},
  { path: 'c', component:PageCComponent},
  { path: 'swiper', component: SwiperComponent}
]);
