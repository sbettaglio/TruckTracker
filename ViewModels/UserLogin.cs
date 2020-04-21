using System.Text.Json.Serialization;

namespace TruckTracker.ViewModels
{
  public class UserLogin
  {
    public string Email { get; set; }

    public string Password { get; set; }
  }
}