        const Portfolio = (() => {

            // --- DATA SOURCE (Refactored) ---
            const projectsData = {
                'erp-retail': {
                    title: "B2B Order Management System (Settore Retail/Moda)",
                    titleKey: "proj_retail_title",
                    meta: "Product Design • 2025 -",
                    images: [
                        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                    ],
                    contentKeys: ['erp_modal_1'],
                    prototypeLink: 'B2BDeepView.Html'
                },
                'erp-industrial': {
                    title: "Manufacturing Management Software (Settore Industriale)",
                    titleKey: "proj_industrial_title",
                    meta: "Product Design, Ricerca • 2025 -",
                    useCanvas: true,
                    images: [],
                    contentKeys: ['erp_modal_B1', 'erp_modal_B2']
                }
            };

            // --- TRANSLATION DATA ---
            const translations = {
                it: {
                    nav_home: "Home",
                    nav_about: "About",
                    nav_projects: "Projects",
                    hero_headline: "Progetto interfacce che funzionano.",
                    btn_talk: "Parliamo",
                    btn_resume_preview: "Anteprima CV",
                    profile_bio: "Sono un UX/UI Designer con una forte attitudine alla risoluzione di problemi complessi. Con una laurea in Culture Digitali e una formazione pratica presso l'Apple Developer Academy, ho imparato a far dialogare i bisogni degli utenti con gli obiettivi di business e i vincoli di sviluppo. <br><br> Nel mio ultimo anno e mezzo di esperienza, ho guidato il design di software B2B e piattaforme SaaS, gestendo l'intero ciclo di prodotto: dalla ricerca sul campo per mappare flussi complessi (come i vincoli legali in ambito industriale), fino alla creazione di interfacce scalabili e Design System. <br><br> Lavorare su architetture complesse mi ha insegnato il pragmatismo: che si tratti di un gestionale aziendale o di un'applicazione mobile, il mio obiettivo è progettare strumenti logici, usabili e pronti per lo sviluppo.",
                    btn_get_cv: "Visualizza CV",
                    btn_view_prototype: "Visualizza prototipo",
                    timeline_exp_title: "Esperienza",
                    role_1_strong_1: "Traduzione di requisiti complessi",
                    role_1_desc_1: "Lavoro sulla comprensione di contesti complessi e processi articolati, traducendo esigenze operative e di business in interfacce chiare, funzionali e facilmente utilizzabili.",
                    role_1_strong_2: "Progettazione e coerenza dell’esperienza",
                    role_1_desc_2: "Mi occupo della progettazione e dell’evoluzione dell’esperienza utente e delle interfacce, mantenendo coerenza visiva e funzionale anche su sistemi articolati e multi-utenza.",
                    role_1_strong_3: "Collaborazione e feedback continuo",
                    role_1_desc_3: "Collaboro costantemente con il team di sviluppo e con gli stakeholder, raccogliendo feedback, valutando vincoli tecnici e affinando le soluzioni durante tutte le fasi del progetto.",
                    timeline_edu_title: "Studi",
                    edu_1_role: "Laurea in culture digitali",
                    edu_1_desc: "Formazione focalizzata sulla <strong>comprensione delle culture digitali</strong> e dei nuovi media. L'analisi dei comportamenti sociali in rete diventa la base per definire <strong>flussi di User Experience efficaci</strong>, integrando la <strong>ricerca sociologica</strong> con le migliori pratiche di <strong>progettazione delle interfacce</strong>.",
                    edu_2_strong_1: "iOS Design Standards",
                    edu_2_desc_1: "Progettazione di interfacce native conformi alle Apple Human Interface Guidelines (HIG).",
                    edu_2_strong_2: "Challenge Based Learning",
                    edu_2_desc_2: "Sviluppo di soluzioni basate su ricerca utente reale e iterazioni rapide (Prototyping).",
                    edu_2_strong_3: "App Publishing",
                    edu_2_desc_3: "Supporto attivo nel ciclo di vita dell'app, dal concept al rilascio su TestFlight/App Store.",
                    edu_3_desc: "UX/UI Designer - Sviluppo di progetti in partnership esterne tramite <strong>metodologia Agile (Scrum)</strong>. Focus sulla progettazione di interfacce e user experience <strong>accessibili</strong> in un contesto di lavoro aziendale strutturato.",
                    section_work: "Work.",
                    btn_resume: "Resume",
                    proj_erp_desc: "Product Design, Design System, Ricerca",
                    proj_redesign_desc: "Come riprogetterei il flusso di prenotazione di una compagnia aerea.",
                    proj_musee_desc: "Rendere accessibili le esperienze web immersive.",
                    proj_kumbu_desc: "UX research per un'app di apprendimento per adulti.",
                    erp_modal_1: `

<h3>Overview</h3>
<p>Ho guidato l'evoluzione di un semplice tool di monitoraggio quantitativo, trasformandolo in una piattaforma SaaS completa per la gestione degli ordini B2B. Lavorando a stretto contatto con il cliente, ho razionalizzato le sue richieste, mappato i bisogni di nuove tipologie di utenti e progettato da zero flussi logici per gestire scenari di vendita complessi.</p>
{{PROTOTYPE_BTN_DESKTOP}}
<div style="margin-bottom: 2rem; width: 100%;"></div>

<h3>Il mio contributo</h3>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Definizione dei ruoli e dell'architettura:</strong> Invece di limitare il tool al solo monitoraggio, ho identificato e separato le necessità di due utenze chiave, strutturando flussi dedicati.</li>
    <li><strong style="color:var(--color-text);">Risoluzione logica dell'inventario:</strong> Il cliente aveva bisogno di tracciare le quantità ordinate per i produttori. Ho tradotto questa esigenza in un nuovo modello mentale per i rappresentanti, introducendo in fase d'ordine un sistema a doppio stato (Disponibilità Reale vs Virtuale) per avere una panoramica chiara ed evitare overbooking.</li>
    <li><strong style="color:var(--color-text);">Dalla logica all'interfaccia:</strong> Ho disegnato l'intera esperienza, dalla creazione di una dashboard mobile-friendly per i rappresentanti sul campo, fino alla realizzazione dei wireframe e prototipi ad alta fedeltà.</li>
    <li><strong style="color:var(--color-text);">Allineamento tecnico:</strong> Ho curato in prima persona l'hand-off, fornendo documentazione chiara al team di sviluppo per garantire che le logiche di business (come il doppio stato degli articoli) fossero implementate e comprese correttamente.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Redesign della fase di Inserimento Ordine: Da Tabella a Task-Oriented UI</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/PRIMA_image_1.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Prima">
  <img src="assets/b2b/Dopo_catalogo_view_operativo.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Dopo">
</div>

<h4>🚨 Il Problema: Il Carico Cognitivo della Vecchia Griglia</h4>
<p>L'interfaccia legacy obbligava i rappresentanti a inserire le quantità tramite una modale a tabella indifferenziata. Analizzando il flusso, ho identificato tre criticità UX principali:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Assenza di Gerarchia e Rischio di Errore:</strong> Le varianti di un prodotto venivano presentate come un blocco monolitico di testo. In un contesto operativo frenetico, la mancanza di demarcazione visiva aumentava drasticamente il rischio di errori di data-entry (es. inserire quantità per la variante "Nude" anziché "Nero").</li>
    <li><strong style="color:var(--color-text);">Rumore Visivo:</strong> L'utente era costretto a rileggere informazioni ridondanti su ogni riga (es. "MAT-A NERO" ripetuto 3 volte), affaticando la scansione visiva.</li>
    <li><strong style="color:var(--color-text);">Perdita di Contesto (Stress Test):</strong> Per articoli con molte combinazioni, la modale generava uno scroll infinito, nascondendo l'immagine del prodotto e facendo perdere all'utente il quadro generale di ciò che stava ordinando.</li>
</ul>

<h4>✨ La Soluzione: Riorganizzazione Architetturale</h4>
<p>Ho completamente riprogettato il layout dell'inserimento passando da una logica "database" a un'interfaccia task-oriented, ottimizzata per l'uso su tablet e desktop:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Raggruppamento per Attributi (Legge della Prossimità):</strong> Ho eliminato la ripetizione dei dati estraendo "Materiale" e "Colore" come intestazioni di gruppo. Ora l'utente seleziona il materiale tramite dei chips in alto (es. MAT-A / MAT-B), e sotto vede solo i blocchi colore raggruppati, riducendo il carico cognitivo di oltre il 60%.</li>
    <li><strong style="color:var(--color-text);">Contesto Fisso:</strong> Il prodotto base, insieme all'innovativo indicatore di disponibilità "Reale/Virtuale" e all'importo totale in tempo reale, rimangono "sticky" in alto. Questo risolve il problema dello scroll: l'utente sa sempre cosa sta configurando e qual è l'impatto economico immediato.</li>
    <li><strong style="color:var(--color-text);">Micro-interazioni Sicure:</strong> Ho sostituito la semplice casella di input con uno stepper (- 0 +). Questo permette aggiustamenti rapidi col mouse/touchscreen per piccole quantità, mantenendo comunque la possibilità di digitazione diretta (typing) per inserimenti massivi, garantendo sia prevenzione dell'errore che efficienza.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Modalità Doppia: Showroom vs Operativa</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Creazione_ordine.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Creazione ordine">
  <img src="assets/b2b/Dopo_catalogo_view_card.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Dopo catalogo card">
</div>

<p style="margin-bottom: 1rem;">Durante la ricerca è emerso che i rappresentanti usano il catalogo in due momenti distinti: in solitaria per inserire dati velocemente, o fianco a fianco con il cliente per mostrare la collezione.</p>

<p>Per risolvere questa dualità senza creare due pagine diverse, ho introdotto un Toggle View (Showroom / Operativa):</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Modalità Showroom (Visuale):</strong> Enfatizza le immagini dei prodotti con grandi card pulite. Mostra le varianti di colore in modo visivo (pallini colore) ed è pensata per ispirare il compratore durante la trattativa.</li>
    <li><strong style="color:var(--color-text);">Modalità Operativa (Dati):</strong> Comprime l'immagine e si espande per rivelare la lista d'inserimento rapido discussa sopra, ottimizzando lo spazio verticale per il data-entry puro.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Gestione Lista Ordini: Da "Database Cieco" a Triage Operativo</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Ordini_prima.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Ordini prima">
  <img src="assets/b2b/Ordini.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Ordini">
  <img src="assets/b2b/Ordini_4.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Ordini 4">
</div>

<h4>🚨 Il Problema: Interaction Cost e Mancanza di Overview</h4>
<p>La vecchia pagina ordini era essenzialmente un dump di database privo di gerarchia. Presentava due grossi limiti per l'operatività B2B:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Zero Overview:</strong> L'utente doveva calcolare mentalmente i volumi di vendita o cercare ciecamente. Non c'era alcuna visibilità sulle performance in tempo reale.</li>
    <li><strong style="color:var(--color-text);">Context Switching e Tempi Morti:</strong> Per modificare o visualizzare un ordine, l'utente doveva cliccare un'icona di espansione che apriva un overlay a schermo intero. Questo oscurava la tabella sottostante. Se l'utente doveva revisionare tre ordini di fila, subiva un altissimo Interaction Cost (apri, chiudi, cerca la riga successiva, apri di nuovo).</li>
</ul>

<h4>✨ La Soluzione: Dashboarding e Side-Drawer Pattern</h4>
<p>Ho trasformato la sezione da un semplice log passivo a uno strumento di controllo attivo:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Iniezione di KPI (Macro-livello):</strong> Ho introdotto una fascia di widget "glanceable" (Ordini settimanali, Entrate, Paia vendute). Questo converte istantaneamente la pagina in una vera e propria Dashboard, allineando l'interfaccia agli obiettivi di business e di fatturato.</li>
    <li><strong style="color:var(--color-text);">Il Pattern Side-Drawer per il Triage (Micro-livello):</strong> Ho eliminato l'overlay bloccante in favore di un Side-Drawer (Pannello laterale scorrevole) richiamabile al semplice click sull'intera riga.</li>
    <li><strong style="color:var(--color-text);">Il vantaggio UX:</strong> Mentre il drawer mostra i dettagli e i tasti di azione (come "Modifica" o "Stampa PDF"), la tabella principale rimane visibile e interattiva in background. L'utente può scorrere rapidamente i dettagli di molteplici ordini semplicemente cliccando in successione sulle righe, azzerando i tempi di apertura/chiusura e mantenendo intatto il proprio orientamento spaziale.</li>
    <li><strong style="color:var(--color-text);">Dati strutturati e Azioni immediate:</strong> All'interno del drawer, informazioni vitali come lo stato di avanzamento ("In produzione") e i tasti di modifica primaria sono stati spostati all'apice visivo, immediatamente accessibili senza dover scrollare i dettagli dell'intero carrello.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Gestione Anagrafica Clienti: Scalabilità nel B2B</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Clienti.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Clienti prima">
  <img src="assets/b2b/Clienti_new.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Clienti nuovo">
</div>

<h4>🚨 Il Problema: I limiti del Card Design nei CRM complessi</h4>
<p>Il sistema originale mostrava i clienti tramite una griglia di Card. Pur essendo esteticamente gradevoli, nell'operatività quotidiana presentavano severi limiti di usabilità:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Problema di Scalabilità:</strong> Nel settore Fashion B2B, un singolo cliente può avere molteplici sedi logistiche e complesse condizioni di pagamento. Una Card a dimensione fissa non ha lo spazio fisico per ospitare dati in espansione senza diventare illeggibile o costringere a fastidiosi overlay/modali.</li>
</ul>

<h4>✨ La Soluzione: Il Pattern Master-Detail</h4>
<p>Per supportare la densità di dati tipica di un vero SaaS gestionale, ho completamente ristrutturato la vista adottando un pattern Master-Detail (Split Screen):</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Colonna "Master" (Navigazione Rapida):</strong> Sulla sinistra, una lista fissa e scrollabile con la propria barra di ricerca contestuale. Permette al rappresentante di saltare da un cliente all'altro istantaneamente, offrendo un riscontro visivo chiaro (lo stato attivo) di chi si sta esaminando.</li>
    <li><strong style="color:var(--color-text);">Area "Detail" (Categorizzazione Logica):</strong> Sulla destra, lo spazio si espande per ospitare la scheda completa. Ho introdotto un'architettura dell'informazione rigorosa, suddividendo i dati in blocchi semantici: Dati Fiscali, Logistica e Sedi (con possibilità di aggiungere multipli indirizzi di spedizione), e Pagamenti (condizioni e IBAN).</li>
    <li><strong style="color:var(--color-text);">Razionalizzazione dei Dati:</strong> Ho rimosso informazioni superficiali o ridondanti presenti nel vecchio design (come il counter "Ordini Totali", che l'utente consulta già nella tab dedicata agli Ordini), focalizzando l'interfaccia solo sui dati strettamente necessari all'avvio della trattativa.</li>
</ul>`,
                    erp_modal_2: ``,
                    erp_modal_B1: "<strong>Overview:</strong> Ricerca e progettazione end-to-end per un nuovo software gestionale B2B, creato per tracciare la lavorazione dei materiali e l'archiviazione documentale in ambito industriale. Partendo da zero, ho definito il flusso di lavoro di tre diverse tipologie di utenti, bilanciando l'efficienza operativa con rigidi vincoli di conformità legale.",
                    erp_modal_B2:`<strong>Il mio contributo:</strong> <br>
                        - <strong>Ricerca sul campo e Architettura</strong>: Invece di basarmi su assunzioni, ho condotto interviste dirette con gli operatori in fabbrica. Questo mi ha permesso di mappare il reale flusso di lavoro (as-is) e progettare un'architettura dell'informazione (to-be) che rispecchiasse fedelmente le loro necessità quotidiane. <br>
                        - <strong>UX per la Compliance Legale</strong>: Il software richiedeva la presenza obbligatoria di certificazioni per ogni lotto di materiale. Per evitare colli di bottiglia nella produzione, ho tradotto questi vincoli in un'interfaccia flessibile, progettando un sistema di caricamento documentale a due livelli (massivo per l'intera colata e granulare per il singolo lotto). <br>
                        - <strong>Progettazione e Handoff</strong>: Ho curato l'intero ciclo di design, dai wireframe a bassa fedeltà fino alla UI finale, assicurandomi che ogni step fosse validato con gli stakeholder.<br>
                        - <strong>Fondamenta scalabili</strong>: Essendo un prodotto destinato a crescere, ho costruito e documentato da zero un Design System. Questo ha garantito coerenza visiva e ha fornito al team di sviluppo componenti pronti e logiche chiare per le iterazioni future.`,
                    bento_full_title: "Questo portfolio",
                    bento_full_desc: "Design e sviluppo creati con il supporto di AI generativa",
                    bento_full_label: "Sperimentale",
                    proj_retail_title: "B2B Order Management System (Settore Retail/Moda)",
                    proj_industrial_title: "Manufacturing Management Software (Settore Industriale)"
                },
                en: {
                    nav_home: "Home",
                    nav_about: "About",
                    nav_projects: "Projects",
                    hero_headline: "Designing interfaces that work.",
                    btn_talk: "Let's Talk",
                    btn_resume_preview: "Resume preview",
                    profile_bio: "I am a UX/UI Designer with a strong aptitude for solving complex problems. With a degree in Digital Cultures and practical training at the Apple Developer Academy, I learned how to bridge user needs with business goals and development constraints. <br><br> In my last year and a half of experience, I led the design of B2B software and SaaS platforms, managing the entire product cycle: from field research to map complex flows (such as legal constraints in the industrial sector), to creating scalable interfaces and Design Systems. <br><br> Working on complex architectures taught me pragmatism: whether it's business management software or a mobile application, my goal is to design logical, usable tools ready for development.",
                    btn_get_cv: "Get CV",
                    btn_view_prototype: "View prototype",
                    timeline_exp_title: "Experience",
                    role_1_strong_1: "Translating complex requirements",
                    role_1_desc_1: "I transform technical data and business requirements into clear and accessible user interfaces.",
                    role_1_strong_2: "Design System Maintenance",
                    role_1_desc_2: "I manage and evolve the UI component library to ensure visual consistency and speed up development.",
                    role_1_strong_3: "Cross-functional Collaboration",
                    role_1_desc_3: "I work closely with developers to ensure the technical feasibility of designs (handoff).",
                    timeline_edu_title: "Education",
                    edu_1_role: "Bachelor in Digital Cultures",
                    edu_1_desc: "Training focused on understanding <strong>digital cultures</strong> and new media. The analysis of online social behaviors becomes the basis for defining <strong>effective User Experience flows</strong>, integrating <strong>sociological research</strong> with best practices in <strong>interface design</strong>.",
                    edu_2_strong_1: "iOS Design Standards",
                    edu_2_desc_1: "Designing native interfaces compliant with Apple Human Interface Guidelines (HIG).",
                    edu_2_strong_2: "Challenge Based Learning",
                    edu_2_desc_2: "Developing solutions based on real user research and rapid iterations (Prototyping).",
                    edu_2_strong_3: "App Publishing",
                    edu_2_desc_3: "Active support in the app lifecycle, from concept to release on TestFlight/App Store.",
                    edu_3_desc: "UX/UI Designer - Development of projects in external partnerships using <strong>Agile methodology (Scrum)</strong>. Focus on designing <strong>accessible</strong> interfaces and user experiences in a structured corporate work context.",
                    section_work: "Work.",
                    btn_resume: "Resume",
                    proj_erp_desc: "Design, design-system, research",
                    proj_redesign_desc: "How I'd redesign a major airline's booking flow.",
                    proj_musee_desc: "Making immersive web experiences accessible.",
                    proj_kumbu_desc: "UX research for a learning app targeting older adults.",
                    erp_modal_1: `
<h3>Overview</h3>
<p>I led the evolution of a simple quantitative monitoring tool into a full SaaS platform for B2B order management. Working closely with the client, I rationalized their requests, mapped the needs of new user types, and designed logical flows from scratch to handle complex sales scenarios.</p>
{{PROTOTYPE_BTN_DESKTOP}}
<div style="margin-bottom: 2rem; width: 100%;"></div>

<h3>My contribution</h3>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Role and architecture definition:</strong> Instead of limiting the tool to monitoring only, I identified and separated the needs of two key user types, structuring dedicated flows.</li>
    <li><strong style="color:var(--color-text);">Inventory logic resolution:</strong> The client needed to track ordered quantities for producers. I translated this need into a new mental model for representatives, introducing a dual-state system (Real vs. Virtual Availability) during the ordering phase to provide a clear overview and avoid overbooking.</li>
    <li><strong style="color:var(--color-text);">From logic to interface:</strong> I designed the entire experience, from a mobile-friendly dashboard for representantes in the field, to high-fidelity wireframes and prototypes.</li>
    <li><strong style="color:var(--color-text);">Technical alignment:</strong> I personally managed the hand-off, providing clear documentation to the development team to ensure business logic (like the dual-state items) was correctly implemented and understood.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Order Entry Phase Redesign: From Table to Task-Oriented UI</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/PRIMA_image_1.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Before">
  <img src="assets/b2b/Dopo_catalogo_view_operativo.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="After">
</div>

<h4>🚨 The Problem: Cognitive Load of the Old Grid</h4>
<p>The legacy interface forced representatives to enter quantities via an undifferentiated table modal. Analyzing the flow, I identified three primary UX issues:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Absence of Hierarchy and Error Risk:</strong> Product variants were presented as a monolithic block of text. In a fast-paced environment, the lack of visual demarcation increased the risk of data-entry errors.</li>
    <li><strong style="color:var(--color-text);">Visual Noise:</strong> Users were forced to re-read redundant information on every row, straining visual scanning.</li>
    <li><strong style="color:var(--color-text);">Loss of Context (Stress Test):</strong> For items with many combinations, the modal generated infinite scrolling, hiding the product image and causing loss of context.</li>
</ul>

<h4>✨ The Solution: Architectural Reorganization</h4>
<p>I completely redesigned the entry layout, moving from a "database" logic to a task-oriented interface optimized for tablet and desktop:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Attribute Grouping (Law of Proximity):</strong> I eliminated data repetition by extracting "Material" and "Color" as group headings, reducing cognitive load by over 60%.</li>
    <li><strong style="color:var(--color-text);">Fixed Context:</strong> The base product, along with the availability indicator and real-time total, remain "sticky" at the top.</li>
    <li><strong style="color:var(--color-text);">Secure Micro-interactions:</strong> I replaced the simple input box with a stepper (- 0 +) for quick adjustments, while maintaining direct typing for bulk entry.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Dual Mode: Showroom vs. Operational</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Creazione_ordine.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Order creation">
  <img src="assets/b2b/Dopo_catalogo_view_card.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="After catalog card">
</div>

<p>Research showed representatives use the catalog in two distinct moments: alone for fast entry, or with the client to show the collection. I introduced a Toggle View:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Showroom Mode (Visual):</strong> Emphasizes product images with large clean cards to inspire the buyer.</li>
    <li><strong style="color:var(--color-text);">Operational Mode (Data):</strong> Compresses the image and expands to reveal the fast-entry list.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Order List Management: From "Blind Database" to Operational Triage</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Ordini_prima.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Orders before">
  <img src="assets/b2b/Ordini.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Orders">
  <img src="assets/b2b/Ordini_4.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Orders 4">
</div>

<h4>🚨 The Problem: Interaction Cost and Lack of Overview</h4>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Zero Overview:</strong> No visibility on real-time performance.</li>
    <li><strong style="color:var(--color-text);">Context Switching:</strong> Editing orders required a full-screen overlay, causing a high Interaction Cost.</li>
</ul>

<h4>✨ The Solution: Dashboarding and Side-Drawer Pattern</h4>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">KPI Injection:</strong> Introduced glanceable widgets (Weekly orders, Revenue).</li>
    <li><strong style="color:var(--color-text);">Side-Drawer Pattern:</strong> Eliminated blocking overlays in favor of a sliding panel for quick triage.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Customer Management: B2B Scalability</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Clienti.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Customers before">
  <img src="assets/b2b/Clienti_new.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Customers new">
</div>

<h4>✨ The Solution: Master-Detail Pattern</h4>
<p>To support data density, I adopted a Master-Detail pattern, allowing representatives to jump between customers while exploring fiscal, logistical, and payment details in a structured way.</p>`,
                    erp_modal_2: ``,
                    erp_modal_B1: "<strong>Overview:</strong> End-to-end research and design for a new B2B management software, created to track material processing and document archiving in the industrial sector. Starting from scratch, I defined the workflow for three different user types, balancing operational efficiency with strict legal compliance constraints.",
                    erp_modal_B2: `<strong>My Contribution:</strong> <br>
                        - <strong>Field Research and Architecture</strong>: Instead of relying on assumptions, I conducted direct interviews with factory operators. This allowed me to map the actual workflow (as-is) and design an information architecture (to-be) that faithfully reflected their daily needs. <br>
                        - <strong>UX for Legal Compliance</strong>: The software required mandatory certifications for each batch of material. To avoid production bottlenecks, I translated these constraints into a flexible interface, designing a two-level document upload system (bulk for the entire heat and granular for single batch). <br>
                        - <strong>Design and Handoff</strong>: I managed the entire design cycle, from low-fidelity wireframes to the final UI, ensuring that every step was validated with stakeholders.<br>
                        - <strong>Scalable Foundations</strong>: As a product destined to grow, I built and documented a Design System from scratch. This ensured visual consistency and provided the development team with ready-made components and clear logic for future iterations.`,
                    bento_full_title: "This portfolio",
                    bento_full_desc: "Design and development created with generative AI support",
                    bento_full_label: "Experimental",
                    proj_retail_title: "B2B Order Management System (Retail/Fashion Sector)",
                    proj_industrial_title: "Manufacturing Management Software (Industrial Sector)"
                },
                es: {
                    nav_home: "Inicio",
                    nav_about: "Sobre mí",
                    nav_projects: "Proyectos",
                    hero_headline: "Diseño interfaces que funcionan.",
                    btn_talk: "Hablemos",
                    btn_resume_preview: "Vista previa CV",
                    profile_bio: "Soy un Diseñador UX/UI con una fuerte aptitud para resolver problemas complejos. Con un título en Culturas Digitales y formación práctica en la Apple Developer Academy, aprendí a conectar las necesidades de los usuarios con los objetivos comerciales y las limitaciones de desarrollo. <br><br> En mi último año y medio de experiencia, lideré el diseño de software B2B y plataformas SaaS, gestionando todo el ciclo del producto: desde la investigación de campo para mapear flujos complejos (como restricciones legales en el sector industrial), hasta la creación de interfaces escalables y Sistemas de Diseño. <br><br> Trabajar en arquitecturas complejas me enseñó pragmatismo: ya sea un software de gestión empresarial o una aplicación móvil, mi objetivo es diseñar herramientas lógicas, utilizables y listas para el desarrollo.",
                    btn_get_cv: "Obtener CV",
                    btn_view_prototype: "Ver prototipo",
                    timeline_exp_title: "Experiencia",
                    role_1_strong_1: "Traducción de requisitos complejos",
                    role_1_desc_1: "Transformo datos técnicos y requisitos comerciales en interfaces de usuario claras y accesibles.",
                    role_1_strong_2: "Mantenimiento del Sistema de Diseño",
                    role_1_desc_2: "Gestiono y evoluciono la biblioteca de componentes UI para garantizar la coherencia visual y acelerar el desarrollo.",
                    role_1_strong_2: "Mantenimiento del Sistema de Diseño",
                    role_1_desc_2: "Gestiono y evoluciono la biblioteca de componentes UI para garantizar la coherencia visual y acelerar el desarrollo.",
                    role_1_strong_3: "Colaboración Multifuncional",
                    role_1_desc_3: "Trabajo en estrecha colaboración con los desarrolladores para garantizar la viabilidad técnica de los diseños (handoff).",
                    timeline_edu_title: "Educación",
                    edu_1_role: "Grado en Culturas Digitales",
                    edu_1_desc: "Formación centrada en la comprensión de las <strong>culturas digitales</strong> y los nuevos medios. El análisis de los comportamientos sociales en red se convierte en la base para definir <strong>flujos de Experiencia de Usuario efectivos</strong>, integrando la <strong>investigación sociológica</strong> con las mejores prácticas de <strong>diseño de interfaces</strong>.",
                    edu_2_strong_1: "Estándares de Diseño iOS",
                    edu_2_desc_1: "Diseño de interfaces nativas conformes con las Apple Human Interface Guidelines (HIG).",
                    edu_2_strong_2: "Aprendizaje Basado en Retos",
                    edu_2_desc_2: "Desarrollo de soluciones basadas en investigación de usuarios reales e iteraciones rápidas (Prototyping).",
                    edu_2_strong_3: "Publicación de Apps",
                    edu_2_desc_3: "Apoyo activo en el ciclo de vida de la app, desde el concepto hasta el lanzamiento en TestFlight/App Store.",
                    edu_3_desc: "Diseñador UX/UI - Desarrollo de proyectos en asociaciones externas mediante <strong>metodología Ágil (Scrum)</strong>. Enfoque en el diseño de interfaces y experiencia de usuario <strong>accesibles</strong> en un contexto laboral corporativo estructurado.",
                    section_work: "Trabajos.",
                    btn_resume: "Resumen",
                    proj_erp_desc: "Diseño, sistema de diseño",
                    proj_redesign_desc: "Cómo rediseñaría el flujo de reservas de una aerolínea.",
                    proj_musee_desc: "Hacer accesibles las experiencias web inmersivas.",
                    proj_kumbu_desc: "Investigación UX para una app de aprendizaje para adultos.",
                    erp_modal_1: `
<h3>Resumen</h3>
<p>Lideré la evolución de una simple herramienta de monitoreo cuantitativo en una plataforma SaaS completa para la gestión de pedidos B2B. Trabajando estrechamente con el cliente, racionalicé sus solicitudes, mapeé las necesidades de nuevos tipos de usuarios y diseñé flujos lógicos desde cero para gestionar escenarios de venta complejos.</p>
{{PROTOTYPE_BTN_DESKTOP}}
<div style="margin-bottom: 2rem; width: 100%;"></div>

<h3>Mi contribución</h3>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Definición de roles y arquitectura:</strong> En lugar de limitar la herramienta solo al monitoreo, identifiqué y separé las necesidades de dos tipos de usuarios clave, estructurando flujos dedicados.</li>
    <li><strong style="color:var(--color-text);">Resolución lógica del inventario:</strong> El cliente necesitaba rastrear cantidades para los fabricantes. Traduje esto en un nuevo modelo mental para los representantes, introduciendo un sistema de doble estado (Disponibilidad Real vs. Virtual) para evitar el overbooking.</li>
    <li><strong style="color:var(--color-text);">De la lógica a la interfaz:</strong> Diseñé toda la experiencia, desde un panel adaptado a móviles para representantes, hasta wireframes y prototipos de alta fidelidad.</li>
    <li><strong style="color:var(--color-text);">Alineación técnica:</strong> Me encargué personalmente del traspaso (hand-off), proporcionando documentación clara al equipo de desarrollo para garantizar que las lógicas de negocio se implementaran correctamente.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Rediseño de Entrada de Pedidos: De Tabla a UI Orientada a Tareas</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/PRIMA_image_1.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Antes">
  <img src="assets/b2b/Dopo_catalogo_view_operativo.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Después">
</div>

<h4>🚨 El Problema: Carga Cognitiva de la Antigua Grilla</h4>
<p>La interfaz heredada obligaba a los representantes a ingresar cantidades mediante un modal de tabla indiferenciada. Identifiqué tres problemas principales:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Ausencia de Jerarquía:</strong> Las variantes se presentaban como un bloque monolítico, aumentando el riesgo de errores.</li>
    <li><strong style="color:var(--color-text);">Ruido Visual:</strong> Información redundante en cada fila que dificultaba el escaneo visual.</li>
    <li><strong style="color:var(--color-text);">Pérdida de Contexto:</strong> El scroll infinito ocultaba la imagen del producto.</li>
</ul>

<h4>✨ La Solución: Reorganización Arquitectónica</h4>
<p>Rediseñé el diseño pasando de una lógica de "base de datos" a una interfaz orientada a tareas:</p>

<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 2rem;">
    <li><strong style="color:var(--color-text);">Agrupación por Atributos:</strong> Eliminé la repetición de datos agrupando por material y color, reduciendo la carga cognitiva en más del 60%.</li>
    <li><strong style="color:var(--color-text);">Contexto Fijo:</strong> El producto y los totales permanecen visibles en la parte superior.</li>
    <li><strong style="color:var(--color-text);">Micro-interacciones Seguras:</strong> Sustituí el input por un selector (- 0 +) para ajustes rápidos.</li>
</ul>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Modo Doble: Showroom vs. Operativo</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Creazione_ordine.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Creación pedido">
  <img src="assets/b2b/Dopo_catalogo_view_card.png" style="flex:1; min-width: 250px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Después catálogo card">
</div>

<p>Introduje un Selector de Vista para equilibrar la inspiración (Showroom) con la eficiencia (Operativo).</p>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Gestión de Lista de Pedidos</h3>

<div style="display:flex; align-items: flex-start; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <img src="assets/b2b/Ordini_prima.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Pedidos antes">
  <img src="assets/b2b/Ordini.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Pedidos">
  <img src="assets/b2b/Ordini_4.png" style="flex:1; min-width: 150px; border-radius: 8px; width: 100%; height: auto; object-fit: contain; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: zoom-in;" onclick="Portfolio.openLightbox(this.src)" alt="Pedidos 4">
</div>

<h4>✨ La Solución: Dashboarding y Side-Drawer</h4>
<p>Transformé la sección en un panel de control activo con KPIs y un patrón de panel lateral para una revisión rápida sin perder el contexto.</p>

<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Gestión de Clientes: Escalabilidad</h3>
<p>Adopté un patrón Maestro-Detalle para manejar la densidad de datos fiscales, logísticos y de pago típica de un SaaS B2B.</p>`,
                    erp_modal_2: ``,
                    erp_modal_B1: "<strong>Visión general:</strong> Investigación y diseño de extremo a extremo para un nuevo software de gestión B2B, creado para rastrear el procesamiento de materiales y el archivo de documentos en el sector industrial. Empezando desde cero, definí el flujo de trabajo para tres tipos diferentes de usuarios, equilibrando la eficiencia operativa con estrictas restricciones de cumplimiento legal.",
                    erp_modal_B2: `<strong>Mi Contribución:</strong> <br>
                        - <strong>Investigación de campo y Arquitectura</strong>: En lugar de basarme en suposiciones, realicé entrevistas directas con operadores de fábrica. Esto me permitió mapear el flujo de trabajo real (as-is) y diseñar una arquitectura de información (to-be) que reflejara fielmente sus necesidades diarias. <br>
                        - <strong>UX para el Cumplimiento Legal</strong>: El software requería certificaciones obligatorias para cada lote de material. Para evitar cuellos de botella en la producción, traduje estas restricciones en una interfaz flexible, diseñando un sistema de carga de documentos de dos niveles (masivo para la fundición completo y granular para lote). <br>
                        - <strong>Diseño y Traspaso</strong>: Gestioné todo el ciclo de diseño, desde wireframes de baja fidelidad hasta la UI final, asegurándome de que cada paso fuera validado con los interesados.<br>
                        - <strong>Cimientos escalables</strong>: Al ser un producto destinado a crecer, construí y documenté un Sistema de Diseño desde cero. Esto garantizó la coherencia visual y proporcionó al equipo de desarrollo componentes listos y lógica clara para futuras iteraciones.`,
                    bento_full_title: "Este portafolio",
                    bento_full_desc: "Diseño y desarrollo creados con el apoyo de IA generativa",
                    bento_full_label: "Experimental",
                    proj_retail_title: "Sistema de Gestión de Pedidos B2B (Sector Retail/Moda)",
                    proj_industrial_title: "Software de Gestión de Manufactura (Sector Industrial)"
                }
            };

            const bioVariations = {
                it: {
                    'original': "Sono un UX/UI Designer che trasforma problemi complessi in interfacce chiare. Con una laurea in Culture Digitali, una formazione pratica all'Apple Developer Academy e un'esperienza diretta nel design di software B2B e piattaforme SaaS, lavoro sull'intero ciclo di prodotto: dalla ricerca sul campo ai Design System scalabili. <br><br> Nel mio ultimo anno e mezzo di esperienza, ho guidato il design di software B2B e piattaforme SaaS, gestendo l'intero ciclo di prodotto: dalla ricerca sul campo per mappare flussi complessi (come i vincoli legali in ambito industriale), fino alla creazione di interfacce scalabili e Design System. <br><br> Lavorare su architetture complesse mi ha insegnato il pragmatismo: che si tratti di un gestionale aziendale o di un'applicazione mobile, il mio obiettivo è progettare strumenti logici, usabili e pronti per lo sviluppo.",
                    'tldr': "UX/UI Designer. Ricerca, sistemi complessi e design che va in produzione."
                },
                en: {
                    'original': "I'm a UX/UI Designer who turns messy problems into clear interfaces. With a degree in Digital Cultures, training at the Apple Developer Academy, and hands-on experience designing B2B software and SaaS platforms, I work across the full product cycle — from field research to scalable design systems. <br><br> In my last year and a half of experience, I led the design of B2B software and SaaS platforms, managing the entire product cycle: from field research to map complex flows (such as legal constraints in the industrial sector), to creating scalable interfaces and Design Systems. <br><br> Working on complex architectures taught me pragmatism: whether it's business management software or a mobile application, my goal is to design logical, usable tools ready for development.",
                    'tldr': "UX/UI Designer. Research, complex systems, and design that ships."
                },
                es: {
                    'original': "Soy un Diseñador UX/UI que convierte problemas complejos en interfaces claras. Con una licenciatura en Culturas Digitales, formación práctica en Apple Developer Academy y experiencia real en software B2B y plataformas SaaS, trabajo en todo el ciclo de producto: desde la investigación de campo hasta los sistemas de diseño escalables. <br><br> En mi último año y medio de experiencia, lideré el diseño de software B2B y plataformas SaaS, gestionando todo el ciclo del producto: desde la investigación de campo para mapear flujos complejos (como restricciones legales en el sector industrial), hasta la creación de interfaces escalables y Sistemas de Diseño. <br><br> Trabajar en arquitecturas complejas me enseñó pragmatismo: ya sea un software de gestión empresarial o una aplicación móvil, mi objetivo es diseñar herramientas lógicas, utilizables y listas para el desarrollo.",
                    'tldr': "Diseñador UX/UI. Investigación, sistemas complejos y diseño que se publica."
                }
            };
            const projectInsights = {
                it: {
                    'ERP': "Tech: React, GraphQL. Focus: Dashboarding per big data e riduzione del carico cognitivo in workflow complessi.",
                    'Redesign': "Tech: Vue.js, Tailwind. Focus: Ottimizzazione IA e restyling della gerarchia visiva.",
                    'Musée': "Tech: WebGL, GSAP. Focus: Accessibilità (WCAG) in contesti immersivi e navigazione non lineare.",
                    'Kumbu': "Tech: Swift, UIKit. Focus: UX research per target demografici specifici e pattern di navigazione semplificati."
                },
                en: {
                    'ERP': "Tech: React, GraphQL. Focus: Big data dashboarding and cognitive load reduction in complex workflows.",
                    'Redesign': "Tech: Vue.js, Tailwind. Focus: AI optimization and visual hierarchy restyling.",
                    'Musée': "Tech: WebGL, GSAP. Focus: Accessibility (WCAG) in immersive contexts and non-linear navigation.",
                    'Kumbu': "Tech: Swift, UIKit. Focus: UX research for specific demographics and simplified navigation patterns."
                },
                es: {
                    'ERP': "Tech: React, GraphQL. Enfoque: Tableros de big data y reducción de carga cognitiva en flujos de trabajo complejos.",
                    'Redesign': "Tech: Vue.js, Tailwind. Enfoque: Optimización de IA y rediseño de jerarquía visual.",
                    'Musée': "Tech: WebGL, GSAP. Enfoque: Accesibilidad (WCAG) en contextos inmersivos y navegación no lineal.",
                    'Kumbu': "Tech: Swift, UIKit. Enfoque: Investigación UX para demografía específica y patrones de navegación simplificados."
                }
            };

                  let ui = {};
            let currentLang = 'it';

            const initUI = () => {
                ui = {
                    sphereWrapper: document.getElementById('sphere-wrapper'),
                    sections: document.querySelectorAll('section'),
                    navLinks: document.querySelectorAll('.navbar__link'),
                    bioText: document.getElementById('bio-text'),
                    aiBtns: document.querySelectorAll('.ai-btn'),
                    themeToggle: document.getElementById('theme-toggle'),
                    sunIcon: document.querySelector('.theme-icon.sun'),
                    moonIcon: document.querySelector('.theme-icon.moon'),
                    cvModal: document.getElementById('cv-modal'),
                    langBtns: document.querySelectorAll('.lang-btn'),
                    langDropdown: document.getElementById('lang-dropdown'),
                    currentLangLabel: document.getElementById('current-lang-label'),
                    hamburger: document.querySelector('.hamburger'),
                    mobileMenu: document.getElementById('mobile-menu'),
                    headline: document.querySelector('.headline')
                };
            };

            const setTheme = (theme) => {
                document.documentElement.setAttribute('data-theme', theme);
                if (!ui.sunIcon || !ui.moonIcon) return;
                if (theme === 'dark') { ui.sunIcon.style.display = 'block'; ui.moonIcon.style.display = 'none'; }
                else { ui.sunIcon.style.display = 'none'; ui.moonIcon.style.display = 'block'; }
            };

            const initTheme = () => {
                const savedTheme = localStorage.getItem('theme');
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

                const getPreferredTheme = () => {
                    if (savedTheme) { return savedTheme; }
                    const sysTheme = mediaQuery.matches ? 'dark' : 'light';
                    return sysTheme;
                };

                setTheme(getPreferredTheme());

                mediaQuery.addEventListener('change', (e) => {
                    if (!localStorage.getItem('theme')) {
                        const newSysTheme = e.matches ? 'dark' : 'light';
                        setTheme(newSysTheme);
                    }
                });

                if (ui.themeToggle) {
                    ui.themeToggle.addEventListener('click', () => {
                        const current = document.documentElement.getAttribute('data-theme');
                        const newTheme = current === 'dark' ? 'light' : 'dark';
                        setTheme(newTheme);
                        localStorage.setItem('theme', newTheme);
                    });
                }
            };

            const toggleLangMenu = () => { if (ui.langDropdown) { ui.langDropdown.classList.toggle('active'); } };

            const selectLang = (lang) => {
                setLanguage(lang);
                if (ui.langDropdown) { ui.langDropdown.classList.remove('active'); }
            };

            const toggleMobileMenu = () => {
                if(ui.hamburger && ui.mobileMenu) {
                    ui.hamburger.classList.toggle('active');
                    ui.mobileMenu.classList.toggle('active');
                    if(ui.mobileMenu.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                }
            };

            document.addEventListener('click', (e) => {
                if (ui.langDropdown && !ui.langDropdown.contains(e.target)) {
                    ui.langDropdown.classList.remove('active');
                }
            });

            const setLanguage = (lang) => {
                currentLang = lang;
                if (ui.currentLangLabel) {
                    const flags = { it: '🇮🇹 IT', en: '🇬🇧 EN', es: '🇪🇸 ES' };
                    ui.currentLangLabel.textContent = flags[lang];
                }

                const elements = document.querySelectorAll('[data-i18n]');
                elements.forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang][key]) {
                        if (translations[lang][key].includes('<')) {
                            el.innerHTML = translations[lang][key];
                        } else {
                            el.textContent = translations[lang][key];
                        }
                    }
                });

                if (ui.bioText) {
                    // ui.bioText.textContent = translations[lang]['profile_bio']; // Removed to avoid overwriting innerHTML set by data-i18n loop
                    if (ui.aiBtns) {
                        ui.aiBtns.forEach(btn => btn.classList.remove('active'));
                        if(ui.aiBtns[0]) ui.aiBtns[0].classList.add('active');
                    }
                }

                // Update Project Insights (Bento Grid)
                const currentInsights = projectInsights[lang];
                document.querySelectorAll('.bento-item').forEach(item => {
                    const projectKey = item.getAttribute('data-project');
                    const insight = currentInsights[projectKey];
                    // logic to update insight if needed...
                    // Actually the loop below handles the expansion logic.
                });

                // Re-render open insights if any
                const openInsights = document.querySelectorAll('.bento__ai-result');
                openInsights.forEach(el => el.remove());
                const expandBtns = document.querySelectorAll('.expand-btn');
                expandBtns.forEach(btn => btn.textContent = translations[lang]['btn_resume']);

                if (ui.headline) {
                    initExplodingTitle();
                }
            };

            const handleTitleExplosion = () => {
                if (ui.headline) {
                    if (window.scrollY > 15) {
                        ui.headline.classList.add('exploded');
                    } else {
                        ui.headline.classList.remove('exploded');
                    }
                }
            };

            const initExplodingTitle = () => {
                const title = ui.headline;
                if (!title) return;

                const text = translations[currentLang]['hero_headline'] || title.textContent;
                
                title.textContent = '';
                title.classList.add('explodable-text');
                title.classList.remove('exploded');

                text.split(' ').forEach((word, wIdx) => {
                    if (wIdx > 0) {
                        const spaceText = document.createTextNode(' ');
                        title.appendChild(spaceText);
                    }

                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word';

                    word.split('').forEach((char) => {
                        const span = document.createElement('span');
                        span.className = 'char';
                        span.textContent = char;
                        
                        // Direzioni ed esplosione casuali
                        const randomX = (Math.random() - 0.5) * 800; // -400px to 400px
                        const randomY = (Math.random() - 0.5) * 800 - 150; // prevalenza verso l'alto
                        const randomZ = Math.random() * 600 - 300; 
                        const randomRotateX = (Math.random() - 0.5) * 720; 
                        const randomRotateY = (Math.random() - 0.5) * 720; 
                        const randomRotateZ = (Math.random() - 0.5) * 720; 
                        
                        span.style.setProperty('--x', randomX + 'px');
                        span.style.setProperty('--y', randomY + 'px');
                        span.style.setProperty('--z', randomZ + 'px');
                        span.style.setProperty('--rx', randomRotateX + 'deg');
                        span.style.setProperty('--ry', randomRotateY + 'deg');
                        span.style.setProperty('--rz', randomRotateZ + 'deg');

                        wordSpan.appendChild(span);
                    });
                    
                    title.appendChild(wordSpan);
                });

                window.removeEventListener('scroll', handleTitleExplosion);
                window.addEventListener('scroll', handleTitleExplosion, { passive: true });
                handleTitleExplosion();
            };

            const remixBio = async (style) => {
                if (!ui.aiBtns) return;

                ui.aiBtns.forEach(btn => btn.classList.remove('active'));
                const clickedBtn = Array.from(ui.aiBtns).find(btn => btn.innerText.toLowerCase().includes(style.toLowerCase()) || btn.getAttribute('onclick')?.includes(style));
                if(clickedBtn) clickedBtn.classList.add('active');
                else event.target.classList.add('active');

                ui.bioText.classList.add('loading');
                await new Promise(r => setTimeout(r, 600));

                let newBio;
                if (style === 'original') {
                    newBio = translations[currentLang]['profile_bio'];
                } else {
                    newBio = bioVariations[currentLang][style] || translations[currentLang]['profile_bio'];
                }

                ui.bioText.classList.remove('loading');
                ui.bioText.style.opacity = 0;
                setTimeout(() => {
                    ui.bioText.innerHTML = newBio;
                    ui.bioText.style.opacity = 1;
                }, 300);
            };

            const expandConcept = async (cardElement, title, desc) => {
                const existingResult = cardElement.querySelector('.bento__ai-result');
                const btn = cardElement.querySelector('.expand-btn');

                if (existingResult) {
                    existingResult.remove();
                    btn.textContent = translations[currentLang]['btn_resume'];
                    return;
                }

                const contentDiv = cardElement.querySelector('.bento__content');
                btn.textContent = "Loading...";
                await new Promise(r => setTimeout(r, 800));

                let insight = "Insight not available.";
                for (const key in projectInsights[currentLang]) {
                    if (title.includes(key)) {
                        insight = projectInsights[currentLang][key];
                        break;
                    }
                }

                const resultEl = document.createElement('div');
                resultEl.className = 'bento__ai-result';
                resultEl.innerHTML = `<strong>Insight:</strong> ${insight}`;
                contentDiv.appendChild(resultEl);
                btn.textContent = "Close";
            };

            const handleBackgroundState = (sectionId) => {
                const states = {
                    'landing':  { y: '0%', opacity: 0.15, scale: 1 },
                    'about':    { y: '-30%',  opacity: 0.20, scale: 1.2 },
                    'projects': { y: '20%',  opacity: 0.15, scale: 1.1 }
                };
                const state = states[sectionId] || states.landing;
                if (ui.sphereWrapper) {
                    ui.sphereWrapper.style.transform = `translate(-50%, calc(-50% + ${state.y})) scale(${state.scale})`;
                }
            };

            const initScrollObserver = () => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) handleBackgroundState(entry.target.id);
                    });
                }, { threshold: 0.25 });
                ui.sections.forEach(section => observer.observe(section));
            };

                     /* SENIOR FIX: Nuovo observer dedicato esclusivamente al Bento Grid per i device Touch */
            const initBentoMobileObserver = () => {
                // Attiviamo la logica guidata dallo scroll per schermi Tablet e Mobile
                if (window.innerWidth <= 1024) {
                    const bentoCards = document.querySelectorAll('.bento__card');
                    const bentoObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('is-in-view');
                            } else {
                                entry.target.classList.remove('is-in-view');
                            }
                        });
                    }, {
                        // Area di attivazione più permissiva: centro del 50% dello schermo
                        rootMargin: "-25% 0px -25% 0px",
                        threshold: 0.15
                    });

                    bentoCards.forEach(card => bentoObserver.observe(card));
                }
            };

            const initNavActions = () => {
                ui.navLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                    });
                });
            };

            const openLightbox = (imgSrc) => {
                let lightbox = document.getElementById('portfolio-lightbox');
                if (!lightbox) {
                    lightbox = document.createElement('div');
                    lightbox.id = 'portfolio-lightbox';
                    lightbox.style.cssText = `
                        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                        background: rgba(0,0,0,0.85); z-index: 99999;
                        display: flex; justify-content: center; align-items: center;
                        opacity: 0; transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: zoom-out;
                        padding: 2rem; box-sizing: border-box; backdrop-filter: blur(5px);
                    `;
                    const img = document.createElement('img');
                    img.id = 'portfolio-lightbox-img';
                    img.style.cssText = `
                        max-width: 100%; max-height: 100%; border-radius: 8px;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                        transform: translateY(30px) scale(0.95); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        user-select: none; pointer-events: none; -webkit-user-drag: none;
                        object-fit: contain;
                    `;
                    img.oncontextmenu = () => false;
                    img.draggable = false;

                    lightbox.appendChild(img);
                    document.body.appendChild(lightbox);

                    lightbox.onclick = () => {
                        lightbox.style.opacity = '0';
                        img.style.transform = 'translateY(30px) scale(0.95)';
                        setTimeout(() => lightbox.style.display = 'none', 300);
                    };
                }

                const img = document.getElementById('portfolio-lightbox-img');
                img.src = imgSrc;
                lightbox.style.display = 'flex';

                // Trigger reflow
                void lightbox.offsetWidth;

                lightbox.style.opacity = '1';
                img.style.transform = 'translateY(0) scale(1)';
            };

            const initAntiScreenshot = () => {
                const blurScreen = () => {
                    document.body.style.filter = 'blur(20px) grayscale(100%)';
                    setTimeout(() => document.body.style.filter = 'none', 1500);
                };

                // Protezione contro Snipping Tool Windows / Mac (ruba il focus visivo)
                window.addEventListener('blur', () => {
                    const modal = document.getElementById('project-modal');
                    const lightbox = document.getElementById('portfolio-lightbox');

                    // Applica l'offuscamento totale (body sparito) solo se c'è materiale sensibile esposto
                    if ((modal && modal.classList.contains('active')) || (lightbox && lightbox.style.display === 'flex')) {
                        document.body.style.opacity = '0';
                    }
                });

                window.addEventListener('focus', () => {
                    document.body.style.opacity = '1';
                });

                document.addEventListener('keyup', (e) => {
                    if (e.key === 'PrintScreen') {
                        blurScreen();
                        navigator.clipboard.writeText("Questa immagine è protetta da NDA.");
                    }
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Meta' || e.key === 'OS') {
                        blurScreen();
                    }
                    if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's')) {
                        blurScreen();
                    }
                    if ((e.metaKey && e.shiftKey) && (e.key === 's' || e.key === '3' || e.key === '4' || e.key === '5')) {
                        blurScreen();
                    }
                });

                document.addEventListener('contextmenu', (e) => {
                    if (e.target.tagName === 'IMG') {
                        e.preventDefault();
                    }
                });
            };

            const drawWipCanvas = (canvasId) => {
                const canvas = document.getElementById(canvasId);
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                const dpr = window.devicePixelRatio || 1;
                const rect = canvas.getBoundingClientRect();
                
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);

                const w = rect.width;
                const h = rect.height;

                // Design System Logic
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const bgColor = isDark ? '#1a1a1a' : '#f5f5f5';
                const accentColor = '#5900ff';
                const textColor = isDark ? '#ffffff' : '#111111';

                // Background
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, w, h);

                // Subtle Grid/Pattern
                ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
                ctx.lineWidth = 1;
                for(let x = 0; x < w; x += 30) {
                    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
                }
                for(let y = 0; y < h; y += 30) {
                    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
                }

                // Center Icon (Construction/WIP)
                const cx = w / 2;
                const cy = h / 2 - 15;
                
                ctx.strokeStyle = accentColor;
                ctx.lineWidth = 2.5;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';

                // Abstract Triangle for WIP
                ctx.beginPath();
                ctx.moveTo(cx, cy - 25);
                ctx.lineTo(cx + 30, cy + 20);
                ctx.lineTo(cx - 30, cy + 20);
                ctx.closePath();
                ctx.stroke();

                ctx.fillStyle = accentColor;
                ctx.beginPath();
                ctx.arc(cx, cy + 5, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillRect(cx - 1, cy - 10, 2, 10);

                // Label
                ctx.fillStyle = textColor;
                ctx.font = 'bold 16px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Work in progress', cx, cy + 55);

                ctx.font = '500 11px Inter, sans-serif';
                ctx.fillStyle = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
                ctx.fillText('INDUSTRIAL DESIGN MODULE', cx, cy + 75);
            };

            const openProjectModal = (projectId) => {
                const data = projectsData[projectId];
                if (!data) return;

                const injectionPoint = document.getElementById('project-modal-injection-point');
                if (!injectionPoint) return;

                let html = '';
                
                if (data.useCanvas) {
                    html += `<canvas id="project-canvas-hero" class="project-modal-hero" style="background: var(--color-surface); display: block;"></canvas>`;
                } else {
                    html += `<img src="${data.images[0]}" alt="${data.title}" class="project-modal-hero">`;
                }

                html += `
                    <h2 class="project-modal-title">${data.title}</h2>
                    <span class="project-modal-meta">${data.meta}</span>
                `;

                data.contentKeys.forEach((key, index) => {
                    let text = translations[currentLang][key] || "Translation missing";
                    
                    if (data.prototypeLink && text.includes('{{PROTOTYPE_BTN_DESKTOP}}')) {
                        const btnLabel = translations[currentLang]['btn_view_prototype'] || "View Prototype";
                        const desktopBtnStr = `<div class="sticky-desktop-wrapper"><button class="btn-cv-full sticky-desktop-btn" onclick="window.location.href='${data.prototypeLink}'">${btnLabel}</button></div>`;
                        text = text.replace('{{PROTOTYPE_BTN_DESKTOP}}', desktopBtnStr);
                    }
                    html += `<div class="project-modal-text">${text}</div>`;

                    if (data.useCanvas) {
                         html += `<canvas id="project-canvas-detail-${index}" class="project-modal-hero" style="height: 200px; background: var(--color-surface); display: block;"></canvas>`;
                    } else if (data.images[index + 1]) {
                        html += `<img src="${data.images[index + 1]}" alt="Project detail" class="project-modal-hero">`;
                    }
                });

                if (data.prototypeLink) {
                    const btnLabel = translations[currentLang]['btn_view_prototype'] || "View Prototype";
                    html += `<div style="margin-top: 3rem; text-align: center;" class="mobile-only-btn">
                                 <button class="btn-cv-full" onclick="window.location.href='${data.prototypeLink}'">${btnLabel}</button>
                             </div>`;
                }

                injectionPoint.innerHTML = html;
                toggleModal('project-modal', true);

                if (data.useCanvas) {
                    // Give a small delay for DOM and sizing
                    setTimeout(() => {
                        drawWipCanvas('project-canvas-hero');
                        data.contentKeys.forEach((_, index) => {
                             drawWipCanvas(`project-canvas-detail-${index}`);
                        });
                    }, 150);
                }
            };

            const toggleModal = (modalId, isOpen = true) => {
                const modal = document.getElementById(modalId);
                if (!modal) return;

                if (isOpen) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';

                    if (modalId === 'cv-modal') {
                        const iframe = modal.querySelector('iframe');
                        if (iframe && !iframe.getAttribute('src')) {
                            setTimeout(() => { iframe.setAttribute('src', iframe.getAttribute('data-src')); }, 50);
                        }
                    }
                } else {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';

                    if (modalId === 'cv-modal') {
                        const iframe = modal.querySelector('iframe');
                        if (iframe) { iframe.setAttribute('src', ''); }
                    }
                }
            };

            const openLink = (url) => { window.open(url, '_blank'); };

            return {
                init: () => {
                    try {
                        console.log("Initializing Portfolio...");
                        initUI();
                        initTheme();
                        initScrollObserver();
                        initBentoMobileObserver(); /* FIX: Inizializza l'observer del Bento */
                        initNavActions();
                        initAntiScreenshot();
                        setLanguage('it');
                    } catch (error) {
                        console.error("Initialization error:", error);
                    } finally {
                        setTimeout(() => document.body.classList.add('is-loaded'), 50);
                    }
                },
                remixBio, expandConcept, toggleModal, openProjectModal, openLink, openLightbox,
                setLanguage, toggleLangMenu, selectLang, toggleMobileMenu
            };
        })();

        window.addEventListener('DOMContentLoaded', Portfolio.init);
