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
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using TruckTracker.Models;
using TruckTracker.ViewModels;

namespace TruckTracker.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    readonly private DatabaseContext _context;
    readonly private string JWT_KEY;

    public AuthController(DatabaseContext context, IConfiguration config)
    {
      JWT_KEY = config["JWT_KEY"];
      _context = context;

    }

    private object CreateJWT(User user)
    {
      var expirationTime = DateTime.UtcNow.AddHours(10);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim("id", user.Id.ToString()),
            new Claim("email", user.Email),
            new Claim("name", user.FullName)
      }),
        Expires = expirationTime,
        SigningCredentials = new SigningCredentials(
               new SymmetricSecurityKey(Encoding.ASCII.GetBytes(JWT_KEY)),
              SecurityAlgorithms.HmacSha256Signature
          )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));


      return token;
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

      return Ok(new { Token = CreateJWT(user), user = user });
    }

    [HttpPost("login")]
    public async Task<ActionResult> Login(UserLogin userLogin)
    {
      var user = await _context.Users.FirstOrDefaultAsync(user => user.Email.ToLower() == userLogin.Email.ToLower());
      if (user == null)
      {
        return BadRequest("Email or password does not match, please try again");
      }
      var results = new PasswordHasher<User>().VerifyHashedPassword(user, user.HashedPassword, userLogin.Password);

      if (results == PasswordVerificationResult.Success)
      {
        return Ok(new { Token = CreateJWT(user), user = user });
      }
      else
      {
        return BadRequest("Email or password does not match, please try again.");
      }
    }

  }
}