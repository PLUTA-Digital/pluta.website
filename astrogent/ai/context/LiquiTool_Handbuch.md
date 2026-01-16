# LiquiTool Handbuch – AI-Kontextdatei

Stand: 13.01.2026  
Gültig ab: LiquiTool Version 2.2.0

Diese Datei ist eine AI-freundliche, strukturierte Zusammenfassung des Handbuchs. Sie ist dafür gedacht, als Kontext (RAG/Upload/System Prompt) verwendet zu werden.

## Zweck und Grenzen

### Zweck
LiquiTool unterstützt bei:
- Import und Analyse offener Posten (Debitoren/Kreditoren) und automatischer Verteilung von Zahlungen
- Planung einer GuV (monatlich) inkl. detaillierter Planung von Umsätzen & Materialaufwand
- Planung weiterer Bereiche (Darlehen, (Des-)Investitionen, USt/VSt)
- Ableitung einer Liquiditätsplanung (Wochen-/Monatssicht) aus Inputs + Prämissen
- Prüfung des Liquiditätsstatus (Zahlungsfähigkeitsanalyse) ohne rechtliches Fazit
- Transparenzfunktionen: Kommentare, Plan-Plan, Plan-Ist, Grafik, Altersstruktur OPOS, geplante Vorkassen

### Explizit NICHT Teil der Funktionalität
- Steuerberatung
- Rechtsberatung
- Korrekte und vollständige Abbildung gesetzlicher Vorschriften (Buchhaltung/Rechnungswesen)
- Interpretation der Ergebnisse

## Grundbegriffe und Datenstruktur

### Projekt / Planung
- **Projekt**: Datei/Container, kann mehrere Planungen enthalten.
- **Planung**: Planungsstand mit **Planungsbeginn** (kann je Planung unterschiedlich sein).
- Planungsstände sind frei benennbar, Name muss eindeutig sein (keine Kollisionen).

### Module, Teilmodule, Output-Module (Überblick)
**Eingabemodule (4):**
1) Planungsbeginn  
2) Gewinn- und Verlustrechnung (GuV)  
3) Weitere Planungsmodule  
4) Planung Ein- und Auszahlungen

**Outputs (wesentlich):**
- Liquiditätsplanung
- Liquiditätsstatus  
Weitere Outputs: Plan-Plan-Vergleich, Plan-Ist-Vergleich (tabellarisch/graphisch), Graphik/Graphik-Vergleich, Altersstruktur OPOS, geplante Vorkassen, Prämissen/Kommentare.

## Installation, Lizenz, Deinstallation

- Installation via Installationsdatei (siehe Systemvoraussetzungen).
- Beim ersten Start Lizenzschlüssel eingeben (vom Hersteller bereitgestellt).
- Lizenzstatus und Schlüsselverwaltung in den Einstellungen; Erinnerung 30 Tage vor Ablauf bei Programmstart.
- Deinstallation wie üblich unter Windows möglich.

## Einstellungen (nutzerspezifisch)

- Startverhalten (Standardprojekt/Teilmodul)
- Autosave aktivieren/deaktivieren + Turnus + Speicherort + Liste letzter Autosaves
- Version, Lizenzinformationen, allgemeine Hinweise
- Nutzerbezogener Audit Log der letzten X Tage
- UI-Zustände (z.B. aufgeklappte/zugeklappte Zeilen) werden gespeichert und beim nächsten Öffnen wiederhergestellt.

## Planungsbeginn (Eingabemodul)

Teilmodule:
1) Verfügbare Liquidität
2) Sonstige Forderungen/Verbindlichkeiten
3) Einzahlungen von Debitoren / Auszahlungen an Kreditoren (OPOS)

### 1) Verfügbare Liquidität
- Anlage von Bankkonten/Kassen + manuelle Eingabe:
  - Banksalden/Kassenbestände
  - verfügbare Kreditlinien
  - optional Kontonummern
- Kontokorrent-/Bereitstellungszins:
  - Eingabe: durchschnittlicher Zinssatz + Zahlungsturnus + Monat + Stichtag
  - Berechnung auf Basis der Liquiditätsplanung erfolgt automatisch
  - Übertrag in GuV-Finanzergebnis (Stichtag im Beginn des Folgemonats; ab v2.1 manuell wählbar)
- Zeitpunkt: Salden zum Planungsbeginn (Beginn der Woche / Ende Vorwoche)
- Kreditlinienänderungen:
  - zukünftige Erhöhung/Reduzierung je Kreditlinie möglich (mehrere Änderungen)
- Output-Darstellung:
  - Kreditlinie separat oder in Finanzmitteln Periodenende inkludiert (Checkbox in Grafik/Grafik-Vergleich)

### 2) Sonstige Forderungen/Verbindlichkeiten
- Für offene Beträge, die NICHT in OPOS Deb/Kred enthalten sind und nicht aus Planungen resultieren
  - Beispiele: Darlehen, Steuern, Gehälter
- Zuordnung je Zeile zu Auszahlungskategorie via Dropdown
- Wichtige Regel:
  - Nicht zugeordnete Positionen werden in Liquiditätsplanung/Liquiditätsstatus NICHT berücksichtigt
- Vor Planungsbeginn fällige Beträge:
  - werden in der ersten Planungswoche als Ein-/Auszahlung berücksichtigt

### 3) OPOS: Debitoren/Kreditoren

#### Import (CSV)
- Import über „Liste importieren“
- Quelle (Dateiname) wird angezeigt
- Es werden nur Spalten mit korrekten Überschriften (aus Beispieldatei) importiert
- Übrige Spalten + leere Zeilen werden beim Einlesen übersprungen
- Vollständigkeitscheck: Anzahl Datensätze + Gesamtbetrag
- Vorzeichen:
  - Debitoren positiv
  - Kreditoren negativ
  - optionales Vorzeichen-Flip beim Kreditorenimport
- Fehlermeldungen:
  - in „Benachrichtigungen“ inkl. Uhrzeit (zuordenbar zum Importlauf)

#### Arbeiten mit importierten Listen
- Gruppieren: Spaltenüberschrift in Gruppierbereich ziehen („Zum Gruppieren …“)
- Sortieren/Filtern: Klick auf Spaltenüberschrift
- Massen-Auswahl möglich (z.B. per Auswahlfunktion im UI)
- Umsortieren:
  - kreditorische Debitoren / debitorische Kreditoren können markiert und in die korrekte Liste verschoben werden
- Update-Logik bei erneutem Import:
  - bestehende Umsortierungen bleiben erhalten
  - bei Übereinstimmung von Name, Nummer, Vorzeichen: automatische Zuordnung/Update
- „Daten löschen“ entfernt auch die umsortierten Sonderfälle

#### Ein-/Auszahlungen aus OPOS (Nachbearbeitung)
- Darstellungsebenen:
  - Gesamt Deb/Kred (mit/ohne Risikoabschlag)
  - Summe je Debitor/Kreditor
  - einzelne Rechnung (drill-down)
- Risikoabschlag:
  - pauschal prozentual auf Summen (negative Werte = Zuschlag)
  - nur für Summen fällige/nicht fällige Beträge
  - bei Ist-Besteuerung wird vereinnahmte USt entsprechend reduziert
  - kann abhängig von Fälligkeit festgelegt werden
- Nachbearbeitung:
  - Verzug: Fälligkeit +X Tage
  - Stundung: Fälligkeit auf Datum verschieben
  - Eingaben auf Gesamt-/Summenebene werden auf Rechnungs-Ebene übertragen
- Gestundete Kreditoren:
  - werden im Liquiditätsstatus nicht eingerechnet und separat ausgewiesen
- Vor Planungsbeginn fällige OPOS:
  - in erster Planungswoche berücksichtigt

## Gewinn- und Verlustrechnung (GuV) (Eingabemodul)

Teilmodule (hochlevel):
- Anzeigeeinstellungen allgemein
- GuV-Planung (manuelle Positionen + automatische Übernahmen)
- Planung Gesamtleistung & Materialaufwand (separater Reiter)
- GuV Import (CSV)

### Anzeige und Bedienlogik (relevant fürs Verständnis)
- Positionen sind Kategorien/Überpositionen untergeordnet; Auf-/Zuklappen möglich
- Anzeigeeinheit umstellbar (1€ / 1.000€ / 1.000.000€)
- Zwischensummen über Spalten möglich (Startmonat/-woche wählbar)
- Kommentare ein-/ausklappbar (auch per Resize)

### GuV-Planung allgemein
- Markierte Positionen werden aus anderen Reitern übernommen (Navigation zur Eingabe möglich)
- Zeilen/Positionen:
  - hinzufügen (auch mehrere Zeilen via Mehrfachanlage)
  - Werteingabe per Zelle oder Eingabedialog
  - Copy/Paste aus Excel-Matrizen möglich; Summenzeilen werden nicht überschrieben
- Zahlungsverteilung je Planungszeile:
  - gleichmäßig
  - manuell
  - nicht zahlungswirksam (NZW)
  - eigene Zeilen für abweichende Zahlungsstrukturen empfohlen
- Untermenü je Zeile:
  - löschen, umbenennen, verschieben
  - Zeilen-Zwischensumme über Bereich bis zur nächsten Zwischensumme
  - Teuerungsrate: prozentuale Aufschläge kumulieren auf Basiswerte (ab Vormonat der Eingabe)
  - Abgrenzungen: monatliche Werte werden periodisiert; Werte außerhalb Planungszeitraum können über Abgrenzungslogik einfließen
  - Bezug/Relative Eingabe: Prozentbezug auf beliebigen Knoten (außer zirkuläre Abhängigkeiten); mehrere Bezüge addieren sich

### Planung Gesamtleistung & Materialaufwand
- Separater Reiter für automatisch in GuV übernommene Positionen:
  - Umsatzerlöse, Erlösschmälerungen, Bestandsveränderungen
  - Materialaufwand
- Mehrere Zeilen zur Segmentierung (Region/Produkt/Kunde/Lieferant/Zahlungsstruktur)
- Eingabemethoden analog zur GuV (ohne Abgrenzungen)
- Optional: Preis-/Mengen-Gerüst
- Bestandsveränderungen können als NZW geplant werden (in GuV, nicht in Liquiditätsplanung)

### GuV Import (CSV)
- Import einer Zeitreihe mit Zuordnung (Konten/Positionen -> Zwischensummen/Positionen)
- Nur Spalten mit korrekten Überschriften werden importiert; Rest/Leerzeilen übersprungen
- Vollständigkeit: Gesamtbetrag je Periode
- Vorzeichen:
  - Erträge positiv
  - Aufwendungen negativ
- Übernahme in GuV-Planung per Auswahl (Checkbox) + Übertrag
- Standardlogiken (vereinfacht, AI-relevant):
  - neue Zeilen werden angelegt, wenn nicht vorhanden
  - Zeilen/Werte können überschrieben und/oder alte gelöscht werden (abhängig von Importoptionen)
  - Monate außerhalb Importzeitraums werden ignoriert (optional: löschen)
  - nicht importierte Zeilen werden standardmäßig gelöscht (optional: behalten)
  - Teuerungsraten standardmäßig gelöscht (optional: behalten und Basiswerte überschreiben)
  - Abgrenzungen bleiben standardmäßig bestehen (optional: löschen)
  - Prämissen/Standards: je nach Modus bleiben erhalten oder werden auf Standard gesetzt (z.B. 19% USt, gleichmäßige Verteilung)
- Importoptionen sind anpassbar
- Daten können vollständig entfernt werden

## Weitere Planungsmodule (Eingabemodul)

Teilmodule:
1) Darlehen
2) (Des-)Investitionen
3) Umsatzsteuer / Vorsteuer

### 1) Darlehen
- Kategorien:
  - feste Tilgung
  - feste Annuität
  - alternativ direkte Werteingabe (mit Zahlungsterminen)
- Zinszahlungen:
  - tag-genau im Output, folgen Datum der Tilgungs-/Annuitätenzahlung
  - erster Tilgungs-/Zinsmonat individuell; Gleichlauf wird unterstellt
- Automatische Übernahmen:
  - Einzahlungen Darlehen, Auszahlungen Zinsen/Tilgung -> Liquiditätsplanung
  - Zinsaufwand -> GuV
- Ergänzend:
  - weitere Finanzerträge/-aufwendungen können manuell in GuV-Finanzergebnis ergänzt werden

### 2) (Des-)Investitionen
- Typen:
  - Einmalinvestition
  - regelmäßige Investitionen
  - Desinvestitionen
- Restbuchwert ist rein informativ (keine Output-Wirkung)
- Zahlungsziel möglich (Investition/Desinvestition)
- Automatische Übernahmen:
  - Investitionszahlungen -> Liquiditätsplanung
  - Abschreibungen -> GuV
- Desinvestition:
  - Delta (Erlös - Restbuchwert) -> neutrales Ergebnis in GuV (nicht liquiditätswirksam)
- Teilzahlungen bei AHK (Einmalinvestition) möglich
- Hinweis:
  - Desinvestition mit verbleibender Nutzungsdauer kann zu positiver Abschreibung führen (Ausgleich); Basisplanung Abschreibungen beachten (typisch aus Buchhaltungssystem exportiert)

### 3) Umsatzsteuer / Vorsteuer
- Berechnung:
  - graue Felder: aus allen Modulen errechnete USt-Zahllast (negativ) / Vorsteuer-Erstattung (positiv), monatlich saldiert
- Besteuerungsart:
  - Soll vs. Ist (beeinflusst Erträge und Debitoren-Einzahlungen)
- Zahlungslogik:
  - Standard: Auszahlung/Erstattung am 10. des Folgemonats
  - Stichtag manuell anpassbar
  - Dauerfristverlängerung möglich
  - Erstattung: Zahlungsziel ergänzbar (Standard 30 Tage)
- Manuelle Anpassung:
  - errechnete Steuerbeträge können in separater Zeile überschrieben/angepasst werden

## Planung Ein- und Auszahlungen (Eingabemodul)

Ziel: Aus monatlichen, liquiditätswirksamen Planwerten werden Ein-/Auszahlungen auf Kalenderwochen (und im Output auch Monatsansicht) verteilt.

### Eingaben/Prämissen je Position
- Verteilung (Faktura-/Rechnungsdatum):
  - auch prozentual auf mehrere Daten
  - Verteilung über mehrere Tage möglich (±X Tage um Stichtag)
- Umsatz-/Vorsteuersatz (falls relevant)
- Zahlungsziel:
  - kann prozentual auf mehrere Ziele verteilt werden (z.B. 30% nach 10 Tagen, 70% nach 20 Tagen)
- OPOS-Berücksichtigung:
  - Schalter, ob verteilte Beträge in planerischen offenen Posten geführt werden
- Hinweise:
  - Tool warnt, wenn Verteilungen vor Planungsbeginn liegen (Abgleich: bereits berücksichtigt oder noch offen)
  - Vorkasse: negatives Zahlungsziel möglich; Vorkassen werden als eigener Output aggregiert

### Zahlungsverteilungstypen
- gleichmäßig
- manuell stichtagsbezogen
- NZW (nicht zahlungswirksam)
- NZW-Zeiträume:
  - auch bei ansonsten verteilten Beträgen können definierte Zeiträume als NZW markiert werden
  - dann fallen diese Beträge aus der Liquiditätsplanung heraus
  - Umsatz-/Vorsteuer bleibt berücksichtigt
  - je nach OPOS-Einstellung erfolgt kein planerischer Ausgleich mehr
- Vorlagen:
  - gespeicherte Verteilungen/Zahlungsziele können wiederverwendet werden (für komplexe Muster)

## Planungsergebnisse (Outputs)

### Liquiditätsplanung
- Reines Output-Modul (keine manuelle Anpassung)
- Aggregation aller Module
- Ansicht: Kalenderwochen oder Monate (umschaltbar)
- Unterhalb: erwartete Endbestände offener Posten + Ursprung
- Kennzahlen: Min/Max liquide Mittel + zugehörige Woche/Monat direkt ersichtlich

### Plan-Plan-Vergleich
- Vergleich zweier Planungsstände:
  - aktuell geöffnet vs. im Dropdown ausgewählt
  - Differenz: ausgewählter Stand wird von aktueller Planung abgezogen
- Liquiditätsplanung: Wochen- und Monatsbasis
- GuV: Monatsbasis

### Plan-Ist-Vergleich
- Gegenüberstellung tatsächlicher Zahlungen (Ist) zur Planung
- Planstand wählbar
- Wochen- oder Monatssicht
- Finanzmittel zu Beginn:
  - standardmäßig aus aktueller Planung (verfügbare Liquidität)
  - alternativ manuell
- Kreditlinie für Ist anpassbar
- Zwischensummen über Spalten möglich
- Ist-Import (CSV):
  - Bankbewegungen mit korrekten Überschriften
  - nur bekannte Spalten werden importiert; Rest/Leerzeilen übersprungen
  - Vollständigkeit: Anzahl Datensätze + Gesamtbetrag
  - Vorzeichen: Einzahlungen positiv, Auszahlungen negativ
  - Fehlermeldungen in Benachrichtigungen mit Uhrzeit
  - Gruppieren/Sortieren analog OPOS
  - Daten können entfernt werden

### Liquiditätsstatus
- Zweck: Zahlungsfähigkeitsanalyse ohne rechtliches Fazit
- Datenbasis: relevante Eingaben aus anderen Modulen
- 1. Stufe (Stichtag Planungsbeginn):
  - Aktiva 1: liquide Mittel
  - Passiva 1: fällige Verbindlichkeiten
- 2. Stufe (nur bei Unterdeckung Stufe 1):
  - 13-Wochen-Prognose
  - verbleibende fällige Verbindlichkeiten: direkte Eingabe möglich (ausbleibender Ausgleich)
- Tipps:
  - neben OPOS auch sonstige fällige Verbindlichkeiten erfassen (Sonstige Forderungen/Verbindlichkeiten)
  - kreditorische Debitoren werden bei Fälligkeit eingerechnet (wenn im Import entsprechend markiert)
- gestundete Kreditoren werden separat ausgewiesen und nicht eingerechnet

### Grafik / Grafik-Vergleich
- Grafik:
  - Periodenende-Liquidität als Linie (optional inkl./exkl. Kreditlinie)
  - Cashflow-Kategorien als Balken
  - Legende: Kategorien ein-/ausblendbar
- Grafik-Vergleich:
  - mehrere Planungen vergleichbar
  - bei Vergleichen: standardmäßig nur Kreditlinie + Periodenende
  - Option „Aktuelle Planung“: zusätzlich Cashflows/Finanzmittel der aktuellen Planung

### Prämissen/Kommentare
- Freitextnotizen je Modul/Position (per Kommentar-/Tastatursymbol)
- Begründungen/Annahmen können dokumentiert werden
- Werden beim Export sichtbar

### Altersstruktur OPOS
- Auswertung importierter OPOS nach frei definierbaren Intervallen
- Intervalle hinzufügen/löschen; Grenzen in Tagen direkt editierbar

### Geplante Vorkassen
- Aggregation aller Vorkassen (negative Zahlungsziele, vor Planungsbeginn)
- Zweck: Abgleich zu tatsächlich geleisteten/erhaltenen Zahlungen
- Abweichungen ggf. als sonstige Forderungen/Verbindlichkeiten ergänzen

## Export

- Projekt: „Speichern unter…“ am gewünschten Pfad
- Planung: Export nach Excel (Planung -> Exportieren nach…)
- Exportauswahl: welche Datenbereiche exportiert werden sollen (individuell wählbar)

## CSV-Importe: Anforderungen (kurz)
- Immer anhand der im Tool erzeugbaren Beispieldateien ausrichten:
  - Überschriften müssen exakt passen
  - Format muss passen
- Beim Import werden nur bekannte Spalten übernommen; restliche Spalten/Leerzeilen werden ignoriert
- Vollständigkeit prüfen über Zähler (Anzahl/Total)
- Fehlermeldungen in „Benachrichtigungen“ mit Uhrzeit

## Systemvoraussetzungen (Anlage 1)

### Hardware
- CPU: 1 GHz oder schneller, 1–2 Kerne, kompatibler 64-Bit-Prozessor oder SoC
- RAM: 4 GB oder mehr
- Speicher: 1 GB oder mehr freier Speicher

### Betriebssystem
- Windows 10 oder Windows 11 (Home/Pro/Enterprise/Education inkl. N/KN) x64
- Zukunft: nur Windows-Versionen im Microsoft Standard-Support
  - Windows 10 ab 21H2
  - Windows 11 ab 21H2

### Sonstiges
- Internetzugang für Download erforderlich
- Installation ggf. mit Adminrechten
- Basis: .NET, Windows App SDK, WinUI 3 (Dependencies können während Installation mitinstalliert werden)

## Verwendete Systemressourcen (Anlage 3 – NuGet Pakete)

- ClosedXML 0.100.3 (MIT)
- CommunityToolkit.Diagnostics 8.1.0 (MIT)
- CommunityToolkit.Mvvm 8.1.0 (MIT)
- CommunityToolkit.WinUI 7.1.2 (MIT)
- CsvHelper 30.0.1 (MS-PL oder Apache-2.0)
- Microsoft.Extensions.DependencyInjection 6.0.1 (MIT)
- Microsoft.Windows.SDK.BuildTools 10.0.22621.755 (Lizenz-URL in Paketmetadaten)
- Microsoft.WindowsAppSDK 1.2.230118.102 (license.txt)
- NodaTime 3.1.6 (Apache-2.0)
- Syncfusion.Grid.WinUI 20.4.0.48 (LICENSE.txt)

## UI-Icons und Platzhalter (Hinweis)
Das Originalhandbuch referenziert UI-Elemente teils über Icons/Symbole ohne Textlabel. In dieser Textdatei werden diese nicht 1:1 abgebildet. Wenn du eine AI damit arbeiten lässt, ist es meist ausreichend, die Aktionen über ihren Text/Kontext zu beschreiben (z.B. „Import“, „Daten löschen“, „Zeile hinzufügen“, „Kommentar ein-/ausklappen“, „Zwischensumme hinzufügen“).

