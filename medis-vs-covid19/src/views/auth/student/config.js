const professions = [
    {text: 'Arzt/Ärztin', fieldValue: 'arzt'},
    {text: 'Medizinstudent', fieldValue: 'medizinstudent'},
    {text: 'MFA', fieldValue: 'mfa'},
    {text: 'MTA', fieldValue: 'mta'},
    {text: 'NotfallsanitäterIn', fieldValue: 'notfallsanitaeter'},
    {text: 'PflegestudentIn', fieldValue: 'pflegestudent'},
    {text: 'PharmaziestudentIn', fieldValue: 'pharmaziestudent'},
    {text: 'SanitäterIn', fieldValue: 'sanitaeter'},
    {text: 'ZahnmedizinstudentIn', fieldValue: 'zahnmedizinstudent'},
    {text: 'Sonstige', fieldValue: 'sonstige'}
]

const progressOptions = new Map()

progressOptions.set('arzt', [])
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

export {
    progressOptions,
    professions
} 