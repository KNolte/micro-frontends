# Micro Frontends

## Was sind Micro Frontends?

Micro Frontends ist ein Ansatz die Idee der Micro Service Architektur als dem Backend Bereich in die Welt des Frontends zu übertragen. Anstatt einen großen Frontend Monolithen zu entwicklen bzw. zu deployen, wird die Applikation in kleine Micro Frontends aufgeteilt. Die jeweiligen Frontends werden dabei völlig autonom von unterschiedlichen Teams entwickelt.

## Die grundsätzliche Idee bei Micro Frontends

* Weg von einem großen Frontend Monolithen
* Frontend skalierbar machen
* Technologisch unabhängig bleiben
* Kollisionen beim Buildprozess vermeiden
* Code von den unterschiedlichen Teams isolieren
* Team Prefixes nutzen
* Native Browser Funktionen gegenüber Custom APIs bevorzugen

## Die Problematik die aktuell (noch) existiert

Wenn man auf unabhängige Web Components setzt, muss man aktuell noch sehr viel an Funktionalität programmieren, die man bei einem Framework wie Angular, React oder Vue.js geschenkt bekommen würde.

## Web Components Renaissance
In den letzten Monaten kann man eine kleine Renaissance der Web Components sehen. Unternehmen wie Google (Angular Elements und Polymer 2) und Ionic Framework (Stencil) bauen Tools auf, die Web Components zugänglicher und performanter machen. Es gibt auch neue Gemeinschaftsunternehmen wie SkateJS und SlimJS, die die Entwicklung von Web-Komponenten erleichtern. Alle neuen Tools enthalten Framework-Goodies wie Datenbindung und mehr, die die Lücke der Nutzung von Webkomponenten schließen. Darüber hinaus verwendet die Community diese Tools, um wiederverwendbare Webkomponenten zu erstellen, die in jedem Framework verwendet werden können.

## Das DOM ist die Schnittstelle
Die Kommunikation zwischen den einzelnen Web Components (Teams) erfolgt über einheitliche Events (Shared Event Bus). Dabei ist jedes Event mit einem speziellen Prefix für das jeweilige Team versehen. Die Initialisierung jeder einzelnen Komponente erfolgt ausschließlich über das setzen von HTML Attributen.

## Der Prototyp

TODO

## Web Components / Browser Support

TODO

## Vater-Kind und Geschwister Kommunikation / DOM Events

TODO

## Navigation zwischen Seiten

TODO

## Soft vs. Hard Navigation

TODO

## Universal Router

TODO

## Gemeinsame Ressourcen teilen

TODO

## CSS Isolation / Konflikte vermeiden

TODO

## Kohärentes User Interfacs

TODO

## Style Guides & Pattern Libraries

TODO
