import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
