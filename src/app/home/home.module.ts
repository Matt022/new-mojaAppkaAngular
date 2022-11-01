import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstInfoComponent } from './first-info/first-info.component';
import { InterestsComponent } from './interests/interests.component';
import { InternshipComponent } from './internship/internship.component';
import { ProgrammingBeginsComponent } from './programming-begins/programming-begins.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './home.component';



@NgModule({
    declarations: [
        HomeComponent,
        FirstInfoComponent,
        InterestsComponent,
        SoftSkillsComponent,
        ProgrammingBeginsComponent,
        InternshipComponent,
    ],
    imports: [
        CommonModule,
        SwiperModule
    ]
})
export class HomeModule { }
