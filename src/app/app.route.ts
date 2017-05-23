import { RouterModule } from '@angular/router';

import { BoardModule } from "./modules/board/board.module";
import { SwiperComponent } from "./components/swiper/swiper.component";

export const RootRouter = RouterModule.forRoot([
  { path: '', redirectTo: 'swiper', pathMatch: 'full' },
  { path: 'swiper', component: SwiperComponent}
]);
