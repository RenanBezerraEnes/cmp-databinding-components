import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  ngOnInit(): void {
    console.log(this.paragraph.nativeElement.textContent, 'BEFORE')
  }

  ngAfterContentInit(): void {
    console.log(this.paragraph.nativeElement.textContent, 'AFTER')
  }
}
