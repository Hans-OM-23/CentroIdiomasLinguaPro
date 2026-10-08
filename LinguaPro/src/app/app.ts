import { Component, signal } from '@angular/core';
import { Header } from './Componets/header/header';
import { Main } from './Componets/main/main';
import { Aside } from './Componets/aside/aside';
import { Footer } from './Componets/footer/footer';

@Component({
  imports: [Header, Main, Aside, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LinguaPro');
}
