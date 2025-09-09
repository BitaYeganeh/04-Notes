const App = (props) => {
  const {notes} = props
  
  const result = notes.map(note => note.id)
  console.log(result)

  const result2 = notes.map(note => note.content)
  console.log(result2)

  return (
    <>
      <h1>Notes - hard coded</h1>
      <ul>
        
          <li>{notes[0].content}</li>
          <li>{notes[1].content}</li>
          <li>{notes[2].content}</li>      
      </ul>
      <hr />
      <h1>Notes - map-metodilla</h1>
      <ul>
        {notes.map(note => 
          <li key= {note.id}>
            {note.content}</li>  
        )}
      </ul>
      <hr />
    </>
  )

}
export default App