import React from 'react'

const NewCarrier = () => {
  return (
    <>
      <div>
        <h1>Add New Carrier</h1>
      </div>
      <main>
        <form>
          <section>
            <p>Carrier Name</p>
            <input type="text" name="carrierName"></input>
          </section>
          <section>
            <p>MC Number</p>
            <input type="number" name="mcNumber"></input>
          </section>
          <section>
            <p>Primary Contact</p>
            <input type="test" name="primaryContact"></input>
          </section>
          <section>
            <p>Phone</p>
            <input type="tel" name="phone"></input>
          </section>
          <section>
            <p>email</p>
            <input type="email" name="email"></input>
          </section>
          <section>
            <p>Home State</p>
            <input type="text" name="homeState"></input>
          </section>
          <section>
            <p>Valid Insurance</p>
            <input type="checkbox" name="validInsurance"></input>
          </section>
          <button>Save Carrier</button>
        </form>
      </main>
    </>
  )
}

export default NewCarrier
