import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from './../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherService } from './weather.service';
import { WeatherServiceFake } from './weather.service.fake';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, NoopAnimationsModule],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
