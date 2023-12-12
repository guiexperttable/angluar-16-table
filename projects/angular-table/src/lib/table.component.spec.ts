import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TableComponent} from "./table.component";
import {DomService} from "./service/dom-service";
import {RenderWrapperFactory} from "./service/render-wrapper-factory";
import {RendererWrapper} from "./service/renderer-wrapper";

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TableComponent, DomService, RenderWrapperFactory, RendererWrapper
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
