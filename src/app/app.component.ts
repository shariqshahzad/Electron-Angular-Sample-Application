import { Component, OnInit } from "@angular/core";
import { Titlebar, Color } from 'custom-electron-titlebar';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
  ngOnInit()
  {
    // let MyTitleBar = new Titlebar({
    //   backgroundColor: Color.fromHex('#03a9f4')
    // });
    // MyTitleBar.updateTitle('Our Code World Tutorials Rock !');
  }
  constructor() {

  }
  title = "black-dashboard-angular";
  
}
