import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { UsersListComponent } from "./components/users-list/users-list.component";
import { CreateUserComponent } from "./components/user-create/user-create.component";

import { AuthenticationGuard } from "./services/authentication.guard";

const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: "users",
        canActivate: [AuthenticationGuard],
        children: [
            {
                path: "",
                component: UsersListComponent
            },
            {
                path: "create",
                component: CreateUserComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: "/dashboard"
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {

}