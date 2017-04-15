import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board.component';

export const BoardRouter: Routes = [
  { path: 'board', component: BoardComponent },
]

export const BoarderRouterModule = RouterModule.forChild(BoardRouter)
