import React from 'react'

const Load = () => {
  return (
    <>
      <div>
        <h1>Load Id</h1>
      </div>
      <main>
        <section>
          <ul>
            <li>
              <span>P/U City:</span>Tampa,FL{' '}
            </li>
          </ul>
          <ul>
            <li>
              <span>P/U Date:</span>05/01/2020 14:00
            </li>
          </ul>
          <ul>
            <li>
              <span>D/O City:</span>Miami, FL
            </li>
          </ul>
          <ul>
            <li>
              <span>D/O Date:</span>05/02/2020 07:00
            </li>
          </ul>
          <ul>
            <li>
              <span>Commodity:</span>Food Grade
            </li>
          </ul>
          <ul>
            <li>
              <span>Customer Rate:</span>$700
            </li>
          </ul>
          <ul>
            <li>
              <span>Carrier Rate:</span>$600
            </li>
          </ul>
        </section>
        <form>
          <h3>Assign Carrier</h3>
          <section>
            <p>Carrier MC</p>
            <input type="number" name="carrierMC"></input>
          </section>
          <section>
            <p>Contact</p>
            <input type="text" name="contact"></input>
          </section>
          <section>
            <label>Dispatched</label>
            <input type="checkbox"></input>
            <input type="time"></input>
          </section>
          <section>
            <label>At Pick</label>
            <input type="checkbox"></input>
            <label>Checked-in</label>
            <input type="time"></input>
            <br></br>
            <label>Loading</label>
            <input type="checkbox"></input>
            <label>Checked-out</label>
            <input type="time"></input>
          </section>
          <section>
            <label>ETA to Drop</label>
            <input typ="time"></input>
          </section>
          <section>
            <label>At Drop</label>
            <input type="checkbox"></input>
            <label>Checked-in</label>
            <input type="time"></input>
            <br></br>
            <label>Loading</label>
            <input type="checkbox"></input>
            <label>Checked-out</label>
            <input type="time"></input>
          </section>
        </form>
      </main>
    </>
  )
}

export default Load
