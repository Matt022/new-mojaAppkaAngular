import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { MatarialovyModulModule } from '../Modules/matarialovy-modul.module';

import { AppComponent } from './app.component';

import { PrihlaskaComponent } from './HiddenComponents/prihlaska/prihlaska.component';

import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HighlightDirective } from '../CustomDirectives/highlight.directive';
import { SetBackgroundDirective } from '../CustomDirectives/set-background.directive';
import { MyNgIfDirective } from 'src/CustomDirectives/my-ng-if.directive';
import { MyNgElseDirective } from 'src/CustomDirectives/my-ng-else.directive';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartBadgeComponent } from './shopping-cart/shopping-cart-badge/shopping-cart-badge.component';
import { HomeModule } from './home/home.module';
import { DatingAppProfilesComponent } from './dating-app-profiles/dating-app-profiles.component';
import { DetailedUserProfileComponent } from './dating-app-profiles/detailed-user-profile/detailed-user-profile.component';
import { CvicnyComponent } from './HiddenComponents/cvicny/cvicny.component';
import { ModalDialogComponent } from './HiddenComponents/modal-dialog/modal-dialog.component';

const components = [
    PrihlaskaComponent,
    SearchComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    ShoppingCartBadgeComponent,
    DatingAppProfilesComponent,
    DetailedUserProfileComponent,
    CvicnyComponent,
    ModalDialogComponent,
];

const directives = [
    SetBackgroundDirective,
    HighlightDirective,
    MyNgIfDirective,
    MyNgElseDirective,
];

@NgModule({
    declarations: [
        AppComponent,
        ...components,
        ...directives,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        SwiperModule,
        MatarialovyModulModule,
        ReactiveFormsModule,
        HomeModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
