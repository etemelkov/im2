

# Kurzbeschreibung des Projekts: Never have I ever

Auf unserer Webseite lässt sich das Spiel «Never have I ever» spielen. Zuallererst wird die Startseite angezeigt, auf der man auf den «LET’S PLAY»-Button klicken kann. Danach kann man zwischen 3 Modi auswählen, bei denen die Fragen variieren. Der Modus «Hot» ist ab 18 Jahren freigegeben, weshalb wir dort eine Alterskonfirmation verlangen. Dann werden nacheinander 10 Fragen gefragt, die jeweils mit «I have» und «I haven’t» beantwortet werden können. Zuletzt gelangt man auf die Unterseite, mit dem Ranking, welches in Prozent angezeigt wird. 

## Learnings und Schwierigkeiten

Die Vorgänge und Funktionen von Java-Skript waren schwierig nachzuvollziehen, da beide von uns wenig Programmiererfahrungen haben. Wir haben uns aber Unterstützung von Copilot geholt und uns die Antworten von ChatGPT erklären lassen.

Zudem fiel uns das Responsive Design zu Beginn schwer, weil wir zuerst die Desktop-Version programmiert haben und da wir viele verschiedene Elemente eingebaut haben, war dieser Schritt sehr kompliziert und aufwändig.

## Benutzte Ressourcen und Prompts

Wir haben ChatGPT und Copilot von Visual Studio Code zur Unterstützung verwendet. Unten aufgelistet sind vier der von uns benutzten Prompts.

### Gut gelungene Prompts:

- Is it possible that if you click on the button, that you will go to the site: show_results.html but when you show the results it depends on which mode you play (warmup, tea or hot) --> but if you answered 3 question out of 10 with a I HAVE then you will get a score of 30% and these 30% should appear on the diagram on the page show_results.html and so on so if you play in mode warmup you will get the text: 30% WARMED-UP with the image Arm_pink -if you play in mode tea you will get the text: 30% A TEA-SPILLER with the image Tea_pink -if you play in mode hot you will get the text: 30% HOT with the image chilli_pink could you do that with script.js

- Ich baue eine Webseite für ein Spiel wie Never Have I ever. Es gibt drei Spielmodi: «Warm-up», «Spill the tea» und «Hot». Je nachdem, welchen Button der User auf der Startseite klickt, soll die Fragen-Seite erscheinen und Fragen aus unterschiedlichen APIs laden:
  - Warm-up → API mit Rating «pg»
  - Spill the tea → API mit Rating «pg13»
  - Hot (nur nach Altersbestätigung) → API mit Rating «r»

  Der Spieler klickt sich durch 10 Fragen und wählt jeweils «I have» oder «I haven't». Nach 10 beantworteten Fragen soll automatisch eine Ergebnis-Seite erscheine

### Weniger gut gelungene Prompts:

- Kannst du mir dieses Design responsive machen für das Handy
- Kannst du mir für die Seite index.html eine Sprechblase erstellen, in welcher der Text hineingefügt werden soll?
