using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
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

      var expirationTime = DateTime.UtcNow.AddHours(10);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim("id", user.Id.ToString()),
            new Claim("email", user.Email),
            new Claim("name", user.FullName),
        }),
        Expires = expirationTime,
        SigningCredentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.ASCII.GetBytes("SOME REALLY LONG STRING")),
            SecurityAlgorithms.HmacSha256Signature
        )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
      user.HashedPassword = null;
      return Ok(new { Token = token, user = user });
    }

    [HttpPost("login")]
    public async Task<ActionResult> Login(UserLogin userLogin)
    {
      var user = await _context.Users.FirstOrDefaultAsync(user => user.Email.ToLower() == userLogin.Email.ToLower());
      if (user == null)
      {
        return BadRequest("User does not exist");
      }
      var results = new PasswordHasher<User>().VerifyHashedPassword(user, user.HashedPassword, userLogin.Password);

      if (results == PasswordVerificationResult.Success)
      {

        return Ok();
      }
      else
      {
        return BadRequest("Incorrect password!");
      }
    }

  }
}