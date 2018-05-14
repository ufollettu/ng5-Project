import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {ErrorPageComponent} from './error-page.component';

const errorPageRoutes = [
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forChild(errorPageRoutes)
  ],
  exports: [RouterModule]
})
export class ErrorPageRoutingModule {
}
