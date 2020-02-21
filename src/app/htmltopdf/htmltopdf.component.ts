import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html',
  styleUrls: ['./htmltopdf.component.css']
})
export class HtmltopdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild('content',{ 'static': true }) content: ElementRef;
  
  public downloadPDF(){
    const div = document.getElementById('print-invoice');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(div, options).then((canvas) => {

      var img = canvas.toDataURL("image/PNG");
      var doc = new jsPDF('p', 'mm', 'a4', 1);

      // Add image Canvas to PDF
      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');

      return doc;
    }).then((doc) => {
      doc.output('dataurlnewwindow');
    });
    // doc.output('save', 'filename.pdf'); //Try to save PDF as a file (not works on ie before 10, and some mobile devices)
    // doc.output('datauristring');        //returns the data uri string
    // doc.output('datauri');              //opens the data uri in current window
    // doc.output('dataurlnewwindow');     //opens the data uri in new window
  }
}
