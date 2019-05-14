import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { WeatherService } from '../weather/weather.service';
@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(2)]);
  @Output() searchEvent = new EventEmitter<string>();
  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  this.search.valueChanges.debounceTime(1000).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        this.searchEvent.emit(this.searchValue);
      }
    });

}
