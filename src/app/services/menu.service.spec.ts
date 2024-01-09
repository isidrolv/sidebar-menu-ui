import { TestBed } from '@angular/core/testing';

import { MenuService} from './menu.service';
import {uri} from "../app.component";

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the getSideBarItems method', () => {
    expect(service.getSideBarItems).toBeTruthy();
  });

  it('should have the httpOptions property', () => {
    expect(service.httpOptions).toBeTruthy();
  });

  it('should have uri property set to http://localhost:5000/api', () => {
    expect(uri).toEqual('/api/v1');
  });

});
