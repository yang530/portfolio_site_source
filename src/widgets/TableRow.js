//a function to generate a row of table (showing info of ONE item in my portfolio-myWorks)
//columns:
//prjName -> name of item(project)
//prjPath -> file path of project on server (or localhost)
//github -> github link to the project


function TableRow(props){

    return(
        <div className="tableRow w-100 p-3 position-relative d-flex flex-row justify-content-evenly align-items-center">
            <p>{props.prjName}</p>
            <a>{props.prjPath}</a>
            <a>{props.github}</a>
        </div>
    );


}

export default TableRow;