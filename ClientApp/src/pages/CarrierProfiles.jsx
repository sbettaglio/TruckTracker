import React from 'react'

const CarrierProfiles = () => {
  return (
    <>
      <div>
        <h1>Carrier Profile</h1>
      </div>
      <main>
        <section>
          <h4>Carrier Name</h4>
          <p>Lorem Ipsum Express</p>
        </section>
        <section>
          <h4>MC Number</h4>
          <p>MC 445789</p>
        </section>
        <section>
          <h4>Primary Contact</h4>
          <p>Joe Ipsum</p>
        </section>
        <section>
          <h4>Phone</h4>
          <p>555-867-5309</p>
        </section>
        <section>
          <h4>Email</h4>
          <p>lorem@ipsum.com</p>
        </section>
        <section>
          <h4>Setup Date</h4>
          <p>01/12/1987</p>
        </section>
        <section>
          <h4>Home State</h4>
          <p>Florida</p>
        </section>
        <section>
          <h4>Insurance</h4>
          <p>Valid</p>
        </section>
        <button>
          <Link to="/newCarrier">Update</Link>
        </button>
      </main>
    </>
  )
}

export default CarrierProfiles
