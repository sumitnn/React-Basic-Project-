import React from 'react'

function Fetchlist({value}) {
  return (
      <>
          {
              value.map((val, i) => {
                  return (
                      <div className="col-md-4 mb-2 mt-2" key={i}>
                          <div className="card" style={{ "width": "18rem" }}>
                              <div className="card-body">
                                  <h5 className="card-title">{val.title}</h5>
                                  <img src={val.url} alt={val.url} className="img-fluid"  height="100px" width="100px"/>
                                  <button className="btn btn-primary">Album ID {val.albumId}</button>
                              </div>
                          </div></div>
                  )
              })
      }
      
      </>
  )
}

export default Fetchlist