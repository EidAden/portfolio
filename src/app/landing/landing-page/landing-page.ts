import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Menu } from '../menu/menu';
import { WhyMe } from '../why-me/why-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { ContactMe } from '../contact-me/contact-me';
import { Testimonials } from '../testimonials/testimonials';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, Menu, WhyMe, MySkills, MyProjects, ContactMe, Testimonials],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
