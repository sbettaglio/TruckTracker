import React from 'react'

const Register = () => {
  const [user, setUser] = useState({})
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    console.log(value)
    setUser(prevUser => {
      prevUser[fieldToUpdate] = value
      return prevUser
    })
  }
  return (
    <>
      <div>
        <h1>Registration</h1>
        <h3>Please enter info below</h3>
      </div>
      <main>
        <form>
          <section>
            <p>Company</p>
            <input type="text" name="company" onChange={trackInput}></input>
          </section>
          <section>
            <p>First Name</p>
            <input type="text" name="firstName" onChange={trackInput}></input>
          </section>
          <section>
            <p>Last Name</p>
            <input type="text" name="lastName" onChange={trackInput}></input>
          </section>
          <section>
            <p>Position</p>
            <input type="text" name="position" onChange={trackInput}></input>
          </section>
          <section>
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={trackInput}
            ></input>
          </section>
          <section>
            <p>Email</p>
            <input type="email" name="email" onChange={trackInput}></input>
          </section>
          <button>Register</button>
        </form>
      </main>
    </>
  )
}

export default Register
