using System.Text.Json.Serialization;

namespace TruckTracker.ViewModels
{
  public class UserLogin
  {
    public string Email { get; set; }
    [JsonIgnore]
    public string Password { get; set; }
  }
}