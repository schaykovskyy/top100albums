import { Component, Input } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  @Input() displayedAlbums: Album[] = []; 

  constructor() { }
}