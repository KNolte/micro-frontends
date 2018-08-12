# Micro Frontends

## Was sind Micro Frontends?

Micro Frontends ist ein Ansatz die Idee der Micro Service Architektur als dem Backend Bereich in die Welt des Frontends zu übertragen. Anstatt einen großen Frontend Monolithen zu entwicklen bzw. zu deployen, wird die Applikation in kleine Micro Frontends aufgeteilt. Die jeweiligen Frontends werden dabei völlig autonom von unterschiedlichen Teams entwickelt.

## Die grundsätzliche Idee bei Micro Frontends

* Weg von einem großen Frontend Monolithen
* Frontend skalierbar machen
* Technologisch unabhängig bleiben
* Kollisionen beim Buildprozess vermeiden
* Code von den unterschiedlichen Teams isolieren
* Teams können sich selbst organisieren
* Teams entwickeln, veröffentlichen und testen eigenständig
* Team Prefixes nutzen
* Native Browser Funktionen gegenüber Custom APIs bevorzugen

## Die Problematik die aktuell (noch) bei Plain Web Components existiert

Wenn man auf unabhängige Web Components setzt, muss man aktuell noch sehr viel an Funktionalität programmieren, die man bei einem Framework wie Angular, React oder Vue.js geschenkt bekommen würde.

## Web Components Renaissance
In den letzten Monaten kann man eine kleine Renaissance der Web Components sehen. Unternehmen wie Google (Angular Elements und Polymer 2) und Ionic Framework (Stencil) bauen Tools auf, die Web Components zugänglicher und performanter machen. Es gibt auch neue Gemeinschaftsunternehmen wie SkateJS und SlimJS, die die Entwicklung von Web-Komponenten erleichtern. Alle neuen Tools enthalten Framework-Goodies wie Datenbindung und mehr, die die Lücke der Nutzung von Webkomponenten schließen. Darüber hinaus verwendet die Community diese Tools, um wiederverwendbare Webkomponenten zu erstellen, die in jedem Framework verwendet werden können.

## Das DOM ist die Schnittstelle
Die Kommunikation zwischen den einzelnen Web Components (Teams) erfolgt über einheitliche Events (Shared Event Bus). Dabei ist jedes Event mit einem speziellen Prefix für das jeweilige Team versehen. Die Initialisierung jeder einzelnen Komponente erfolgt ausschließlich über das setzen von HTML Attributen.

## Unterschiedliche Ansätze

### Angular Elements als Ansatz
![alt text](https://cdn-images-1.medium.com/max/2000/1*x-BikaKLnRBWop9T-6gJmA.png)
https://itnext.io/building-micro-frontend-applications-with-angular-elements-34483da08bcb

#### Vorteile
* Mächtigkeit von Angular kann genutzt werden

#### Nachteile
* Angular Kontext ist erforderlich
* mehrere Frameworks laden, ist keine Option

### Plain Web Components Ansatz
https://github.com/KNolte/micro-frontends/blob/master/index.html

#### Vorteile
* keine Abhängigkeiten

#### Nachteile
* Sämtliche Funktionalität muss selbst geschrieben werden

## Herausforderungen im Kontext von Micro Components

### Navigation zwischen Seiten

TODO

### Soft vs. Hard Navigation

TODO

### Universal Router

TODO

### Gemeinsame Ressourcen teilen

TODO

### CSS Isolation / Konflikte vermeiden

TODO

### Kohärentes User Interface

TODO

### Style Guides & Pattern Libraries

TODO
