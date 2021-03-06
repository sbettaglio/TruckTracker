using System;
using System.Text.Json.Serialization;

namespace TruckTracker.Models
{
  public class Load
  {
    public int Id { get; set; }
    public string PickCity { get; set; }
    public DateTime PickApp { get; set; }
    public string DropCity { get; set; }
    public DateTime DropApp { get; set; }
    public string Distance { get; set; }
    public string CurrentLocation { get; set; }
    public string TransitTime { get; set; }
    public int Weight { get; set; }
    public string Commodity { get; set; }
    public double CustomerRate { get; set; }
    public string LoadStatus { get; set; } = "Available";
    public double CarrierRate { get; set; }
    public DateTime PickEta { get; set; }
    public DateTime PickCheckIn { get; set; }
    public DateTime PickCheckOut { get; set; }
    public DateTime DropEta { get; set; }
    public DateTime DropCheckIn { get; set; }
    public DateTime DropCheckOut { get; set; }
    public int? UserId { get; set; }
    [JsonIgnore]
    public User User { get; set; }
    public int? CarrierId { get; set; }
    [JsonIgnore]
    public Carrier Carrier { get; set; }
  }
}