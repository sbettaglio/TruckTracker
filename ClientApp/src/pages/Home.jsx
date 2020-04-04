import React from 'react'

export function Home() {
  return (
    <>
      <main className="login">
        <h1>Truck Tracker</h1>
        <form>
          <label>Username</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="password"></input>
          <button type="submit">Login</button>
        </form>
      </main>
    </>
  )
}
