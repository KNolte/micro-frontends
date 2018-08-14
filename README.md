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

## Unterschiedliche Ansätze

### 1. Plain Web Components Ansatz
https://github.com/KNolte/micro-frontends/blob/master/index.html

#### Das DOM ist die Schnittstelle
Die Kommunikation zwischen den einzelnen Web Components (Teams) erfolgt über einheitliche Events (Shared Event Bus). Dabei ist jedes Event mit einem speziellen Prefix für das jeweilige Team versehen. Die Initialisierung jeder einzelnen Komponente erfolgt ausschließlich über das setzen von HTML Attributen.

#### Vorteile
* keine Abhängigkeiten

#### Nachteile
* Sämtliche Funktionalität muss selbst geschrieben werden

### 2. Multiple single-page apps that live at different URLs
The apps use NPM/Bower components for shared functionality

### 3. Angular Elements als Ansatz
![alt text](https://cdn-images-1.medium.com/max/2000/1*x-BikaKLnRBWop9T-6gJmA.png)
https://itnext.io/building-micro-frontend-applications-with-angular-elements-34483da08bcb

Ähnliche Ansätze gibt es auch mit React & Vue.js, allerdings muss auch immer das jeweilige Framework mitgeladen werden.

#### Vorteile
* Mächtigkeit von Angular kann genutzt werden

#### Nachteile
* Angular Kontext ist erforderlich
* mehrere Frameworks laden, ist keine Option

### 4. Isolating micro-apps into IFrames
using libraries and Window.postMessage APIs to coordinate. IFrames share APIs exposed by their parent window.

### 5. Meta Framework
combine multiple frameworks on the same page 
https://github.com/CanopyTax/single-spa

### 6. Mosaic9 (Zalando)
https://www.mosaic9.org/

### 7. One Backend / Fragment (Matthias Laug)
Die einzelnen Fragmente (Micro Frontends) kommunizieren, indem sie jeweils ihr "eigenes" Backend ansprechen, anstatt über das Frontend zu gehen.

https://www.youtube.com/watch?v=rCxj-ONZmxs

## Herausforderungen im Kontext von Micro Frontends

* Navigation zwischen Seiten
* Soft vs. Hard Navigation
* Universal Router
* Gemeinsame Ressourcen teilen
* CSS Isolation / Konflikte vermeiden
* Einheitliche UX
* Style Guides & Pattern Libraries
