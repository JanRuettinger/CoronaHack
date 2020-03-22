const professions = [
    {text: 'Arzt/Ärztin', fieldValue: 'arzt'},
    {text: 'Medizinstudent', fieldValue: 'medizinstudent'},
    {text: 'MFA', fieldValue: 'mfa'},
    {text: 'MTA', fieldValue: 'mta'},
    {text: 'NotfallsanitäterIn', fieldValue: 'notfallsanitaeter'},
    {text: 'PflegestudentIn', fieldValue: 'pflegestudent'},
    {text: 'PharmaziestudentIn', fieldValue: 'pharmaziestudent'},
    {text: 'SanitäterIn', fieldValue: 'sanitaeter'},
    {text: 'ZahnmedizinstudentIn', fieldValue: 'zahnmedizinstudent'}
]

const progressOptions = new Map()

progressOptions.set('arzt', [
    {text: 'Anästhesie', fieldValue : 'vorklinischer-abschnitt'}, 
    {text: 'Chirugie', fieldValue: 'klinischer-abschnitt'},
    {text: 'Intensivmedizin', fieldValue: 'klinischer-abschnitt'},
    {text: 'Notaufnahme', fieldValue: 'klinischer-abschnitt'}, 
    {text: 'Innere Medizin', fieldValue: 'praktisches-jahr'},
    {text: 'Allgemeinmedizin', fieldValue: 'klinischer-abschnitt'},
    {text: 'Andere', fieldValue: 'klinischer-abschnitt'}

])
progressOptions.set('medizinstudent', [
    {text: 'Vorklinischer Abschnitt', fieldValue : 'vorklinischer-abschnitt'}, 
    {text: 'Klinischer Abschnitt', fieldValue: 'klinischer-abschnitt'}, 
    {text: 'Praktisches Jahr', fieldValue: 'praktisches-jahr'} 
])
progressOptions.set('mfa', [
    {text: '1. Jahr', fieldValue: 'jahr-1'}, 
    {text: '2. Jahr', fieldValue: 'jahr-2'},
    {text: '3. Jahr', fieldValue: 'jahr-3'},
    {text: 'berufstätig', fieldValue: 'berufstaetig'}
])
progressOptions.set('mta', [
    {text: '1. Jahr', fieldValue: 'jahr-1'}, 
    {text: '2. Jahr', fieldValue: 'jahr-2'},
    {text: '3. Jahr', fieldValue: 'jahr-3'},
    {text: 'berufstätig', fieldValue: 'berufstaetig'}
])
progressOptions.set('notfallsanitaeter', [
    {text: '1. Jahr', fieldValue: 'jahr-1'}, 
    {text: '2. Jahr', fieldValue: 'jahr-2'},
    {text: 'berufstätig', fieldValue: 'berufstaetig'}
])
progressOptions.set('pflegestudent', [
    {text: '1. Jahr', fieldValue: 'jahr-1'}, 
    {text: '2. Jahr', fieldValue: 'jahr-2'},
    {text: '3. Jahr', fieldValue: 'jahr-3'},
    {text: 'berufstätig', fieldValue: 'berufstaetig'}
])

progressOptions.set('pharmaziestudent', [
    {text: '1. - 4. Semester', value: 'semester1-4'}, 
    {text: '5. - 8. Semester', value: 'semester5-8'}
])
progressOptions.set('sanitaeter', [])
progressOptions.set('zahnmedizinstudent', [
    {text: 'Vorklinischer Abschnitt', value: 'vorklinischer-abschnitt'},
    {text: 'Klinischer Abschnitt', value: 'klinischer-abschnitt'}, 
])
progressOptions.set('sonstige', [])

const initialDomainExperience = {
    anaesthesie: false,
    chirugie: false,
    inneremedizin: false, 
    intensivmedizin: false,
    notaufnahme: false,
    allgemeinmedizin: false, 
    rettungsdienst: false,
    labor: false, 
    verwaltung: false,
    pflege: false
}

const initialFamulaturen = {
    anaesthesie: false,
    chirugie: false,
    inneremedizin: false, 
    intensivmedizin: false,
    notaufnahme: false,
    allgemeinmedizin: false, 
    nofamulatur: false
}

const famulaturProfessions = new Map() // key = profession, value = array w/ famulatur options
famulaturProfessions.set('medizinstudent',[
        {text: 'Anästhesie', value: 'anaesthesie'},
        {text: 'Chirugie', value: 'chirugie'},
        {text: 'Innere Medizin', value: 'inneremedizin'},
        {text: 'Intensivmedizin', value: 'intensivmedizin'},
        {text: 'Notaufnahme', value: 'notaufnahme'},
        {text: 'Ich habe noch keine Famulatur abgeschlossen', value: 'nofamulatur'},
        {text: 'Allgemeinmedizin', value: 'allgemeinmedizin'}
    ])

const compensationOptions = [
    {text: 'Ich helfe auch ohne eine Vergütung', value: 'nocompensation'},
    {text: 'Ich benötige eine Vergütung', value: 'compensation'}
]

const availabilityOptions = [
    {text: 'max. 10h/Woche', value: 'max10h'},
    {text: 'max. 20h/Woche', value: 'max20h'},
    {text: 'max. 30h/Woche', value: 'max30h'},
    {text: 'max. 40h/Woche', value: 'max40h'}
]

export {
    progressOptions,
    professions,
    famulaturProfessions,
    initialDomainExperience,
    initialFamulaturen,
    compensationOptions,
    availabilityOptions
} 