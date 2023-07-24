
import './App.css'
import MyForms from './components/MyForms'

function App() {

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForms user={{ 
          name: "John", 
          email: "john@gmail.com", 
          bio: "Eu sou desenvolvedor", 
          role: "admin" }}
        />
      </div>
    </>
  )
}

export default App
