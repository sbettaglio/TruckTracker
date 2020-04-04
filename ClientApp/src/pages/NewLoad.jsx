import React from 'react'

const NewLoad = () => {
  return (
    <>
      <div>
        <h1>Create New Load</h1>
      </div>
      <form>
        <section>
          <p>P/U City,State</p>
          <input type="text" name="pickCity"></input>
        </section>
        <section>
          <p>P/U Date</p>
          <input type="datetime-local" name="pickDate"></input>
        </section>
        <section>
          <p>D/O City,State</p>
          <input type="text" name="dropCity"></input>
        </section>
        <section>
          <p>D/O Date</p>
          <input type="datetime-local" name="dropDate"></input>
        </section>
        <section>
          <p>Weight</p>
          <input type="number" name="weight"></input>
        </section>
        <section>
          <p>Commodity</p>
          <input type="text" name="commodity"></input>
        </section>
        <section>
          <p>Customer Rate</p>
          <input type="number" name="customerRate"></input>
        </section>
        <section>
          <p>Carrier Rate</p>
          <input type="number" name="carrierRate"></input>
        </section>
        <button>Save</button>
      </form>
    </>
  )
}

export default NewLoad
