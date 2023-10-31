import { Component, OnInit} from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from './album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Top100'
  top100Albums: Album[] =[];
  displayedAlbums: Album[]=[];
  constructor(private albumService: AlbumsService){}

  ngOnInit(): void {
      this.albumService.getTop100Albums().subscribe((data)=>{
        this.top100Albums = this.displayedAlbums = data.feed.entry;
        // this.displayedAlbums = data.feed.entry;
      });
  }
  updateDisplayedAlbums(filteredAlbums:Album[]){
    this.displayedAlbums = filteredAlbums;
  }
}
