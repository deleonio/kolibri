# Alternatives Konzept

Dieses Dokument beschreibt eine vereinfachte Variante der Architektur, bei der die von außen belegbaren Properties direkt in private Variablen gespiegelt werden. Diese Variablen sind ausschließlich innerhalb der Web Component sichtbar und werden nicht Teil des öffentlichen Interfaces.

- Alle `@Prop`-Werte werden in privaten Variablen gespeichert. Änderungen werden über die Reactivität der Props gerendert, bleiben aber vor externem Zugriff geschützt.
- Logikbezogene Zustände können weiterhin über eigene `@State`‑Variablen oder weitere private Variablen abgebildet werden.
- Die Watcher der Web Component rufen lediglich die gleichnamigen Methoden des Controllers auf. Die eigentliche Validierung und Normalisierung findet im Controller statt.
- Die Methode `componentWillLoad` liegt im Controller und initialisiert dort die Werte, sodass übergeordnete Controller auch Unter‑Controller verwenden können.

Dieses Konzept sorgt für eine klare Trennung zwischen öffentlichen Properties und internem Zustand, ohne auf die Vorteile von Stencils Reaktivität zu verzichten.
