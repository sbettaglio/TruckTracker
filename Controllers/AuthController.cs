using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TruckTracker.Models;
using TruckTracker.ViewModels;

namespace TruckTracker.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    private DatabaseContext _context;
    public AuthController(DatabaseContext context)
    {
      _context = context;
    }
    [HttpPost("register")]
    public async Task<ActionResult> RegisterUser(NewUser newUser)
    {
      if (newUser.Password.Length < 5)
      {
        return BadRequest("Password must be at least five characters.");
      }
      var userEmailInSystem = await _context.Users.AnyAsync(user => user.Email.ToLower() == newUser.Email.ToLower());
      if (userEmailInSystem)
      {
        return BadRequest("User already exists with that email");
      }
      var userUserNameInSystem = await _context.Users.AnyAsync(user => user.Username.ToLower() == newUser.Username.ToLower());
      if (userUserNameInSystem)
      {
        return BadRequest("User already exists with that username");
      }
      var user = new User
      {
        FullName = newUser.FullName,
        Email = newUser.Email,
        Company = newUser.Company,
        Position = newUser.Position,
        Username = newUser.Username
      };
      var hashed = new PasswordHasher<User>().HashPassword(user, newUser.Password);
      user.HashedPassword = hashed;
      _context.Add(user);
      await _context.SaveChangesAsync();
      return Ok(user);
    }
  }
}