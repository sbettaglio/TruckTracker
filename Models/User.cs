using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TruckTracker.Models
{
  public class User
  {
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Username { get; set; }
    public string Company { get; set; }
    public string Position { get; set; }
    [JsonIgnore]
    public string HashedPassword { get; set; }
    public string Email { get; set; }
    public List<Load> Loads { get; set; } = new List<Load>();
  }
}