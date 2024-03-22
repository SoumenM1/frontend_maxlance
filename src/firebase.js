import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    type: 'service_account',
    project_id: 'crud-92909',
    private_key_id: '2037b13bf5de6a199776ec7c34dde62bc15450d2',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDQupMl7UEzOe3\nYxux/QpmaxABRQdIDo2kPJLChdjbR9iDQtMwa5o2ROFVE6Wif2NPOqKY/MP81MFw\n3EQhxZpIKBBMTjeocTh1rtSYLpuqdUcvfmxcs71skfcppczWn6p6gM9vFvEzu6ex\n0Ns/NWwpKzmwZFcdUCjPQu3C6g5VqovXa0LhAQeIrfK460omWTdk3gvWGpDTCABd\nUJoRhhrHrzJs4/JoCKRmRW5dVdiHslxFkqNUVBNkdUyy8QnZETscxMgCduP1gdQ3\nTMrw2QhA8S5Jruc6YRqnu5gdIR5HDHIofT//8t+q9RkP/BQ1ovW9BKrV3LIakcyB\nx8QolSXdAgMBAAECggEAG7nyvzGDmMzn0liWZC3EPkrRmPyOTiMS5dFcHZcX9fs7\nuVfR2TxOR4p8XLJPgMWJ+oQe9o5d3hbv6PC+E/WVNM3LkqpAqQB6ves3cOydWhUR\nKKNRC9DSAwqvCBDtB0Tg1khYLDQbx/bLlypLF6ykUSw8Itn8rMLnKJceX+EQbAVu\nGvHqkLtx495T1USqGyWnquyDOD+DdkQDAEyfMZng5eWIY5TBunV316ZoWPhPXO5j\ntgLaRBHOzTci9zJe3VqtTPzKDokJN0ERK/9z3zW2v4GYOi7EShzO/4HK6jDW4r4k\nUph6p6XNIaWdBPrn5LO65Ffs6UOkgC59w/f8SKmBWQKBgQDg7g+nPLu3HP2U9rti\n8cSILcWYvDgymY7w1zdr98SzoaNevg/shus9o0g3LAswmGsB+K0fOKXpL7jC9LEA\nfuEV4+24a/WSjmZULmn804HAoGSkFLib930c4TN6A4ol/bWvTwioChaflyngYmPA\nnpr0BpVbYaOLnj4m0BicTpwDRwKBgQDeO7g3mcMRm9LtCYg5hJV8v17sj34+J6lU\n8sUSM0EkQKnGxyt3Syg7Uk4JmXpnFsnktx8OupIxDh2HwNqw8g0Uq7c7Sn6vF0Sk\nX1uEz+L46t6GQG79t2OaZ2Iks94iRuPMdRR/TwhMaqWuPF6WnO24GJ6znAqOa4TV\nxHPItQG3uwKBgE2Rq7JH3pCandTmdd78c4NnDZLLrjG9BS+HeORyENLF9now33r5\nWFzsV3Y3aTB8D8MhSErRFV5ih7wr+HKsTuFmtk94Y7sEAsQbMY/wPPn6FlsDjlqz\nMeFoxIDagaTyZtqrTdftirnEvrtUEwSVbeij8JQQCv+WNebasvIMpf73AoGAOA5S\nSlwTs1Zd3wKfhPqnhl7zP7J2QpFYih/ui8e378AL0yMcGKwxir0ZCBzZnjVGWdXD\nFMEE7TDFTB/eSfHUUNl7j44b5Gh3HQscl6SkeOstlCmelYrzqdfYDq/8ISNGhKUn\ntXEnA7eG8SszJMSSxfQX2/BJTWFbkVxLZF4b/88CgYEAxSAWoxcom1GgZarC4lMb\nW+y6ZusVEhgvaNTvYOD91d7+k5K+PGIWphiBE+1JjWd/0npxZnZ8XTWQ9CDi5tL8\no58INYvaBcSi6v2g8N+n3o34z/VNGb+giUm1LsxY1Pbl6KWpKht7ROJcSrUkQzDA\nqSdBEqI4EzUul0m2zjUl1Ts=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-5tl3u@crud-92909.iam.gserviceaccount.com',
    client_id: '108885733201580705439',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5tl3u%40crud-92909.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com',
    apiKey: 'AIzaSyA_q_vPvfDeDRpY3aHOtx4aJQaA2ilpQoo',
    authDomain: 'crud-92909.firebaseapp.com',
    storageBucket: 'crud-92909.appspot.com',
    messagingSenderId: '162218278094',
    appId: '1:162218278094:web:1d8438ccd6f08e9294e49f',
    measurementId: 'G-SLMW0604M1',
    databaseURL: 'https://crud-92909-default-rtdb.firebaseio.com',
};


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage };