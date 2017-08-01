import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, AfterContentInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'Tour of Heroes';
  @ViewChild('tpl')
  tpl: TemplateRef<any>;

  @ViewChild('tpl', {read: ViewContainerRef})
  tplVcRef: ViewContainerRef;

  ngAfterContentInit(): void {
    // const commentElement = this.tpl.elementRef.nativeElement;
    // const embeddedView = this.tpl.createEmbeddedView(null);
    // embeddedView.rootNodes.forEach(node => {
    //   commentElement.parentNode
    //     .insertBefore(node, commentElement.nextSibling);
    // });
    // this.tplVcRef.createEmbeddedView(this.tpl);
    setTimeout(() => {
      this.tplVcRef.createEmbeddedView(this.tpl);
    }, 1000);
  }
}
