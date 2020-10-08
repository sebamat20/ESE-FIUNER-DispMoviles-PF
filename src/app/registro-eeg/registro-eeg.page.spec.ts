import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroEEGPage } from './registro-eeg.page';

describe('RegistroEEGPage', () => {
  let component: RegistroEEGPage;
  let fixture: ComponentFixture<RegistroEEGPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEEGPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroEEGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
