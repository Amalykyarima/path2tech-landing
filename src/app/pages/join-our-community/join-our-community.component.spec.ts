import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOurCommunityComponent } from './join-our-community.component';

describe('JoinOurCommunityComponent', () => {
  let component: JoinOurCommunityComponent;
  let fixture: ComponentFixture<JoinOurCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinOurCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinOurCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
