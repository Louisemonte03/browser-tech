# Browser Tech

# **LET OP: Dit is een schoolproject**

Ontwerp en bouw een invulformulier voor de Aangifte Erfbelasting (Belastingdienst), vormgegeven volgens de huisstijl van de NS, waarmee je laat zien dat je je startniveau overstijgt en je UX- en front-endvaardigheden toepast.

---

## Week 1

### **Dag 1 maandag 16/02**

- **Wat heb ik gedaan?** Als alle eerst ben ik gaan zoeken naar de huistijl van NS, Welke kleuren gebruiken ze en hoe ziet het er uit. toen ben ik aan de slag gegegaan met het opzetej maken in html. Ik wilde eerst de html structuur hebben voordat ik aan de stijling begon van het invul veld.
  ![Hoe de html er uitziet zonder styling](/images/readme/dag1-opzetje-html.png)
- **Hoe lang duurde het ?** Ik was hier 6 uurtjes mee bezig. De hele dag eigenlijk.
- **Wat heb ik geleerd?** Ik heb geleerd hoe het structuur opzetten voor een goeie invul veld werkt. Welke benamingen ik moet geven vor de juiste inputs.
- **Wat ga ik morgen doen** Morgen ga ik me focussen op de Progressive disclosure. Wat laat ik de gebruikers zien? Laat ik alle vragen zien? Laat ik de vragen uitklappen als de gebruiker heeft gekozen voor een optie. Of laat ik de vragen inklappen als er is gekozen voor een optie.

Dit gaat de progressive disclosure worden

### Voorbeeld van de flow

Stel de overledene was alleenstaand zonder kinderen, maar mét een testament. De gebruiker ziet dan alleen:

- **1a:** Naam/BSN (Ingevuld)
- **1b:** Getrouwd? -> **Nee** (Rest van 1b blijft verborgen)
- **1c:** Kinderen? -> **Nee** (Rest van 1c blijft verborgen)
- **1d:** Testament? -> **Ja** -> _Nu klappen de notarisgegevens pas uit._

### **Dag 2 dinsdag 17/02**

### Weekly Geek week 1

- **Opdracht:** Artiekel gelezen over "It’s hard to justify Tahoe icons" Daarna hadden we een quiz over het artikel.

- **Wat heb ik gedaan?** Ik heb de progressive disclosure toegevoegd. Met behulp van victor. Dat waren veel codes. Hij lege me uit dat ik moest kijken of de opties gechecked waren. Dat deed je doormiddel van dit stukje code. Met display block liet je ze dan zien. Ook ben ik vandaag aan de slag geweest met de custom properties en de stijling. Ik heb dus de dag er voor onderzoek gedaan naar de NS huistijl.
  ![Hoe het stukje code er uit ziet zodat ik mijn vragen kan laten zien](/images/readme/code:display-block.png)
  ![De stijl van NS die ik in mijn custom properties heb toegevoegd](/images/readme/custom-properties.png)
- **Hoe lang duurde het ?** Ik was hier 2 uurtjes mee bezig. Met behulp van Victor. Daarna zelf wat dingen gedaan en dat deed ik de rest van de dag
- **Wat heb ik geleerd?** Ik heb geleerd hoe het structuur opzetten voor een goeie invul veld werkt. Welke benamingen ik moet geven vor de juiste inputs. Voor de rest van de dag was ik bezig met de stijling voor de website.
- **Wat ga ik volgende week doen** Volgebde week wil ik me gaan richten op validatie als iets niet is ingevuld. En de rest van de stijling.

### Voortgang week 1

- **Wat heb ik deze week bereikt?** Ik heb de basis HTML structuur opgezet voor het invulformulier en de NS huisstijl onderzocht en toegepast via custom properties. Ook heb ik progressive disclosure geïmplementeerd zodat vragen pas zichtbaar worden op basis van de keuze van de gebruiker.
- **Wat ging goed?** De HTML structuur opzetten ging goed. Met hulp van Victor heb ik de progressive disclosure snel werkend gekregen. Ook de NS custom properties toevoegen ging soepel nadat ik de huisstijl had onderzocht.
- **Wat kon beter?** Ik had de progressive disclosure ook zelf kunnen proberen voordat ik hulp vroeg. De eerste dag duurde erg lang (6 uur) voor alleen de HTML structuur.
- **Wat neem ik mee naar volgende week?** Volgende week ga ik me richten op validatie als iets niet is ingevuld, en de rest van de stijling afmaken.

---

## Week 3 (week 2 was vakantie)

### **Dag 3 maandag 02/03**

- **Wat heb ik gedaan?** Ik heb een json file gemaakt met alle gemeentes in nederland voor de vestigingsplaat. Zodat users hun vestigings plaats kunnen invullen. Dat heb ik gedaan doormiddel van dit stukje code. De lijst van alle gemeentes heb ik van internet van een API. (bron staat onderaan vermeld in readme.) Ook h
  ![Html van de vestigings input](/images/readme/html-vestigingsplaats.png)
  ![javascript vestigings input](/images/readme/javascript-verstigingsplaats.png)
- **Hoe lang duurde het ?** Ik was hier 2 uurtjes mee bezig
- **Wat heb ik geleerd?** json file toevoegen. Ik wist wel een beetje hoe het moest. Maar moest even opfrissen
- **Wat ga ik morgen doen** foccussen op validatie en requierment.!! dit is echt een must

### **Dag 4 dinsdag 3/03**

### Weekly Geek week 3

- **Opdracht:** Vandaag hebben we de weekly geek gedaan, daarbij hebben we de email input gemaakt doormiddel van javascript samen met mijn groepje.

- **Wat heb ik gedaan?**
  Overdag ben ik bezig geweest met de validatie van de formulieren. Ik heb tot nu alleen als je op submit klinkt dat je dan een melding krijgt met vergeten in te vullen. Dat heb ik gedaan met het user-invalid wobble effect. Ik heb daar bij een p toegevoegd met een svg en als display none. Zodat hij pas te voorschhijn komt met

input:user-invalid + .error-message {
display: block;
border-color: var(--ns-rood-fout);
}

- **Hoe lang duurde het ?** Ik was hier 2 uurtjes mee bezig.
- **Wat heb ik geleerd?** Ik heb geleerd hoe je de requiermend toapast als iemand door wilt gaan naar de volgende.
- **Wat ga ik volgendeweek doen** Volgende week wil ik op alle elemtenen de requierment zetten. Nu heb ik dat alleen gedaan in het begin. Maar de flow moet beter zodat het invul beter gaat. Ook ga ik me volgende week focussen op validatie

### Voortgang week 3

- **Wat heb ik deze week bereikt?** Ik heb een JSON file gemaakt met alle gemeentes in Nederland voor de vestigingsplaats input. Ook heb ik samen met mijn groepje de email input gemaakt in JavaScript. Daarnaast heb ik required toegevoegd met het user-invalid wobble effect en foutmeldingen die pas verschijnen als een veld niet correct is ingevuld.
- **Wat ging goed?** De JSON file met gemeentes toevoegen ging goed. De samenwerking met het groepje bij de email input werkte ook fijn.
- **Wat kon beter?** De required is nog niet op alle elementen toegepast, alleen aan het begin van het formulier. Dit moet nog verder uitgewerkt worden.
- **Wat neem ik mee naar volgende week?** Ik ga de validatie en required op alle formulierelementen toepassen en de flow van het invullen verbeteren.

---

## Week 4

> ⚠️ **Let op:** Op zondag 8 maart heb ik een ongeluk gehad waarbij ik hechtingen in mijn gezicht heb gekregen, een hersenschudding en een gebroken neus opgelopen. Hierdoor heb ik deze week weinig kunnen werken aan het project.

### **Dag 5 maandag 9/03**

- **Wat heb ik gedaan?** Door mijn ongeluk van zondag was ik fysiek niet in staat om de hele dag achter een scherm te zitten. Thuis herstellende heb ik toch wat kleine dingen opgepakt. Ik wilde iets extra leren en ben aan de slag gegaan met een IBAN invoerveld in JavaScript. Dit hoort niet direct op het formulier maar wilde begrijpen hoe je een invoerveld slim kunt maken. Ik heb ervoor gezorgd dat spaties automatisch worden toegevoegd na elke 4 tekens, en dat de bankcode op de juiste plek wordt ingevuld (zoals ABNA of SNSB). Zo hoeft de gebruiker zich geen zorgen te maken over de opmaak.
- **Hoe lang duurde het?** Zo'n uurtje, meer kon ik niet aan door de hersenschudding.
- **Wat heb ik geleerd?** Ik heb geleerd hoe je met JavaScript een invoerveld slim kunt opmaken terwijl iemand typt. Met `.replace()` en `.match()` kun je automatisch spaties toevoegen en controleren of de tekens op de juiste plek staan. Dit heet input masking.
- **Wat ga ik morgen doen?** Kijken of ik iets meer kan doen, maar dit hangt af van hoe ik me voel.

### **Dag 6 dinsdag 10/03**

### Weekly Geek week 4

- **Opdracht:** HERKANSING WANT WAS NIET AANWEZIG

- **Wat heb ik gedaan?** Ook deze dag was ik nog herstellende. Ik heb de datum van overlijden verder uitgewerkt. De datepicker staat nu zo ingesteld dat een gebruiker geen datum in de toekomst kan kiezen, alleen datums in het verleden. Dit heb ik gedaan via JavaScript met `setAttribute("max", vandaag)`.
- **Hoe lang duurde het?** Kort, zo'n uurtje.
- **Wat heb ik geleerd?** Hoe je een datepicker kunt beperken via JavaScript zodat gebruikers geen ongeldige datums kunnen invullen.
- **Wat ga ik volgende week doen?** Volgende week wil ik me focussen op de validatie zodra ik weer beter ben.

### Voortgang week 4

- **Wat heb ik deze week bereikt?** Ondanks mijn ongeluk op zondag 8 maart heb ik thuis herstellende toch twee dingen opgepakt. Ik heb een IBAN invoerveld gebouwd met automatische opmaak (spaties en bankcodes zoals ABNA of SNSB) en de datepicker voor de datum van overlijden beperkt zodat alleen datums in het verleden mogelijk zijn.
- **Wat ging goed?** Het IBAN veld werkte sneller dan verwacht. De logica met `.match()` voor de spaties was een leuk inzicht.
- **Wat kon beter?** Door de hersenschudding kon ik niet lang achter een scherm zitten. Meer had ik graag gedaan maar het herstel ging voor.
- **Wat neem ik mee naar volgende week?** De focus leggen op validatie voor alle formulierelementen nu ik weer beter ben.

## Week 5

### **Dag 7 maandag 16/03**

- **Wat heb ik gedaan?** Ik ben begonenn met het maken van validatie. Maar wel pas als de user de inputveld verlaat dan pas krijgt de user feedback met een rode border of een groene border. Bij de rode border zit een kruisje. En bij de groene border zit een groen vinkje. Dat heb ik gedaan met input:user-valid en input:user-invalid in css. Ik heb ook per veld een eigen fout melding toegevoegd met de error message. Zo dat niet overal de zelfde error message wordt toegevoegd maar ook duidelijk voor de user is wat de error is. Dus bijvoorbeeld inplaats van "vergeten in te vullen" heb ik nu een duidelijke error messeage met "Vul achternaam in"
- **Hoe lang duurde het?** Dit duurde de hele dag waar ik mee bezig was.
- **Wat heb ik geleerd?** Ik heb geleerd hoe je me user-invalid en user-valid in css validatie kunt toepassen zonder javscript. Ook heb ik geleerd hoe je per veld een eigen foutmelding kunt schrijven zodat het voor de gebruiker duidelijker is wat er mist.
- **Wat ga ik morgen doen?** Controleren of alle velden juist kloppen. Read me afschrijven. HTML,css en javsacript checken op goede structuur

### **Dag 8 dinsdag 17/03**

- **Wat heb ik gedaan?** Vandaag heb ik de laatse dingen aangepast. Ik heb met javascript bepaalde invulvelden geblokkeerd waar gebruikers konden typen met letters ipv waar alleen verplicht cijfers mochten komen, en ook andersom. Ook heb ik een automatische voorletters stukje javascript geschreven. Dat heeft er mee te maken dat mensen simpel la typen terwijl ze L.A moeten typen. Het word dus automatisch veranderd naar hoofdletters. En voor de rest heb ik gewoon dingen aangepast met de puntjes op de i
- **Hoe lang duurde het?** Hier was ik de hele dag mee bezig
- **Wat heb ik geleerd?** Hoe je met keypress en preventDefault in javasccript kunt blokkeren dat gebruikers verkeerde tekens kunnen invoeren. Ook heb ik geleerd hoe je met .toUpperCase en .split() invoer automatisch kunt opmaken
- **Wat ga ik volgende week doen?** Het project is afgerond.

### Reflectie alle weken

- **Wat heb ik geleerd?**

1. **Progressive disclosure** — vragen verbergen en tonen op basis van wat de gebruiker kiest
2. **Validatie met CSS** — user-invalid en user-valid voor rode/groene feedback zonder veel JavaScript
3. **Input masking** — IBAN automatisch opmaken met spaties en de juiste tekens op de juiste plek
4. **HTML formulier schrijven** — de juiste input types, labels en fieldsets gebruiken voor een toegankelijk formulier
5. **Invoer blokkeren** — met keypress en preventDefault verkeerde tekens tegenhouden

### Bronnenlijst

## Bronnen

- SVG Repo - Warning icon — https://www.svgrepo.com/vectors/warning/
- YouTube - Show hide forms — https://www.youtube.com/watch?v=GLkbeOKDxFo
- MDN - Fetch API — https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN - Input event — https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
- MDN - Blur event — https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
- MDN - Keypress event — https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
- MDN - Regular Expressions — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
- MDN - String.match() — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
- MDN - Array.map() — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- MDN - RegExp.test() — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
- JavaScript.info - For loops — https://javascript.info/while-for
- MDN - Datalist — https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist
- Wikipedia - IBAN formaat NL — https://nl.wikipedia.org/wiki/Internationaal_bankrekeningnummer
- CBS - Gemeentelijke indeling 2026 — https://www.cbs.nl/nl-nl/onze-diensten/methoden/classificaties/overig/gemeentelijke-indelingen-per-jaar/indeling-per-jaar/gemeentelijke-indeling-op-1-januari-2026
