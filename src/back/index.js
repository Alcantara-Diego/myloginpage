
function back(){
    console.log("back-end Running");
    if(process.env.REACT_APP_TEST){
        console.log(process.env.REACT_APP_TEST)
    } else{
        console.log("no .env file available")
    }
    
}

export default back;
