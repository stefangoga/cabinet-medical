<template>
  <div id="app">
    <!-- <input type="text" v-model="search" /> -->
    <v-text-field
      v-model="search"
      class="pa-3"
      dense
      label="Cautare"
    ></v-text-field>
    <p class="font-weight-bold">Ati cautat clinica: {{ search }}</p>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="post in filteredPosts" :key="post.id">
          <post :post="post"></post>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import db from "@/main";

import Post from "@/components/Post";
export default {
  name: "Home",
  components: {
    Post
  },
  data() {
    return {
      ora:"",
      search: "",
      posts: [
        {
          id: 1,
          title: "Clinica Max",
          body: "Dermatologie",
          img: "https://assets2.ghidul.ro/media/foto_video/1/34/223811/foto/crop/4570091.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          link:"https://www.facebook.com/Maxclinica",
          about:"Clinica Max alaturi de tine! Cabinete medicale de specialitate! Adresa : Str.Carei, nr.1A,, sector 2 Bucuresti 022824 Bucharest, Romania",
          alt:"https://assets3.ghidul.ro/media/foto_video/1/34/223811/foto/crop/4570121.jpg",
          value:3,
          adresa:"Str.Carei, nr.1A,, sector 2 Bucuresti 022824"
        },
        {
          id: 2,
          title: "Clinica Anedio",
          body: "Pediatrie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLACl7LmWOgC5WoEoNRbh3xOyG9mHY-PgO6A&usqp=CAU",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"In cadrul ANEDIO Medical Center va asteptam cu o gama diversificata de alte servicii medicale prin punerea la dispoziție a unor spatii de consultatii medicale si tratament utilate la cel mai inal nivel, in conformitate cu prevederile Ministerului Sanatatii si deservite de un corp medical cu o bogata experienta profesionala si rezultate recunoscute",
          link:"http://clinicaanedio.ro/",
          alt:"http://clinicaanedio.ro/files/galerie/7_dscn7738.jpg",
          adresa:"Strada George Enescu 76, Craiova 200709",
          value:4
        },
        {
          id: 3,
          title: "Clinica Dr.Neagoe",
          body: "Stomatologie",
          img: "https://www.dentistonline.ro/images/users_cabinete/1961/Foto2.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Clinica stomatologica Dr. Neagoe din orasul Otopeni, pune la dispozitia pacientilor sai o gama completa de tratamente dentare de calitate, realizate de medici stomatologi specialisti, intr-un mediu placut si relaxant.Echipa noastra medicala interdisciplinara asigura servicii stomatologice complete, adaptate ultimelor descoperiri in domeniul stomatologiei moderne: implantologie si chirugie dentara, protetica (design personalizat fiecarui caz clinic, folosind tehnologia CAD-CAM), endodontie, stomatologie pentru copii, ortodontie si profilaxie dar si tratamente estetice faciale neinvazive.Personalul medical al clinicii isi imbunatateste permanent cunostintele din aria de interes profesional, prin participarea la cursuri si specializari atat in tara cat si in strainatate.Dezvoltarea clinicii noastre a fost, este si va fi intotdeauna ghidata de cererea pacientilor si facem tot posibilul sa raspundem cat mai bine nevoilor acestora.",
          link:"https://www.stomatolog-otopeni.ro/",
          alt:"http://www.ghidulmedical.com/ro/tm/drneagoelaura/photos/drneagoelaura-tm-ro_x_dr-neagoe-laura_32230.jpg",
          value:3.5,
          adresa:"Strada 23 August nr. 71, Otopeni 075100"
        },
        {
          id: 4,
          title: "Clinica M&M",
          body: "Diabet-boli de nutritie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTb9QBYiEh9tUKTmoXi0o7X4eQTwJSB-KUfEzDL8Sq1KRCro_2neD_z8QBTboG3K8YJs&usqp=CAU",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"De cele mai multe ori, este mult mai simplu să previi, decât să tratezi, este mai înțelept aflarea informațiilor de la Medic, decât de la vecina. Există o zicală în medicină, după care ne ghidăm, “Nu există boli, există Bolnavi“. De aceea, vă reamintim că, deși aceeași boală are simptome comune la mai mulți pacienți, fiecare dintre noi poate manifesta semne și simpome specifice nouă, fiind astfel semnalate complicații sau patologii asociate.",
          link:"https://mmmedical.ro/",
          alt:"https://lh3.googleusercontent.com/p/AF1QipN6JEKxboeWUgnSKALsMsyQSOQrBe5zdS9uPRDl=w600-k",
          value:3.5,
          adresa:"Strada Doctor Nicolae Ionescu Sisești 19A, Craiova"
        },
        {
          id: 5,
          title: "Clinica Tommed",
          body: "Reumatologie",
          img: "http://www.centrulmedicaltommed.ro/images/header_banner1.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"	Suntem o policlinica tanara cu sediul în Craiova, Bulevardul Carol I nr.50, jud. Dolj, functionand inca din luna ianuarie 2006.Ne-am propus sa oferim servicii medicale complexe si de calitate atat in medicina primara cat si in ambulatoriul de specialitate.Serviciile noastre se adreseaza atat persoanelor fizice cat şi celor juridice, acestora din urma oferindu-le servicii complete de medicina muncii. ",
          link:"http://www.policlinicatommed.ro/",
          alt:"http://www.centrulmedicaltommed.ro/images/DocPac1.jpg",
          value:4.2,
          adresa:"Bulevardul Carol I 50, Craiova 200692"
        },
        {
          id: 6,
          title: "Clinica PriMed",
          body: "Dermatologie",
          img: "https://calatoriaperfecta.ro/wp-content/uploads/2020/07/Clinica-PriMed.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Pentru noi cei de la PriMed sănătatea ta contează. De aceea avem tehnologii noi, echipamente performante, asistență medicală specializată și nu în ultimul rând o echipă de încredere.Încă de la înființare ne-am propus să oferim unui public larg posibilitatea de a accesa servicii medicale de calitate superioară celor oferite de Stat, la costuri 0 pentru pacient sau la prețuri accesibile nivelului mediu de venit din România.Atunci când ne alegi, fii sigur că vei beneficia de investigații complete, profesioniste și la cele mai înalte standarde.Suntem în pas cu tehnologia, astfel că folosim cea mai nouă și performantă aparatură pentru realizarea analizelor, investigațiilor și tratamentelor medicale.Totodată, ne adaptăm rapid momentului, de anul acesta oferind și consultații ONLINE, atât de necesare și importante în contextul panedmiei Covid-19Clinica PRIMED îți oferă consultații, investigații, ecografii, analize de laborator, dermatocosmetică.Pacientul este prioritatea noastră numărul 1, așadar punem mare accent pe comunicarea atentă și permanentă cu acesta, pe obținerea feedback-ului și răspunsul imediat.Clinica noastră este localizată pe Bulevardul Dinicu Golescu nr.10, București.",
          link:"https://primed.ro/",
          alt:"https://i0.wp.com/calatoriaperfecta.ro/wp-content/uploads/2020/07/Clinica_PriMed-1.jpg?fit=1536%2C2048&ssl=1",
          value:3.7,
          adresa:"Bulevardul Dinicu Golescu 10, București 010862"
        },
        {
          id: 7,
          title: "Clinica Sante",
          body: "Pediatrie",
          img: "https://www.clinica-sante.ro/wp-content/uploads/2012/11/giurgiului.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Clinica Sante este o organizatie privata de asistenta medicala. Scopul nostru este acordarea de servicii medicale accesibile si de cea mai buna calitate, scop care ghideaza pasii echipei Clinica Sante in interactiunea cu pacientii. Valorile noastre cheie sunt performanta, respectul, castigarea increderii fiecarui pacient pe care il avem si nu in ultimul rand, atingerea celui mai inalt nivel atunci cand vine vorba de profesionalism in domeniu. Suntem dedicati pacientilor nostri, iar interactiunea cu fiecare dintre ei trebuie sa fie intotdeauna conexata cu ideea de perfectiune. Confortul si satisfactia pacientilor sunt elemente primordiale pentru noi.Clinica Sante, in traiectul sau catre o relatie perfecta cu pacientii, a luat in calcul valorizarea celor mai bune sisteme de asistenta medicala din Europa de Vest si SUA si astfel, principiile noastre sunt strans legate de a oferi cele mai bune servicii fiecarui pacient.Clinica Sante a fost infiintata in anul 1995 si inca de atunci ne-am organizat intru imbunatatirea relatiei cu pacientii. Fie ca vorbim de cele mai bune servicii, de o comunicare totala si eficienta sau de a fi intotdeauna acolo pentru a cunoaste, intui si satisface nevoile pacientului, Clinica Sante lucreaza pentru fiecare pacient in parte cu toate mijloacele de care dispune.In ceea ce priveste raspandirea Clinica Sante in Romania, putem sa vorbim despre o acoperire vasta, suntem prezenti in toate judetele, unde de altfel suntem si lider de piata, iar drumul nostru continua, ne dezvoltam neincetat pentru ca ne dorim sa fim aproape de toti pacientii nostri.Clinica Sante – Clinica aproape de dumneavoastra.",
          link:"https://www.clinica-sante.ro/",
          alt:"https://www.clinica-sante.ro/wp-content/uploads/2015/04/receptie.jpg",
          value:3.7,
          adresa:"Strada Nicolae Iorga 33, Craiova 200058"
        },
        {
          id: 8,
          title: "Clinica Dentist Popescu",
          body: "Dentara",
          img: "https://ziarulsanatatea.ro/wp-content/uploads/2018/05/clinica6-1024x576.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"IntegritateInformăm pacienții despre situația și opțiunile lor, spunându-le întotdeauna adevărul.Performanță / CalitateSuntem buni și foarte buni în tot ceea ce facem, pentru că vrem să livrăm CALITATE în primul rând, fără să avem pretenția că suntem rapizi.Onestitate Respectul față de pacient și față de înțelegerile cu acesta sunt prioritare pentru noi.Excelență Iubim să facem lucruri de cea mai bună calitate, respectând tendințele stomatologiei actuale.Inovație Investim continuu în tehnologiile noi și inovatoare. Comunicare Informăm corect pacienții noștri cu privire la starea de sănătate, la opțiuni, solutii de tratament ori financiare. De 10 ani ne bucurăm de precizie lucrului sub microscop și de acum și radiologie 3D, de tehnologie digitală în realizarea lucrărilor protetice CAD-CAM.",
          link:"http://dentistpopescu.ro/",
          alt:"https://dentistpopescu.ro/wp-content/uploads/2020/09/clinica.jpg",
          value:4.7,
          adresa:"Bloc T9 Strada Eustațiu Stoenescu 1B"
        },
        {
          id: 9,
          title: "Policlinica Elga",
          body: "Urologie",
          img: "https://ghidautoservice.ro/wp-content/uploads/2022/03/POLICLINICA-ELGA.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Policlinica functioneaza din anul 1997, detinem una din cele mai bune si complete dotari din Oltenia, consultatiile si serviciile medicale sunt asigurate de peste 40 de medici renumiti, cu experienta. Suntem certificati:SR EN ISO 9001:2015 Sistem de Management al Calitatii. Laboratorul de analize medicale este acreditat RENAR SR EN ISO 15189:2013 .Avem contract cu: CAS DOLJ, CASAOPSNAJ.Oferim servicii complete de medicina muncii intr-un singur sediu. Suntem agreati de Ministerul Transporturilor sa efectuam examinari medicale si psihologice pentru personalul cu responsabilitati in siguranta circulatiei rutiere.",
          link:"https://www.policlinicaelga.ro/",
          alt:"https://ghidautoservice.ro/wp-content/uploads/2022/03/POLICLINICA-ELGA.jpg",
          value:4,
          adresa:"Strada Mihai Eminescu 32, Craiova 200131"
        }
      ],

    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.search.toLowerCase()) ||
          post.body.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#buton-programare {
  top: 12px;
}
</style>
