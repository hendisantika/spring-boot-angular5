const routes: Routes = [{path: 'user', component: UserComponent}, {path: 'login', component: LoginComponent}, {
  path: '',
  component: LoginComponent
}];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule], declarations: []})
export class AppRoutingModule {
}
