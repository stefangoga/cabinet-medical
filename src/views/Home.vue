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
          alt:"https://assets3.ghidul.ro/media/foto_video/1/34/223811/foto/crop/4570121.jpg"
        },
        {
          id: 2,
          title: "Clinica Anedio",
          body: "Pediatrie",
          img: "http://clinicaanedio.ro/files/galerie/2_dscn7728.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"In cadrul ANEDIO Medical Center va asteptam cu o gama diversificata de alte servicii medicale prin punerea la dispoziție a unor spatii de consultatii medicale si tratament utilate la cel mai inal nivel, in conformitate cu prevederile Ministerului Sanatatii si deservite de un corp medical cu o bogata experienta profesionala si rezultate recunoscute",
          link:"http://clinicaanedio.ro/",
          alt:"http://clinicaanedio.ro/files/galerie/7_dscn7738.jpg"
        },
        {
          id: 3,
          title: "Clinica Dr.Neagoe",
          body: "Stomatologie",
          img: "https://www.dentistonline.ro/images/users_cabinete/1961/Foto2.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Clinica stomatologica Dr. Neagoe din orasul Otopeni, pune la dispozitia pacientilor sai o gama completa de tratamente dentare de calitate, realizate de medici stomatologi specialisti, intr-un mediu placut si relaxant.Echipa noastra medicala interdisciplinara asigura servicii stomatologice complete, adaptate ultimelor descoperiri in domeniul stomatologiei moderne: implantologie si chirugie dentara, protetica (design personalizat fiecarui caz clinic, folosind tehnologia CAD-CAM), endodontie, stomatologie pentru copii, ortodontie si profilaxie dar si tratamente estetice faciale neinvazive.Personalul medical al clinicii isi imbunatateste permanent cunostintele din aria de interes profesional, prin participarea la cursuri si specializari atat in tara cat si in strainatate.Dezvoltarea clinicii noastre a fost, este si va fi intotdeauna ghidata de cererea pacientilor si facem tot posibilul sa raspundem cat mai bine nevoilor acestora.",
          link:"https://www.stomatolog-otopeni.ro/",
          alt:"http://www.ghidulmedical.com/ro/tm/drneagoelaura/photos/drneagoelaura-tm-ro_x_dr-neagoe-laura_32230.jpg"
        },
        {
          id: 4,
          title: "Clinica M&M",
          body: "Diabet-boli de nutritie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTb9QBYiEh9tUKTmoXi0o7X4eQTwJSB-KUfEzDL8Sq1KRCro_2neD_z8QBTboG3K8YJs&usqp=CAU",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"De cele mai multe ori, este mult mai simplu să previi, decât să tratezi, este mai înțelept aflarea informațiilor de la Medic, decât de la vecina. Există o zicală în medicină, după care ne ghidăm, “Nu există boli, există Bolnavi“. De aceea, vă reamintim că, deși aceeași boală are simptome comune la mai mulți pacienți, fiecare dintre noi poate manifesta semne și simpome specifice nouă, fiind astfel semnalate complicații sau patologii asociate.",
          link:"https://mmmedical.ro/",
          alt:"https://lh3.googleusercontent.com/p/AF1QipN6JEKxboeWUgnSKALsMsyQSOQrBe5zdS9uPRDl=w600-k"
        },
        {
          id: 5,
          title: "Clinica Tommed",
          body: "Reumatologie",
          img: "http://www.centrulmedicaltommed.ro/images/header_banner1.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"	Suntem o policlinica tanara cu sediul în Craiova, Bulevardul Carol I nr.50, jud. Dolj, functionand inca din luna ianuarie 2006.Ne-am propus sa oferim servicii medicale complexe si de calitate atat in medicina primara cat si in ambulatoriul de specialitate.Serviciile noastre se adreseaza atat persoanelor fizice cat şi celor juridice, acestora din urma oferindu-le servicii complete de medicina muncii. ",
          link:"http://www.policlinicatommed.ro/",
          alt:"http://www.centrulmedicaltommed.ro/images/DocPac1.jpg"
        },
        {
          id: 6,
          title: "Clinica PriMed",
          body: "Dermatologie",
          img: "https://calatoriaperfecta.ro/wp-content/uploads/2020/07/Clinica-PriMed.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Pentru noi cei de la PriMed sănătatea ta contează. De aceea avem tehnologii noi, echipamente performante, asistență medicală specializată și nu în ultimul rând o echipă de încredere.Încă de la înființare ne-am propus să oferim unui public larg posibilitatea de a accesa servicii medicale de calitate superioară celor oferite de Stat, la costuri 0 pentru pacient sau la prețuri accesibile nivelului mediu de venit din România.Atunci când ne alegi, fii sigur că vei beneficia de investigații complete, profesioniste și la cele mai înalte standarde.Suntem în pas cu tehnologia, astfel că folosim cea mai nouă și performantă aparatură pentru realizarea analizelor, investigațiilor și tratamentelor medicale.Totodată, ne adaptăm rapid momentului, de anul acesta oferind și consultații ONLINE, atât de necesare și importante în contextul panedmiei Covid-19Clinica PRIMED îți oferă consultații, investigații, ecografii, analize de laborator, dermatocosmetică.Pacientul este prioritatea noastră numărul 1, așadar punem mare accent pe comunicarea atentă și permanentă cu acesta, pe obținerea feedback-ului și răspunsul imediat.Clinica noastră este localizată pe Bulevardul Dinicu Golescu nr.10, București.",
          link:"https://primed.ro/",
          alt:"https://i0.wp.com/calatoriaperfecta.ro/wp-content/uploads/2020/07/Clinica_PriMed-1.jpg?fit=1536%2C2048&ssl=1"
        },
        {
          id: 7,
          title: "Clinica Sante",
          body: "Pediatrie",
          img: "https://www.clinica-sante.ro/wp-content/uploads/2012/11/giurgiului.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Clinica Sante este o organizatie privata de asistenta medicala. Scopul nostru este acordarea de servicii medicale accesibile si de cea mai buna calitate, scop care ghideaza pasii echipei Clinica Sante in interactiunea cu pacientii. Valorile noastre cheie sunt performanta, respectul, castigarea increderii fiecarui pacient pe care il avem si nu in ultimul rand, atingerea celui mai inalt nivel atunci cand vine vorba de profesionalism in domeniu. Suntem dedicati pacientilor nostri, iar interactiunea cu fiecare dintre ei trebuie sa fie intotdeauna conexata cu ideea de perfectiune. Confortul si satisfactia pacientilor sunt elemente primordiale pentru noi.Clinica Sante, in traiectul sau catre o relatie perfecta cu pacientii, a luat in calcul valorizarea celor mai bune sisteme de asistenta medicala din Europa de Vest si SUA si astfel, principiile noastre sunt strans legate de a oferi cele mai bune servicii fiecarui pacient.Clinica Sante a fost infiintata in anul 1995 si inca de atunci ne-am organizat intru imbunatatirea relatiei cu pacientii. Fie ca vorbim de cele mai bune servicii, de o comunicare totala si eficienta sau de a fi intotdeauna acolo pentru a cunoaste, intui si satisface nevoile pacientului, Clinica Sante lucreaza pentru fiecare pacient in parte cu toate mijloacele de care dispune.In ceea ce priveste raspandirea Clinica Sante in Romania, putem sa vorbim despre o acoperire vasta, suntem prezenti in toate judetele, unde de altfel suntem si lider de piata, iar drumul nostru continua, ne dezvoltam neincetat pentru ca ne dorim sa fim aproape de toti pacientii nostri.Clinica Sante – Clinica aproape de dumneavoastra.",
          link:"https://www.clinica-sante.ro/",
          alt:"https://www.clinica-sante.ro/wp-content/uploads/2015/04/receptie.jpg"
        },
        {
          id: 8,
          title: "Clinica Dentist Popescu",
          body: "Dentara",
          img: "https://ziarulsanatatea.ro/wp-content/uploads/2018/05/clinica6-1024x576.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"IntegritateInformăm pacienții despre situația și opțiunile lor, spunându-le întotdeauna adevărul.Performanță / CalitateSuntem buni și foarte buni în tot ceea ce facem, pentru că vrem să livrăm CALITATE în primul rând, fără să avem pretenția că suntem rapizi.Onestitate Respectul față de pacient și față de înțelegerile cu acesta sunt prioritare pentru noi.Excelență Iubim să facem lucruri de cea mai bună calitate, respectând tendințele stomatologiei actuale.Inovație Investim continuu în tehnologiile noi și inovatoare. Comunicare Informăm corect pacienții noștri cu privire la starea de sănătate, la opțiuni, solutii de tratament ori financiare. De 10 ani ne bucurăm de precizie lucrului sub microscop și de acum și radiologie 3D, de tehnologie digitală în realizarea lucrărilor protetice CAD-CAM.",
          link:"http://dentistpopescu.ro/",
          alt:"data:image/jpeg;base64,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"
        },
        {
          id: 9,
          title: "Policlinica Elga",
          body: "Urologie",
          img: "https://ghidautoservice.ro/wp-content/uploads/2022/03/POLICLINICA-ELGA.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM",
          about:"Policlinica functioneaza din anul 1997, detinem una din cele mai bune si complete dotari din Oltenia, consultatiile si serviciile medicale sunt asigurate de peste 40 de medici renumiti, cu experienta. Suntem certificati:SR EN ISO 9001:2015 Sistem de Management al Calitatii. Laboratorul de analize medicale este acreditat RENAR SR EN ISO 15189:2013 .Avem contract cu: CAS DOLJ, CASAOPSNAJ.Oferim servicii complete de medicina muncii intr-un singur sediu. Suntem agreati de Ministerul Transporturilor sa efectuam examinari medicale si psihologice pentru personalul cu responsabilitati in siguranta circulatiei rutiere.",
          link:"https://www.policlinicaelga.ro/",
          alt:"https://ghidautoservice.ro/wp-content/uploads/2022/03/POLICLINICA-ELGA.jpg"
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
