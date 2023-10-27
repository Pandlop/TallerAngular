import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListarComponent } from './series-listar/series-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesListarComponent],
  exports: [SeriesListarComponent]
})
export class SerieModule { }
