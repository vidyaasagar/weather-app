import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule,
         MatToolbarModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule
        } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
