import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-cors',
  templateUrl: './test-cors.component.html',
  styleUrls: ['./test-cors.component.scss']
})
export class TestCorsComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  testCORS() {
    var url = "https://localhost:5001/api/values/get";
    this.http.get(url).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
