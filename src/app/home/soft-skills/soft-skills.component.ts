import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
    selector: 'app-soft-skills',
    templateUrl: './soft-skills.component.html',
    styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent {

}
