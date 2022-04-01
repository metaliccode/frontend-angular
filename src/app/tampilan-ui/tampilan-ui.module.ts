import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TombolComponent } from './tombol/tombol.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TombolComponent],
  imports: [CommonModule, MatButtonModule],
})
export class TampilanUiModule {}
