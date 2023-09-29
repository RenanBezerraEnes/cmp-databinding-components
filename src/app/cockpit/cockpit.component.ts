import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  
  @Output() 
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();


  @Output('bpCreated') 
  bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
