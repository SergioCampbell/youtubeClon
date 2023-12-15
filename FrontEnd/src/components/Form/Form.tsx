
export default function Form ({Submit, handleChange, videos}: any) {

    const icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
    return (
        <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth mt-3" onSubmit={Submit}>
        <div className='container'>
            <img src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png'
            className='img-fluid'
            style={{width: "8em", height: "4em"}}/>

            <form className='d-flex'>
            <input
        className="form-control me-2"
          type="text"
          value={videos}
          placeholder="Search a video here"
          onChange={() => handleChange}
        />

        <button type="submit" className="btn btn-danger"> {icon} Search</button>
            </form>
        </div>
      </nav>
    )
}
