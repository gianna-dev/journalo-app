import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss'],
})
export class MotivationComponent implements OnInit {
  motivations = [
    '„Wenn Sie wirklich genau hinschauen, hat der Erfolg über Nacht lange gedauert.“ (Steve Jobs)',
    'Es gibt kein Geheimnis für den Erfolg. Er ist das Ergebnis aus Vorbereitung, harter Arbeit und der Bereitschaft, aus Fehlern zu lernen.“ (Colin Powell)',
    '„Erfolg ist nicht der Schlüssel zur Zufriedenheit. Zufriedenheit ist der Schlüssel zum Erfolg. Wenn Sie Ihre Arbeit lieben, werden Sie auch erfolgreich sein.“ (Albert Schweitzer)',
    '„Erfolg besteht aus drei Buchstaben: TUN.“ (Johann Wolfgang von Goethe)',
    '„Es scheint immer unmöglich, bis es geschafft ist.“ (Nelson Mandela)',
    '„Unsere größte Schwäche ist das Aufgeben. Der sicherste Weg zum Erfolg ist es, es immer noch einmal zu versuchen.“ (Thomas Edison)',
    '„Erfolg ist nicht endgültig, Fehler sind nicht entscheidend; was zählt, ist der Wille, weiterzumachen.“ (Winston Churchill)',
    '„Wenn Sie davon träumen können, können Sie es auch tun.“ (Walt Disney)',
  ];

  randomNumber: number;
  selectedMotivation: string = '';

  constructor() {
    this.generateNew();
  }

  generateMotivation(randomNumber) {
    this.selectedMotivation = this.motivations[randomNumber];
  }

  generateRandomNumber() {
    const min = Math.ceil(0);
    const max = Math.floor(this.motivations.length - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateNew() {
    this.randomNumber = this.generateRandomNumber();
    this.generateMotivation(this.randomNumber);
  }

  ngOnInit(): void {}
}
