import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "folder/inbox",
    pathMatch: "full"
  },
  {
    path: "folder/:id",
    loadChildren: "./folder/folder.module#FolderPageModule",
    canLoad: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
