import React from 'react'

const LandingPage = () => {
  return (
    <>
      <main className="login">
        <h1>Truck Tracker</h1>
        <form>
          <label>Username</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="password"></input>
          <button type="button" class="btn btn-success">
            Log In
          </button>
        </form>
      </main>
    </>
  )
}
export default LandingPage
