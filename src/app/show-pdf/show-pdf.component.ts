import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-show-pdf',
  templateUrl: './show-pdf.component.html',
  styleUrls: ['./show-pdf.component.css']
})
export class ShowPdfComponent implements OnInit {

  fileUrl: any;

  constructor(
    private apiClientService: ApiClientService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  showPDF() {
    this.apiClientService.getPDF()
      .then(blob => {
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
        //window.open(this.fileUrl);
      });
  }

}
