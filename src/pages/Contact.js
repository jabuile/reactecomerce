import '../pages/Contact.scss'

const Contact = () =>{
    return (
        <div className="FormularioContacto">
            <h1>Contacto</h1>
        
        
        <form className='formC'>
  <label>
    Name:
    <input type="text" name="Nombre y apellido" /><br/>
    Documento:
    <label><input type="nomber" documento="Documento" /><br/></label>
    Email:
    <label><input type="text" name="email" id="" placeholder="email"/></label><br/>
    Sexo:
    <select>
        <option value="Masculino">M</option>
        <option value="Femenino">F</option>
  
    </select>
  </label>
  <input type="submit" value="Submit" />
</form>

        </div>    
    )
}

export default Contact