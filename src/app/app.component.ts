import { Component, OnInit } from '@angular/core'
import * as fs from 'fs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'app'
    fileList: string[]
    opened = false
    ngOnInit(): void {
        this.fileList = fs.readdirSync('.')
    }
}
