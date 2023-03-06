import './Exercise4.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  const formreact = () => ( 
    <div>
        {/* Part1 */}
    {/* <h1 style={{
                backgroundColor:"lightblue",
                color:"red"
            }}>This is a header</h1>  */}

    {/* Part2 */}
    <h1 style={style_header}>This is a header</h1>      
    <p className='para'> This a paragraphe</p>
    <a href>This is a link</a>
    <p>this is a form</p>
    <p>Please write your name</p>
    <input type="text"/>
    <input type="submit"/> 
    <p> Here is an image</p>
    <img src='https://img.freepik.com/free-photo/front-view-funny-cute-dog-concept_23-2148786532.jpg' alt='actor'/>
    </div>
    )
  
    
    export default formreact;