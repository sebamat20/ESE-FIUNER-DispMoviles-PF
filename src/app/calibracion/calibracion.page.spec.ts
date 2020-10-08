import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalibracionPage } from './calibracion.page';

describe('CalibracionPage', () => {
  let component: CalibracionPage;
  let fixture: ComponentFixture<CalibracionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalibracionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalibracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
