import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryRecieverComponent } from './memory-reciever.component';

describe('MemoryRecieverComponent', () => {
  let component: MemoryRecieverComponent;
  let fixture: ComponentFixture<MemoryRecieverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryRecieverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
