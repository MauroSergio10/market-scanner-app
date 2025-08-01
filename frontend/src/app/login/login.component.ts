import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxMaskDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
}
