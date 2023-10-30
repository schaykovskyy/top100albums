import { Component, OnInit} from '@angular/core';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Top100'
  top100Albums: any;
  constructor(private albumService: AlbumsService){}

  ngOnInit(): void {
      this.albumService.getTop100Albums().subscribe((data)=>{
        this.top100Albums = data.feed.entry;
      });
  }
}
