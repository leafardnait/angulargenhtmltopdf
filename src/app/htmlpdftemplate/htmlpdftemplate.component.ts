import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-htmlpdftemplate',
  templateUrl: './htmlpdftemplate.component.html',
  styleUrls: ['./htmlpdftemplate.component.css']
})
export class HtmlpdftemplateComponent implements OnInit {
  sampleData = ['01', '02', '03', '04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20'];
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('content',{ 'static': true }) content: ElementRef;
  
  public downloadPDF(){
    const div = document.getElementById('print-html-pdf');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(div, options).then((canvas) => {

      var img = canvas.toDataURL("image/PNG");
      var doc = new jsPDF('l', 'mm', 'a4', 0);

      // Add image Canvas to PDF
      const marginLR = 5;
      const marginTB = 20;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * marginLR;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', marginLR, marginTB, pdfWidth, pdfHeight, undefined, 'FAST');
      
      return doc;
    }).then((doc) => {
      doc.output('dataurlnewwindow');
    });
  }
}
