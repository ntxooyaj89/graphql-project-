const users = [{
    id: '2798c35b-5b8f-4a5d-9858-0a818d48cbef',
    firstName: 'Orval',
    lastName: 'Hauck',
    jobTitle: 'CEO',
    department: '2b9edccb-41fc-4fc5-b832-ac86a034a877'

},
{
    id: 'd44390cd-b306-4e11-b7d5-a5e0e6fe1e3d',
    firstName: 'Asia',
    lastName: 'Streich',
    jobTitle: 'Dynamic Branding Orchestrator',
    department: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b'


}]

const departments = [{
    id: '920a774e-617a-4a5b-82ea-8205c18eef75',
    name: 'Engineering'


}, {
    id: 'cfd90465-28fa-4b9a-be3e-ef2517e987e9',
    name: 'Sales'

}, {
    id: '252fc1e8-aead-45cc-9d7d-e6003897bbf9',
    name: 'Marketing'

}, {
    id: 'e573dd1c-4cd4-451d-a844-a25210e91135',
    name: 'Operations'

}, {
    id: '2b9edccb-41fc-4fc5-b832-ac86a034a877',
    name: 'Management'

}, {
    id: 'aef293ee-8dcc-4d89-99cf-1b8f61bab07b',
    name: 'Executive'

}, {
    id: 'ddd31c01-a30d-4e72-8e8b-d710fcc4fb56',
    name: 'HR'


}]

const db = {
    users,
    departments

}

export { db as default }