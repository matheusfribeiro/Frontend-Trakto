import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoginPageComponent } from "./components/login-page/login-page.component"
import { HomeComponent } from "./components/home/home.component"


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}