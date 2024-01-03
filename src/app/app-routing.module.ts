import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LogComponent } from './comps/log/log.component';
import { UserFormComponent } from './comps/log/user-form/user-form.component';
import { DataTableComponent } from './comps/log/data-table/data-table.component';
import { AuthGuard } from './Authfile/auth.guard';

const routes: Routes = [
  {
path:'',
component:LogComponent,

  },
  {
path:'form',
component:UserFormComponent,
canActivate:[AuthGuard]

  },
  {
path:'table',
component:DataTableComponent,
canActivate:[AuthGuard]

  },


  {
    path:'**',
   redirectTo:'/'
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
