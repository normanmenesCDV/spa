import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  timeElapsed = Date.now();
  today = new Date(this.timeElapsed);
  data = this.today.toUTCString();
}
