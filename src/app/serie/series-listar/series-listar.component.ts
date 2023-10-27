import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  
  constructor(private serieService: SerieService) { }
  series: Serie[] = [];
  promedio: number = 0;
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.promedio = this.darPromedioTemporadas(series);
    });

  }


  darPromedioTemporadas(series: Serie[]): number{
    let promedio:number = 0;
    for(let index=0; index<series.length;index++){
        let serie: Serie = series[index];
        promedio+=serie.seasons;
    }
    return promedio/series.length

}

  ngOnInit() {
    this.getSeries();
    
  }

}
