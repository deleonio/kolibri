# Alternatives Konzept

Dieses Dokument beschreibt eine Variante der Architektur, bei der die von außen belegbaren Properties direkt in private `@State`-Variablen gespiegelt werden. Diese Variablen sind ausschließlich innerhalb der Web Component sichtbar und werden nicht Teil des öffentlichen Interfaces.

- Alle `@Prop`-Werte werden in privaten `@State`-Variablen gespeichert. Dadurch lösen Änderungen weiterhin ein Re‑Rendern aus, bleiben aber vor externem Zugriff geschützt.
- Logikbezogene Zustände können weiterhin über eigene `@State`‑Variablen abgebildet werden.
- Die Watcher der Web Component rufen lediglich die gleichnamigen Methoden des Controllers auf. Die eigentliche Validierung und Normalisierung findet im Controller statt.
- Die Methode `componentWillLoad` liegt im Controller und initialisiert dort die Werte, sodass übergeordnete Controller auch Unter‑Controller verwenden können.

Dieses Konzept sorgt für eine klare Trennung zwischen öffentlichen Properties und internem Zustand, ohne auf die Vorteile von Stencils Reaktivität zu verzichten.
