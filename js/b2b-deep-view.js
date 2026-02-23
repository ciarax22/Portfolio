        const Portfolio = (() => {
            let currentLang = 'it';
            let chartInstance = null;

            // --- DATA ---
            const translations = {
                it: {
                    tag_hero: "B2B SaaS / Fashion & Retail",
                    hero_title: "Riprogettazione Piattaforma Gestione Ordini",
                    hero_subtitle: "Evoluzione di un semplice tool di monitoraggio in una piattaforma SaaS completa. Dalla mappatura dei bisogni utente alla progettazione di flussi complessi per scenari di vendita B2B.",
                    tag_arch: "Architettura",
                    sec1_title: "Overview & Contributo",
                    sec1_desc: "Ho guidato l'evoluzione di un semplice tool di monitoraggio quantitativo, trasformandolo in una piattaforma SaaS completa. Lavorando a stretto contatto con gli stakeholder, ho razionalizzato le loro richieste e progettato da zero flussi logici per gestire scenari complessi.",
                    info1_title: "Architettura & Ruoli",
                    info1_desc: "Separazione flussi per Rappresentanti e Produttori. Strutturazione anagrafica clienti.",
                    info2_title: "Logica Inventario",
                    info2_desc: "Introduzione del modello a doppio stato: Disponibilità Reale vs Virtuale per evitare overbooking.",
                    info3_title: "Allineamento Tecnico",
                    info3_desc: "Hand-off curato e documentazione delle logiche di business per il team di sviluppo.",
                    chart_title: "Impatto del Redesign",
                    sec2_title: "Dalla Tabella al Task-Oriented UI",
                    sec2_desc: "L'interfaccia legacy obbligava i rappresentanti a inserire le quantità tramite una modale a tabella indifferenziata (Carico cognitivo alto, Rischio errori). Ho riprogettato il layout focalizzandolo sul task.",
                    btn_legacy: "Vista Legacy", btn_new: "Nuova UI",
                    prob_legacy: "Problema: Rumore Visivo & Errori",
                    lbl_real: "Reale:", lbl_virtual: "Virtuale:", lbl_total: "Totale Riga", lbl_mat: "Materiale:", col_black: "Nero",
                    stat1_title: "Gerarchia Visiva", stat1_desc: "Raggruppamento attributi riduce il carico cognitivo del 60%.",
                    stat2_title: "Contesto Fisso", stat2_desc: "Header 'sticky' per non perdere mai il riferimento economico.",
                    stat3_title: "Micro-interazioni", stat3_desc: "Stepper per piccoli aggiustamenti sicuri su touch.",
                    sec3_title: "Modalità Doppia",
                    sec3_desc: "I rappresentanti usano il catalogo per <strong>ispirare</strong> (con il cliente) o per <strong>inserire</strong> (da soli). Ho creato un toggle per cambiare UI istantaneamente, rispettando le loro abitudini d'uso.",
                    lbl_try: "Prova il Toggle:", btn_op: "Operativa", btn_add: "+ Ordina", btn_ins: "Inserisci",
                    sec4_title: "Da 'Database Cieco' a Triage Operativo",
                    sec4_desc: "Il pattern <strong>Side-Drawer</strong> permette di revisionare ordini multipli senza perdere il contesto della lista.",
                    th_date: "Data", th_client: "Cliente", th_tot: "Importo", draw_title: "Dettagli Ordine",
                    btn_print: "Stampa PDF", btn_edit: "Modifica", lbl_items: "Articoli (Anteprima)", item_1: "Scarpa Tacco Nero", lbl_pairs: "10 Paia",
                    sec5_title: "Anagrafica Clienti: Master-Detail",
                    sec5_desc: "Il pattern Master-Detail gestisce l'alta densità di dati nel B2B senza far perdere il contesto di navigazione all'utente.",
                    search_plc: "Cerca clienti...", lbl_card: "Scheda Anagrafica", block_fiscal: "DATI FISCALI E CONTATTI",
                    lbl_company: "Ragione Sociale", lbl_phone: "Telefono", block_pay: "PAGAMENTI & LOGISTICA",
                    lbl_legal: "Sede Legale", lbl_bill: "Indirizzo Fatturazione", lbl_method: "Metodo",
                    status_prod: "In Produzione", status_del: "Consegnato",
                    mob_placeholder_title: "Accedi da Desktop",
                    mob_placeholder_desc: "Per un'esperienza interattiva al 100%, visualizza questo prototipo su uno schermo desktop.",
                    mob_placeholder_chart: "Contenuto interattivo ottimizzato per Desktop."
                },
                en: {
                    tag_hero: "B2B SaaS / Fashion & Retail",
                    hero_title: "Redesigning a B2B Order Platform",
                    hero_subtitle: "Evolution of a simple tracking tool into a comprehensive SaaS platform. From mapping user needs to designing complex flows for B2B sales scenarios.",
                    tag_arch: "Architecture",
                    sec1_title: "Overview & My Role",
                    sec1_desc: "I led the evolution of a basic quantitative monitoring tool, transforming it into a full-fledged SaaS platform. Working closely with stakeholders, I rationalized requests and designed logical flows from scratch.",
                    info1_title: "Architecture & Roles",
                    info1_desc: "Separated flows for Sales Reps and Manufacturers. Structured customer registry.",
                    info2_title: "Inventory Logic",
                    info2_desc: "Introduced a dual-state model: Real vs Virtual Availability to prevent overbooking.",
                    info3_title: "Technical Hand-off",
                    info3_desc: "Detailed hand-off and documentation of business logic for the development team.",
                    chart_title: "Redesign Impact",
                    sec2_title: "From Data Table to Task-Oriented UI",
                    sec2_desc: "The legacy interface forced reps to input quantities through an undifferentiated modal table (High cognitive load, Error risk). I redesigned the layout to be task-oriented.",
                    btn_legacy: "Legacy View", btn_new: "New UI",
                    prob_legacy: "Problem: Visual Noise & Errors",
                    lbl_real: "Real:", lbl_virtual: "Virtual:", lbl_total: "Row Total", lbl_mat: "Material:", col_black: "Black",
                    stat1_title: "Visual Hierarchy", stat1_desc: "Grouping attributes reduces cognitive load by 60%.",
                    stat2_title: "Fixed Context", stat2_desc: "Sticky header to never lose economic reference.",
                    stat3_title: "Micro-interactions", stat3_desc: "Stepper for safe, small adjustments on touch.",
                    sec3_title: "Dual Mode",
                    sec3_desc: "Reps use the catalog to <strong>inspire</strong> (with clients) or to <strong>input</strong> (alone). I created a toggle to instantly change the UI.",
                    lbl_try: "Try Toggle:", btn_op: "Operational", btn_add: "+ Order", btn_ins: "Add",
                    sec4_title: "From 'Blind DB' to Operational Triage",
                    sec4_desc: "The <strong>Side-Drawer</strong> pattern allows reviewing multiple orders without losing list context.",
                    th_date: "Date", th_client: "Client", th_tot: "Total", draw_title: "Order Details",
                    btn_print: "Print PDF", btn_edit: "Edit", lbl_items: "Items (Preview)", item_1: "Black Heel Shoe", lbl_pairs: "10 Pairs",
                    sec5_title: "Customer Registry: Master-Detail",
                    sec5_desc: "The Master-Detail pattern manages high data density in B2B without losing navigation context.",
                    search_plc: "Search clients...", lbl_card: "Customer Card", block_fiscal: "FISCAL DATA & CONTACTS",
                    lbl_company: "Company Name", lbl_phone: "Phone", block_pay: "PAYMENTS & LOGISTICS",
                    lbl_legal: "Legal Seat", lbl_bill: "Billing Address", lbl_method: "Method",
                    status_prod: "In Production", status_del: "Delivered",
                    mob_placeholder_title: "Access from Desktop",
                    mob_placeholder_desc: "For a 100% interactive experience, view this prototype on a desktop screen.",
                    mob_placeholder_chart: "Interactive content optimized for Desktop."
                }
            };

            const chartLabels = {
                it: { radar: ['Velocità', 'No Errori', 'Leggibilità', 'Scalabilità', 'Soddisfazione'], ds1: 'Nuova Piattaforma', ds2: 'Sistema Legacy' },
                en: { radar: ['Speed', 'No Errors', 'Readability', 'Scalability', 'Satisfaction'], ds1: 'New Platform', ds2: 'Legacy System' }
            };

            const ordersData = [
                { id: "#ORD-001", date: "2026-02-20", client: "Forniture Scarpe SAS", total: "4.500€", statusKey: "status_prod", color: "warning" },
                { id: "#ORD-002", date: "2026-02-19", client: "Boutique Roma", total: "1.200€", statusKey: "status_del", color: "success" },
                { id: "#ORD-003", date: "2026-02-18", client: "Zalando EU", total: "12.300€", statusKey: "status_prod", color: "warning" },
                { id: "#ORD-004", date: "2026-02-15", client: "Foot Locker IT", total: "8.900€", statusKey: "status_del", color: "success" },
                { id: "#ORD-005", date: "2026-02-10", client: "AW Lab IT", total: "5.100€", statusKey: "status_del", color: "success" },
            ];

            const cData = { name: "FORNITURE SCARPE SAS", city: "20100 Milano (MI)·Via monaco, 24", vat: "98568-4277", email: "Charlie_Halvorson@Gmail.Com", phone: "(958) 765-5168 X1142", legal: "Chief Markets Assistant", bill: "41558 Schaefer Extension", prov: "NA", city_full: "Torre Del Greco", method: "Ri.Ba. 30/60 GG Fine Mese", iban: "978-0-07-758642-3", iva: "22%" };
            const clientsData = [cData, cData, cData, cData, cData, cData];

            // --- THEME LOGIC ---
            const initTheme = () => {
                const btn = document.getElementById('theme-toggle');
                const sun = document.querySelector('.theme-icon.sun');
                const moon = document.querySelector('.theme-icon.moon');

                const setTheme = (theme) => {
                    document.documentElement.setAttribute('data-theme', theme);
                    if (theme === 'dark') { sun.style.display = 'block'; moon.style.display = 'none'; }
                    else { sun.style.display = 'none'; moon.style.display = 'block'; }
                    updateChartColors(theme);
                };

                // Default check
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(isDark ? 'dark' : 'light');

                btn.addEventListener('click', () => {
                    const current = document.documentElement.getAttribute('data-theme');
                    setTheme(current === 'dark' ? 'light' : 'dark');
                });
            };

            // --- TRANSLATION LOGIC ---
            const setLanguage = (lang) => {
                if (!translations[lang]) return;
                currentLang = lang;

                // Update buttons UI
                document.getElementById('btn-it').classList.toggle('active', lang === 'it');
                document.getElementById('btn-en').classList.toggle('active', lang === 'en');

                // Update text
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang][key]) el.innerHTML = translations[lang][key];
                });
                document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                    const key = el.getAttribute('data-i18n-placeholder');
                    if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
                });

                // Update dynamic components
                if (chartInstance) updateChartLang();
                renderCatalog(document.getElementById('catalog-content').classList.contains('catalog-mode-showroom') ? 'showroom' : 'operative');
                renderOrders();
            };

            // --- CHART LOGIC ---
            const initChart = () => {
                const ctx = document.getElementById('impactRadarChart').getContext('2d');
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const gridColor = isDark ? '#333333' : '#f3f4f6';
                const textColor = isDark ? '#888888' : '#4b5563';

                chartInstance = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: chartLabels[currentLang].radar,
                        datasets: [{
                            label: chartLabels[currentLang].ds1,
                            data: [90, 95, 90, 100, 95],
                            fill: true, backgroundColor: 'rgba(89, 0, 255, 0.2)', borderColor: '#5900ff', pointBackgroundColor: '#5900ff',
                        }, {
                            label: chartLabels[currentLang].ds2,
                            data: [30, 40, 30, 20, 40],
                            fill: true, backgroundColor: 'rgba(136, 136, 136, 0.2)', borderColor: '#888888', pointBackgroundColor: '#888888',
                        }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false, elements: { line: { borderWidth: 2 } },
                        scales: { r: { angleLines: { color: gridColor }, grid: { color: gridColor }, pointLabels: { color: textColor, font: { family: 'Inter' } }, ticks: { display: false } } },
                        plugins: { legend: { position: 'bottom', labels: { color: textColor, font: { family: 'Inter' } } } }
                    }
                });
            };

            const updateChartColors = (theme) => {
                if (!chartInstance) return;
                const gridColor = theme === 'dark' ? '#333333' : '#f3f4f6';
                const textColor = theme === 'dark' ? '#888888' : '#4b5563';
                chartInstance.options.scales.r.angleLines.color = gridColor;
                chartInstance.options.scales.r.grid.color = gridColor;
                chartInstance.options.scales.r.pointLabels.color = textColor;
                chartInstance.options.plugins.legend.labels.color = textColor;
                chartInstance.update();
            };

            const updateChartLang = () => {
                chartInstance.data.labels = chartLabels[currentLang].radar;
                chartInstance.data.datasets[0].label = chartLabels[currentLang].ds1;
                chartInstance.data.datasets[1].label = chartLabels[currentLang].ds2;
                chartInstance.update();
            };

            // --- UI LOGIC ---
            const switchEntryView = (view) => {
                const leg = document.getElementById('view-legacy');
                const neu = document.getElementById('view-new');
                const bLeg = document.getElementById('btn-view-legacy');
                const bNeu = document.getElementById('btn-view-new');

                if (view === 'legacy') {
                    leg.classList.remove('hidden'); neu.classList.add('hidden');
                    bLeg.className = "btn btn--primary"; bNeu.className = "btn btn--outline";
                } else {
                    leg.classList.add('hidden'); neu.classList.remove('hidden');
                    bNeu.className = "btn btn--primary"; bLeg.className = "btn btn--outline";
                }
            };

            const updateQty = (btn, change) => {
                const input = btn.parentElement.querySelector('input');
                input.value = Math.max(0, parseInt(input.value) + change);
            };

            const setMode = (mode) => {
                const bS = document.getElementById('btn-mode-showroom');
                const bO = document.getElementById('btn-mode-operative');
                if (mode === 'showroom') { bS.className = "btn btn--primary"; bS.style.flex = "1"; bO.className = "btn btn--ghost"; bO.style.flex = "1"; }
                else { bO.className = "btn btn--primary"; bO.style.flex = "1"; bS.className = "btn btn--ghost"; bS.style.flex = "1"; }
                renderCatalog(mode);
            };

            const renderCatalog = (mode) => {
                const box = document.getElementById('catalog-content');
                box.className = mode === 'showroom' ? 'catalog-mode-showroom' : 'catalog-mode-operative';

                const pList = [
                    { n: "MB-1997-B", p: "00,00€", img: "linear-gradient(45deg, #222, #444)", brand: "Chanel" }, 
                    { n: "SNK-202-A", p: "00,00€", img: "linear-gradient(45deg, #444, #666)", brand: "Chanel" }
                ];

                let html = '';
                pList.forEach(p => {
                    if (mode === 'showroom') {
                        html += `
                        <div class="product-card showroom" style="padding: 0; display: flex; flex-direction: column;">
                            <div class="product-img" style="background:${p.img}; height: 160px; border-radius: 8px 8px 0 0; margin: 0;"></div>
                            <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                                    <p style="font-size: 0.8rem; font-weight: 800; margin:0; color: var(--color-text);">${p.n}</p>
                                    <strong style="font-size: 0.8rem; color: var(--color-text);">${p.p}</strong>
                                </div>
                                <p style="font-size: 0.75rem; color: var(--color-text-dim); margin-bottom: 12px;">${p.brand}</p>
                                <div style="display: flex; gap: 5px; margin-bottom: 15px;">
                                    <span style="font-size: 0.65rem; border: 1px solid var(--color-border); padding: 3px 10px; border-radius: 20px; color: var(--color-text-dim);">LIZ</span>
                                    <span style="font-size: 0.65rem; border: 1px solid var(--color-border); padding: 3px 10px; border-radius: 20px; color: var(--color-text-dim);">VIT</span>
                                </div>
                                <div style="display: flex; gap: 8px; align-items: center; background: var(--color-bg); padding: 10px; border-radius: 4px; margin-bottom: 15px;">
                                    <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-text);">Colori Liz:</span>
                                    <div style="width: 14px; height: 14px; border-radius: 50%; background: #000;"></div>
                                    <div style="width: 14px; height: 14px; border-radius: 50%; background: #a67c52;"></div>
                                    <div style="width: 14px; height: 14px; border-radius: 50%; background: #8e8a00;"></div>
                                    <div style="width: 14px; height: 14px; border-radius: 50%; background: #e8e3d3;"></div>
                                </div>
                                <div style="margin-top: auto;">
                                    <button class="btn" style="width: 100%; border-radius: 6px; background: #6b7280; color: white; border: none; padding: 0.6rem; font-size: 0.8rem;"><i class="fa-regular fa-bookmark"></i> Aggiungi all'ordine</button>
                                </div>
                            </div>
                        </div>`;
                    } else {
                        html += `
                        <div class="product-card operative" style="padding: 0; border: none; display: block; border: 1px solid var(--color-border); border-radius: 8px;">
                            <div class="new-ui-operative-header" style="display: flex; justify-content: space-between; align-items: center; background: #dbeafe; padding: 1rem 1.5rem; border-radius: 8px 8px 0 0;">
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <div class="product-img" style="background:${p.img}; width: 60px; height: 40px; border-radius: 4px; margin: 0;"></div>
                                    <span style="font-weight: 800; font-size: 0.9rem; color: #1e3a8a;">${p.n}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 2rem;">
                                    <div style="text-align: right;">
                                        <span style="font-size: 0.7rem; color: #15803d; font-weight: 800;">REALE<br><span style="font-size: 0.85rem;">200</span></span>
                                    </div>
                                    <div style="text-align: right;">
                                        <span style="font-size: 0.7rem; color: #b45309; font-weight: 800;">VIRTUALE<br><span style="font-size: 0.85rem;">300</span></span>
                                    </div>
                                    <strong style="color: #1e3a8a;">4000,00€</strong>
                                    <i class="fa-solid fa-chevron-down" style="color: #1e3a8a; font-size: 0.8rem;"></i>
                                </div>
                            </div>
                            
                            <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 0 0 8px 8px;">
                                <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 1.5rem;">
                                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-text);">Scegli materiale:</span>
                                    <span style="font-size: 0.7rem; font-weight: 600; background: #1e3a8a; color: white; padding: 4px 12px; border-radius: 20px;">LIZ</span>
                                    <span style="font-size: 0.7rem; font-weight: 600; border: 1px solid var(--color-border); color: var(--color-text); padding: 4px 12px; border-radius: 20px;">VIT</span>
                                </div>
                                
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--color-border);">
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <div style="width: 18px; height: 18px; border-radius: 50%; background: #c8a2a2;"></div>
                                        <span style="font-size: 0.9rem; color: var(--color-text);">Nude &nbsp;<strong>A</strong></span>
                                    </div>
                                    <div class="qty-controls" style="background: white; border-radius: 6px; overflow: hidden; display: flex;">
                                        <button style="border: 1px solid #bfdbfe; color: #1e3a8a; background: white; width: 36px; height: 32px; border-radius: 6px 0 0 6px;">-</button>
                                        <input type="text" value="0" style="width: 40px; text-align: center; border: 1px solid #bfdbfe; border-left: none; border-right: none; height: 32px; box-sizing: border-box; background: white;" readonly>
                                        <button style="border: none; color: #1e3a8a; background: #bfdbfe; width: 36px; height: 32px; border-radius: 0 6px 6px 0;">+</button>
                                    </div>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <div style="width: 18px; height: 18px; border-radius: 50%; background: #000;"></div>
                                        <span style="font-size: 0.9rem; color: var(--color-text);">Nero &nbsp;<strong>A</strong></span>
                                    </div>
                                    <div class="qty-controls" style="background: white; border-radius: 6px; overflow: hidden; display: flex;">
                                        <button style="border: 1px solid #bfdbfe; color: #1e3a8a; background: white; width: 36px; height: 32px; border-radius: 6px 0 0 6px;">-</button>
                                        <input type="text" value="0" style="width: 40px; text-align: center; border: 1px solid #bfdbfe; border-left: none; border-right: none; height: 32px; box-sizing: border-box; background: white;" readonly>
                                        <button style="border: none; color: #1e3a8a; background: #bfdbfe; width: 36px; height: 32px; border-radius: 0 6px 6px 0;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    }
                });
                box.innerHTML = html;
            };

            const renderOrders = () => {
                const tb = document.getElementById('order-table-body');
                tb.innerHTML = '';
                ordersData.forEach((o, i) => {
                    tb.innerHTML += `<tr onclick="Portfolio.openDrawer(${i})">
                        <td style="font-family:monospace; color:var(--color-text-dim);">${o.id}</td>
                        <td>${o.date}</td><td><strong>${o.client}</strong></td><td><strong>${o.total}</strong></td>
                        <td><span class="status-badge ${o.color}">${translations[currentLang][o.statusKey]}</span></td>
                    </tr>`;
                });
            };

            const openDrawer = (idx) => {
                const o = ordersData[idx];
                document.getElementById('side-drawer').classList.add('open');
                document.getElementById('drawer-id').innerText = o.id;
                document.getElementById('drawer-client').innerText = o.client;
                const badge = document.getElementById('drawer-status');
                badge.className = `status-badge ${o.color}`;
                badge.innerText = translations[currentLang][o.statusKey];
            };
            const closeDrawer = () => document.getElementById('side-drawer').classList.remove('open');

            const initClients = () => {
                const list = document.getElementById('client-list');
                list.innerHTML = '';
                clientsData.forEach((c, i) => {
                    list.innerHTML += `<div class="list-item" id="c-item-${i}" onclick="Portfolio.selectClient(${i})" style="display: flex; align-items: center; gap: 15px; padding: 1.2rem 1.5rem; transition: background 0.2s; cursor: pointer; border-left: 4px solid transparent;">
                        <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--color-active-light); color: var(--color-active-solid); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fa-solid fa-building"></i></div>
                        <div>
                            <h4 style="font-size:0.95rem; margin-bottom:4px; font-weight: 800; color: var(--color-text);">${c.name}</h4>
                            <p style="font-size:0.75rem; color:var(--color-text-dim); margin:0;">${c.city}</p>
                        </div>
                    </div>`;
                });
                selectClient(0);
            };

            const selectClient = (idx) => {
                document.querySelectorAll('.list-item').forEach((el, i) => {
                    if (i === idx) {
                        el.setAttribute('style', 'display: flex; align-items: center; gap: 15px; padding: 1.2rem 1.5rem; transition: background 0.2s; cursor: pointer; border-left: 4px solid var(--color-active-solid); background: var(--color-active-bg);');
                    } else {
                        el.setAttribute('style', 'display: flex; align-items: center; gap: 15px; padding: 1.2rem 1.5rem; transition: background 0.2s; cursor: pointer; border-left: 4px solid transparent; background: transparent;');
                    }
                });

                const c = clientsData[idx];
                document.getElementById('detail-name').innerText = c.name;
                document.getElementById('detail-company').innerText = c.name;
                document.getElementById('detail-vat').innerText = c.vat;
                document.getElementById('detail-email').innerText = c.email;
                document.getElementById('detail-phone').innerText = c.phone;
                document.getElementById('detail-legal-seat').innerText = c.legal;
                document.getElementById('detail-legal-seat-2').innerText = c.legal;
                document.getElementById('detail-billing-2').innerText = c.bill;
                document.getElementById('detail-billing-3').innerText = c.bill;
                document.getElementById('detail-prov').innerText = c.prov;
                document.getElementById('detail-prov-2').innerText = c.prov;
                document.getElementById('detail-city').innerText = c.city_full;
                document.getElementById('detail-city-2').innerText = c.city_full;
                document.getElementById('detail-method').innerText = c.method;
                document.getElementById('detail-iban').innerText = c.iban;
                document.getElementById('detail-iva').innerText = c.iva;
            };

            return {
                init: () => {
                    initTheme();
                    initChart();
                    setLanguage('it');
                    initClients();
                },
                setLanguage, switchEntryView, updateQty, setMode, openDrawer, closeDrawer, selectClient
            };
        })();

        window.addEventListener('DOMContentLoaded', Portfolio.init);
