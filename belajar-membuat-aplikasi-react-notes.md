# 14-belajar-membuat-aplikasi-web-dengan-react

- Initiate new project vite react typescript
npm create vite@latest app-name -- --template react-ts
npm install react-router-dom
npm install @fortawesome/fontawesome-free

component hierarcy
App
  Noteapp
    Navbar
      Searchbutton
    Body
      Addnote
      Activenote
        Notelist
          Noteitem
            Deletebutton
            Archivebutton
      Archivenote
        Notelist
          Noteitem
            Deletebutton
            Archivebutton

src/
|-- components/
|   |-- AddNote.tsx
|   |-- ArchiveNote.tsx
|   |-- NoteApp.tsx
|   |-- NoteItem.tsx
|   |-- NoteList.tsx
|   |-- SearchButton.tsx
|   |-- ActiveNote.tsx
|-- utils/
|   |-- data.ts
|-- App.tsx