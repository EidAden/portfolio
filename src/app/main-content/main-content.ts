import { Component } from '@angular/core';
import { LandingPage } from '../landing/landing-page/landing-page';

import { WhyMe } from '../why-me/why-me';
import { Nav } from '../shared/nav/nav';
import { MySkills } from '../my-skills/my-skills';

@Component({
  selector: 'app-main-content',
  imports: [LandingPage, Nav, WhyMe, MySkills],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {}
