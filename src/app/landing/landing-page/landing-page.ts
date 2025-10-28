import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Logo } from '../logo/logo';
import { SocialIcon } from '../social-icon/social-icon';
import { ScrollIndicator } from '../scroll-indicator/scroll-indicator';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, Logo, SocialIcon, ScrollIndicator],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
