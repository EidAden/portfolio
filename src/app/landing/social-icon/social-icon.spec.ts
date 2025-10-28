import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIcon } from './social-icon';

describe('SocialIcon', () => {
  let component: SocialIcon;
  let fixture: ComponentFixture<SocialIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
