/* ------- Page d'accueil ------- */

/* Fonction qui permet d'afficher l'heure dans l'horloge */
function horloge()
{
    /* Récupère les différents paramètres nécessaire */
    var date = new Date;
    // On récupère l'année en cours
    var annee = date.getYear();
    var a1 = annee.toLocaleString().substring(1,2);
    var a2 = annee.toLocaleString().substring(2,3);
    // On récupère le mois en cours
    var mois = date.getMonth();
    mois = mois + 1;
    var m1 = mois.toLocaleString().substring(0,1);
    var m2 = mois.toLocaleString().substring(1,2);
    // On récupère le numéro du jour en cours
    var jour = date.getDate();
    var j1 = jour.toLocaleString().substring(0,1);
    var j2 = jour.toLocaleString().substring(1,2);
    // On récupère l'heure
    var heure = date.getHours();
    var h1 = heure.toLocaleString().substring(0,1);
    var h2 = heure.toLocaleString().substring(1,2);
    // On récupère les minutes
    var minute = date.getMinutes();
    var min1 = minute.toLocaleString().substring(0,1);
    var min2 = minute.toLocaleString().substring(1,2);


    // afficher la date
    // jour
   	if ( jour < 10) {
		document.images[0].src="./image/cat0.png" ;
		document.images[1].src="./image/cat" + j1 + ".png" ;
		document.images[2].src="./image/catdash.png" ;
	}
	else {
		document.images[0].src="./image/cat" + j1 + ".png" ;
		document.images[1].src="./image/cat" + j2 + ".png" ;
		document.images[2].src="./image/catdash.png" ;
	} 

    // mois
   	if ( mois < 10) {
		document.images[3].src="./image/cat0.png" ;
		document.images[4].src="./image/cat" + m1 + ".png" ;
		document.images[5].src="./image/catdash.png" ;
	}
	else {
		document.images[3].src="./image/cat" + m1 + ".png" ;
		document.images[4].src="./image/cat" + m2 + ".png" ;
		document.images[5].src="./image/catdash.png" ;
	} 

    // année
   	if ( annee < 10) {
		document.images[6].src="./image/cat0.png" ;
		document.images[7].src="./image/cat" + a1 + ".png" ;
	}
	else {
		document.images[6].src="./image/cat" + a1 + ".png" ;
		document.images[7].src="./image/cat" + a2 + ".png" ;
	} 


    // afficher les heures
  	if ( heure < 10) {
		document.images[8].src="./image/cat0.png" ;
		document.images[9].src="./image/cat" + h1 + ".png" ;
		document.images[10].src="./image/cat_h.png" ;
	}
	else {
		document.images[8].src="./image/cat" + h1 + ".png" ;
		document.images[9].src="./image/cat" + h2 + ".png" ;
		document.images[10].src="./image/cat_h.png" ;
	} 

    // afficher les minutes
	if ( minute < 10) {
		document.images[11].src="./image/cat0.png" ;
		document.images[12].src="./image/cat" + min1 + ".png" ;
	}
	else {
		document.images[11].src="./image/cat" + min1 + ".png" ;
		document.images[12].src="./image/cat" + min2 + ".png" ;
	}    
}

/* Remet les images a 0 */
function reset()
{
    document.images[0].src="./image/cat0.png" ;
    document.images[1].src="./image/cat0.png" ;
    document.images[2].src="./image/catdash.png" ;
    document.images[3].src="./image/cat0.png" ;
    document.images[4].src="./image/cat0.png" ;
    document.images[5].src="./image/catdash.png" ;
    document.images[6].src="./image/cat0.png" ;
    document.images[7].src="./image/cat0.png" ;
    document.images[8].src="./image/cat0.png" ;
    document.images[9].src="./image/cat0.png" ;
    document.images[10].src="./image/cat_h.png" ;
    document.images[11].src="./image/cat0.png" ;
    document.images[12].src="./image/cat0.png" ;
}


/* ------- Page VIP ------- */


/* Ouvre la fenetre si le mot de passe est le bon */ 
function ouverture() 
{
    var mdp = document.vip.mdp.value
    if(mdp == "darkitten"){
        fenetre();
    }else{
        fenetre2();
    }
}

/* Lien pour la fenetre vip */
function fenetre()
{
    window.open("real_vip.html","essais","toolbar=yes,location=no,directories=no,status=yes,scrollbars=no,height=650,width=1000,left=550");
}

/* Message d'alert si le mot de passe n'est pas bon */
function fenetre2()
{
    alert("Mauvais mot de passe. Soit vous vous être trompés en l'écrivant, soit vous ne méritez pas d'y accéder.");
}


/* ------- Page tests ------- */

// Référence : http://www.lechatchatasamemere.fr/wikichat/mon-chat-au-quotidien/47-convertir-l-age-de-son-chat-en-age-humain

/* Fonction de convertion de l'age : Correspondance de l'âge des chats non uniforme*/
function convert() 
{
    var age = document.formulaire.valeurA.value
    /* Si la personne a moins de 24 ans */
    if(age<24) {
        /* On sait que 16 ans humain correspond à 1 ans de chat */
        /* Dans un premier temps le ratio suivit pour la première année de chat*/
        if(age<=16){   
            /* Si on tombe sur 16 ans humain alors le chat a 1 an*/    
            if(age==16){
                document.formulaire.valeurB.value = 1 ;
                document.formulaire.valeurC.value = 0;
            /* Sinon 0 années et la valeur entière de cat donne les mois*/
            }else{
                /* Les mois du chat suit un ratio d'une année humaine pour 1,45 mois de chat */
                var cat = age/1.45; 
                document.formulaire.valeurB.value = 0 ;
                /* On prend la valeur entière des mois */
                document.formulaire.valeurC.value = parseInt(cat);
            }
        /* Sinon le ratio suivit pour la seconde année de chat */    
        }else{
            /* Une année humaine donne 4/6 mois pour un chat */
            cat = (age-16)/0.66 
            document.formulaire.valeurB.value = 1 ;
            document.formulaire.valeurC.value = Math.ceil(cat);
        }
    /* Si la personne a entre 24 et 92 ans*/
    }else if(age>=24&&age<=92) {
        /* 24 ans = 2 ans pour un chat donc on retire 24 ans et on ajoute 2 ans */
        /* Pour cette période 4 ans humain équivalent à 1 année de chat */
        var cat = 2+(age-24)/4;
        /* Affiche la partie entière de l'âge soit les années */
        document.formulaire.valeurB.value = parseInt(cat) ;
        /* Affiche la partie flottante de l'âge pour en faire des mois */
        /* 1 année / 12 = 0.083 */
        document.formulaire.valeurC.value = parseInt((cat-parseInt(cat)) /0.083);
    /* Si la personne a plus de 92 ans */
    }else {
        /* 19 ans = 92 ans pour le chat donc ici aussi on retire 92 et ajoute 19 */
        /* Pour cette période 6 ans humains équivalent à 1 année de chat */
        var cat = 19+(age-92)/6;
        /* Même principe que précédemment */
        document.formulaire.valeurB.value = parseInt(cat) ;
        document.formulaire.valeurC.value = parseInt((cat-parseInt(cat)) /0.083);
    }
}


/* Récupère les réponses du formulaire */
function resume()
{
    var score = 0;
    
    // Chat favoris
    if ( document.formulaire.starcat.value == ""){ 
        var a = "Vous n'avez pas de chat célèbre favoris <br>" ;
    }else { 
        var a =  "Votre chat célèbre favoris est : " + document.formulaire.starcat.value + "<br>";
        score = score +1;	
    }

    // Pelage de votre chat
    if (document.formulaire.cat1[0].checked){ 
        var b = "Vous n'avez pas de chat... Changez cela ou vous risquez gros. <br>" ; 
    }else { 
        var b = "Vous avez un chat et son pelage est : " + document.formulaire.cat2.value + "<br>" ;
        score = score +1;
    }

    // Connaissance des chats
    if (document.formulaire.connais[0].checked && document.formulaire.connais[4].checked && document.formulaire.connais[5].checked && document.formulaire.connais[1].unchecked && document.formulaire.connais[2].unchecked && document.formulaire.connais[3].unchecked){
        var e = "Vous avez tout comprit aux passes temps favoris des chats. <br>";
        score = score +3;
    }else{ 
        var e = "Vous avez encore des choses à apprendre des chats car vous ne connaissez pas les 3 règles d'or. <br>";
    }

    // Repérer l'onomatopée
    if ( document.formulaire.miaulement.value == ""){ 
        var c = "Vous n'avez pas su repérer l'onomatopée intrue --- ";
    }else {  
        var c =  "Vous avez choisie l'onomatopée : " + document.formulaire.miaulement.value + " --- ";
        if(document.formulaire.miaulement.value == "Miouw"){
            c = c + "Vous avez trouvé l'intrue dans la liste bravo. <br>";
            score = score +3;
        }else{
            c = c + "Vous n'avez pas trouvé l'onomatopée intrue. <br";
        }
    }

    // Ecriture
    document.write(a);
    document.write(b);
    document.write(e);
    document.write(c);
    if(score>=5){
        document.write("<br />Félicitations vous êtes un Maître Jedi Chat vous pouvez dès à présent demander votre pass VIP sur notre site ! Voici le code VIP : darkitten <br>");
    }
}
















