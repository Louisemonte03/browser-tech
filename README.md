# Browser Tech

# **LET OP: Dit is een schoolproject **

## **Project Overview**

Ontwerp en bouw een invulformulier voor de Aangifte Erfbelasting (Belastingdienst), vormgegeven volgens de huisstijl van de NS, waarmee je laat zien dat je je startniveau overstijgt en je UX- en front-endvaardigheden toepast.

## **Technische Specificaties**

## **Dag 1 maandag**

- **Wat heb ik gedaan?** Als alle eerst ben ik gaan zoeken naar de huistijl van NS, Welke kleuren gebruiken ze en hoe ziet het er uit. toen ben ik aan de slag gegegaan met het opzetej maken in html. Ik wilde eerst de html structuur hebben voordat ik aan de stijling begon van het invul veld.
  ![Hoe de html er uitziet zonder styling](/images/readme/dag1-opzetje-html.png)
- **Hoe lang duurde het ?** Ik was hier 6 uurtjes mee bezig. De hele dag eigenlijk.
- **Wat heb ik geleerd?** Ik heb geleerd hoe het structuur opzetten voor een goeie invul veld werkt. Welke benamingen ik moet geven vor de juiste inputs.
- **Wat ga ik morgen doen** Morgen ga ik me focussen op de Progressive disclosure. Wat laat ik de gebruikers zien? Laat ik alle vragen zien? Laat ik de vragen uitklappen als de gebruiker heeft gekozen voor een optie. Of laat ik de vragen inklappen als er is gekozen voor een optie.

Dit gaat de progressive disclosure worden

### Voorbeeld van de flow

Stel de overledene was alleenstaand zonder kinderen, maar mét een testament. De gebruiker ziet dan alleen:

- **1a:** Naam/BSN (Ingevuld)
- **1b:** Getrouwd? -> **Nee** (Rest van 1b blijft verborgen)
- **1c:** Kinderen? -> **Nee** (Rest van 1c blijft verborgen)
- **1d:** Testament? -> **Ja** -> *Nu klappen de notarisgegevens pas uit.*

  ## **Dag 2 dinsdag**

- **Wat heb ik gedaan?** Ik heb de progressive disclosure toegevoegd. Met behulp van victor. Dat waren veel codes. Hij lege me uit dat ik moest kijken of de opties gechecked waren. Dat deed je doormiddel van dit stukje code. Met display block liet je ze dan zien. Ook ben ik vandaag aan de slag geweest met de custom properties en de stijling. Ik heb dus de dag er voor onderzoek gedaan naar de NS huistijl.
  ![Hoe het stukje code er uit ziet zodat ik mijn vragen kan laten zien](/images/readme/code:display-block.png)
  ![De stijl van NS die ik in mijn custom properties heb toegevoegd](/images/readme/custom-properties.png)
- **Hoe lang duurde het ?** Ik was hier 2 uurtjes mee bezig. Met behulp van Victor.
- **Wat heb ik geleerd?** Ik heb geleerd hoe het structuur opzetten voor een goeie invul veld werkt. Welke benamingen ik moet geven vor de juiste inputs. Voor de rest van de dag was ik bezig met de stijling voor de website.

- **Wat ga ik volgende week doen** Volgebde week wil ik me gaan richten op validatie als iets niet is ingevuld. En de rest van de stijling.

## **Dag 3 maandag**

- **Wat heb ik gedaan?** Ik heb een json file gemaakt met alle gemeentes in nederland voor de vestigingsplaat. Zodat users hun vestigings plaats kunnen invullen. Dat heb ik gedaan doormiddel van dit stukje code. De lijst van alle gemeentes heb ik van internet van een API. (bron staat onderaan vermeld in readme.) Ook h
  ![Html van de vestigings input](/images/readme/html-vestigingsplaats.png)
  ![javascript vestigings input](/images/readme/javascript-verstigingsplaats.png)
- **Hoe lang duurde het ?** Ik was hier 2 uurtjes mee bezig
- **Wat heb ik geleerd?** json file toevoegen
- **Wat ga ik morgen doen** foccussen op validatie en requierment.

## **Dag 4 dinsdag**

- **Wat heb ik gedaan?**
  Vandaag hebben we de week geek gedaan, daarbij hebben we de email input gemaakt doormiddel van javascript samen met mijn groepje. Overdag ben ik bezig geweest met de validatie van de formulieren. Ik heb tot nu alleen als je op submit klinkt dat je dan een melding krijgt met vergeten in te vullen. Dat heb ik gedaan met het user-invalid wobble effect. Ik heb daar bij een p toegevoegd met een svg en als display none. Zodat hij pas te voorschhijn komt met

input:user-invalid + .error-message {
display: block;
border-color: var(--ns-rood-fout);
}

- **Hoe lang duurde het ?** Ik was hier 2 uurtjes mee bezig.
- **Wat heb ik geleerd?** Ik heb geleerd hoe je de requiermend toapast als iemand door wilt gaan naar de volgende.
- **Wat ga ik volgendeweek doen** Volgende week wil ik op alle elemtenen de requierment zetten. Nu heb ik dat alleen gedaan in het begin. Maar de flow moet beter zodat het invul beter gaat. Ook ga ik me volgende week focussen op validatie
