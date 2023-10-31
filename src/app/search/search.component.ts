import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() top100Albums: Album[]=[]; 
  @Output() filteredAlbums = new EventEmitter<Album[]>();
  searchTerm: string = '';
  
  searchAlbums() {
    this.filteredAlbums.emit(this.top100Albums.filter((album: Album) =>
      album['im:name']['label'].toLowerCase().includes(this.searchTerm.toLowerCase())
    ));
  }

  resetAlbums(){
    this.filteredAlbums.emit(this.top100Albums);
    this.searchTerm = '';
  }
}
