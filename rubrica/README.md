# ROLES #

In questo progetto dovrete creare una rubrica utilizzando json server.
Il file di mock del db è già presente all'interno delle resources della repository.

L'obiettivo è quello di utilizzare i metodi del protocollo HTTP per aggiungere, modificare ed eliminare una voce.

### Steps preliminari ###

* Installa json server attraverso node: https://github.com/typicode/json-server
* Lancia il json server per leggere il db.json che trovi nelle resources

### Descrizione dell'esercizio ###

* Al caricamento dell'index.html verranno renderizzate tutte le voci della rubrica in una tabella
* L'ultima colonna della tabella dovrà dare la possibilità di effettuare delle operazioni sulla voce specifica, ovvero si potrà modificare la voce selezionata e la si potrà eliminare
* Tutte le operazioni dovranno andare ad impattare il database simulato dal json server

### Edit Records ###

* Creare la funzione edit
* Agganciare la funzione e passare i parametri
* Creare la chiamata API
* Creare l'oggetto con i valori modificati
* Creare il form per inserire i nuovi valori
* Renderizzare i valori esisteti all'interno del form di modifica
* Passare i nuovi valori all'interno della funzione edit
* Salvare i valori e rirenderizzarli all'interno della tabella