import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrihlaskaComponent } from './HiddenComponents/prihlaska/prihlaska.component';
import { SearchComponent } from './search/search.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DatingAppProfilesComponent } from './dating-app-profiles/dating-app-profiles.component';
import { DetailedUserProfileComponent } from './dating-app-profiles/detailed-user-profile/detailed-user-profile.component';
import { CvicnyComponent } from './HiddenComponents/cvicny/cvicny.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'prihlaska', component: PrihlaskaComponent },
    { path: 'vyhladavac', component: SearchComponent },
    { path: 'obchod-copy', loadChildren: () => import('./obchod-copy/obchod-copy.module').then(m => m.ObchodCopyModule) },
    { path: "statistika-predaja", loadChildren: () => import('./statistika-predaja/statistika-predaja.module').then(m => m.StatistikaPredajaModule) },
    { path: "dating-app", component: DatingAppProfilesComponent },
    { path: 'dating-app/user/:user', component: DetailedUserProfileComponent, },
    { path: "nakup-produktov", component: ShoppingCartComponent },
    { path: "cvicny", component: CvicnyComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
