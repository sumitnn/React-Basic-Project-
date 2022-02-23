import React from 'react'

function Home({ values }) {
    // console.log(values[0]);
  return (
      <>
          <h4 className="text-center">Home Page</h4>
          <div className="container mt-4">
              <div className="row">
                  
                      {
                          values[0].map((curele,i) => { 
                              return (
                                  <div className="col-md-4" key={curele.id}>
                                  <div className="card" style={{"width": "18rem"}}>
                                  <div className="card-body">
                                      <h5 className="card-title">{curele.title}</h5>
                                      <p className="card-text">{curele.body}.</p>
                                              <button className="btn btn-primary">User ID {curele.userId }</button>
                                  </div>
                                      </div></div> )
                          })
                    }

                  
              </div>
          </div>
          
      
      </>
  )
}

export default Home