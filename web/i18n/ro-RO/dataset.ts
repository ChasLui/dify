const translation = {
  knowledge: 'Cunoștințe',
  documentCount: ' documente',
  wordCount: ' mii de cuvinte',
  appCount: ' aplicații conectate',
  createDataset: 'Creează Cunoștințe',
  createDatasetIntro: 'Importați-vă propriile date text sau scrieți date în timp real prin Webhook pentru îmbunătățirea contextului LLM.',
  deleteDatasetConfirmTitle: 'Ștergeți această Cunoștință?',
  deleteDatasetConfirmContent:
    'Ștergerea Cunoștințelor este ireversibilă. Utilizatorii nu vor mai putea accesa Cunoștințele, iar toate configurațiile și jurnalele prompt vor fi șterse permanent.',
  datasetUsedByApp: 'Cunoștințele sunt utilizate de unele aplicații. Aplicațiile nu vor mai putea utiliza aceste Cunoștințe, iar toate configurațiile de prompt și jurnalele vor fi șterse definitiv.',
  datasetDeleted: 'Cunoștințe șterse',
  datasetDeleteFailed: 'Eșec la ștergerea Cunoștințelor',
  didYouKnow: 'Știați că?',
  intro1: 'Cunoștințele pot fi integrate în aplicația Dify ',
  intro2: 'ca un context',
  intro3: ',',
  intro4: 'sau ele ',
  intro5: 'pot fi create',
  intro6: ' ca un plug-in index ChatGPT standalone pentru publicare',
  unavailable: 'Indisponibil',
  unavailableTip: 'Modelul de încorporare nu este disponibil, modelul de încorporare implicit trebuie configurat',
  datasets: 'CUNOȘTINȚE',
  datasetsApi: 'ACCES API',
  retrieval: {
    semantic_search: {
      title: 'Căutare Vector',
      description: 'Generați încorporările interogărilor și căutați bucata de text cea mai similară cu reprezentarea sa vectorială.',
    },
    full_text_search: {
      title: 'Căutare Full-Text',
      description: 'Indexați toți termenii din document, permițând utilizatorilor să caute orice termen și să recupereze bucățile de text relevante care conțin acei termeni.',
    },
    hybrid_search: {
      title: 'Căutare Hibridă',
      description: 'Executați căutări full-text și căutări vectoriale în același timp, reclasificați pentru a selecta cea mai bună potrivire pentru interogarea utilizatorului. Configurarea API-ului modelului Rerank este necesară.',
      recommend: 'Recomandat',
    },
    invertedIndex: {
      title: 'Index Inversat',
      description: 'Indexul inversat este o structură utilizată pentru recuperare eficientă. Organizat după termeni, fiecare termen indică documentele sau paginile web care îl conțin.',
    },
    change: 'Schimbă',
    changeRetrievalMethod: 'Schimbă metoda de recuperare',
  },
  docsFailedNotice: 'documentele nu au putut fi indexate',
  retry: 'Reîncercați',
  indexingTechnique: {
    high_quality: 'IC',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'VECTOR',
    full_text_search: 'TEXT COMPLET',
    hybrid_search: 'HIBRID',
    invertedIndex: 'INVERSAT',
  },
  mixtureHighQualityAndEconomicTip: 'Modelul de reclasificare este necesar pentru amestecul de baze de cunoștințe de înaltă calitate și economice.',
  inconsistentEmbeddingModelTip: 'Modelul de reclasificare este necesar dacă modelele de încorporare ale bazelor de cunoștințe selectate sunt inconsistente.',
  retrievalSettings: 'Setări de recuperare',
  rerankSettings: 'Setări de reclasificare',
  weightedScore: {
    title: 'Scor ponderat',
    description: 'Prin ajustarea ponderilor atribuite, această strategie de reclasificare determină dacă să prioritizeze potrivirea semantică sau pe cea a cuvintelor cheie.',
    semanticFirst: 'Semantic primul',
    keywordFirst: 'Cuvânt cheie primul',
    customized: 'Personalizat',
    semantic: 'Semantic',
    keyword: 'Cuvânt cheie',
  },
  nTo1RetrievalLegacy: 'Recuperarea N-la-1 va fi oficial depreciată din septembrie. Se recomandă utilizarea celei mai recente recuperări cu căi multiple pentru a obține rezultate mai bune.',
  nTo1RetrievalLegacyLink: 'Află mai multe',
  nTo1RetrievalLegacyLinkText: 'Recuperarea N-la-1 va fi oficial depreciată în septembrie.',
  defaultRetrievalTip: 'Recuperarea pe mai multe căi este utilizată în mod implicit. Cunoștințele sunt preluate din mai multe baze de cunoștințe și apoi reclasificate.',
  editExternalAPIConfirmWarningContent: {
    front: 'Acest API de cunoștințe externe este legat de',
    end: 'cunoștințe externe, iar această modificare va fi aplicată tuturor. Sunteți sigur că doriți să salvați această modificare?',
  },
  editExternalAPIFormWarning: {
    front: 'Acest API extern este legat de',
    end: 'cunoștințe externe',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'Șterge',
      end: '?',
    },
    content: {
      front: 'Acest API de cunoștințe externe este legat de',
      end: 'cunoștințe externe. Ștergerea acestui API le va invalida pe toate. Sunteți sigur că doriți să ștergeți acest API?',
    },
    noConnectionContent: 'Sunteți sigur că ștergeți acest API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Alegeți un API de cunoștințe extern',
  },
  connectDatasetIntro: {
    content: {
      end: '. Apoi găsiți ID-ul de cunoștințe corespunzător și completați-l în formularul din stânga. Dacă toate informațiile sunt corecte, va sări automat la testul de recuperare din baza de cunoștințe după ce faceți clic pe butonul de conectare.',
      link: 'Aflați cum să creați un API extern',
      front: 'Pentru a vă conecta la o bază de cunoștințe externă, trebuie mai întâi să creați un API extern. Vă rugăm să citiți cu atenție și să consultați',
    },
    title: 'Cum să vă conectați la o bază de cunoștințe externă',
    learnMore: 'Află mai multe',
  },
  connectHelper: {
    helper2: 'este acceptată doar funcționalitatea de recuperare',
    helper5: 'Cu atenție înainte de a utiliza această caracteristică.',
    helper3: '. Vă recomandăm cu tărie să',
    helper4: 'Citiți documentația de ajutor',
    helper1: 'Conectați-vă la baze de cunoștințe externe prin API și ID-ul bazei de cunoștințe. În prezent,',
  },
  externalKnowledgeForm: {
    connect: 'Conecta',
    cancel: 'Anula',
  },
  externalAPIForm: {
    encrypted: {
      end: 'Tehnologie.',
      front: 'Tokenul API va fi criptat și stocat folosind',
    },
    edit: 'Editare',
    endpoint: 'Punct final API',
    apiKey: 'Cheie API',
    name: 'Nume',
    save: 'Salva',
    cancel: 'Anula',
  },
  editExternalAPIFormTitle: 'Editarea API-ului de cunoștințe externe',
  externalTag: 'Extern',
  createExternalAPI: 'Adăugarea unui API de cunoștințe extern',
  connectDataset: 'Conectați-vă la o bază de cunoștințe externă',
  externalKnowledgeDescriptionPlaceholder: 'Descrieți ce este în această bază de cunoștințe (opțional)',
  externalAPI: 'API extern',
  learnHowToWriteGoodKnowledgeDescription: 'Aflați cum să scrieți o descriere bună a cunoștințelor',
  externalAPIPanelTitle: 'API de cunoștințe externe',
  allExternalTip: 'Când utilizează numai cunoștințe externe, utilizatorul poate alege dacă să activeze modelul Rerank. Dacă nu este activată, bucățile preluate vor fi sortate pe baza scorurilor. Când strategiile de recuperare a diferitelor baze de cunoștințe sunt inconsistente, acestea vor fi inexacte.',
  externalKnowledgeNamePlaceholder: 'Vă rugăm să introduceți numele bazei de cunoștințe',
  externalAPIPanelDocumentation: 'Aflați cum să creați un API de cunoștințe externe',
  externalKnowledgeName: 'Nume cunoștințe externe',
  externalKnowledgeDescription: 'Descrierea cunoștințelor',
  externalKnowledgeIdPlaceholder: 'Vă rugăm să introduceți ID-ul de cunoștințe',
  noExternalKnowledge: 'Nu există încă un API de cunoștințe externe, faceți clic aici pentru a crea',
  externalKnowledgeId: 'ID de cunoștințe extern',
  editExternalAPITooltipTitle: 'CUNOȘTINȚE LEGATE',
  mixtureInternalAndExternalTip: 'Modelul Rerank este necesar pentru amestecul de cunoștințe interne și externe.',
  externalAPIPanelDescription: 'API-ul de cunoștințe externe este utilizat pentru a se conecta la o bază de cunoștințe din afara Dify și pentru a prelua cunoștințe din acea bază de cunoștințe.',
  createNewExternalAPI: 'Creați un nou API de cunoștințe externe',
  chunkingMode: {
    general: 'General',
    parentChild: 'Părinte-copil',
  },
  parentMode: {
    paragraph: 'Paragraf',
    fullDoc: 'Documentar complet',
  },
  batchAction: {
    enable: 'Activa',
    cancel: 'Anula',
    delete: 'Șterge',
    disable: 'Dezactiva',
    selected: 'Selectat',
    archive: 'Arhivă',
  },
  documentsDisabled: '{{num}} documente dezactivate - inactive de peste 30 de zile',
  preprocessDocument: '{{num}} Procesarea prealabilă a documentelor',
  enable: 'Activa',
  localDocs: 'Documente locale',
  allKnowledge: 'Toate cunoștințele',
  allKnowledgeDescription: 'Selectați pentru a afișa toate cunoștințele din acest spațiu de lucru. Doar proprietarul spațiului de lucru poate gestiona toate cunoștințele.',
}

export default translation
