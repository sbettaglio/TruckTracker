using System;
using System.Collections.Generic;

namespace TruckTracker.Models
{
  public class Carrier
  {
    public int Id { get; set; }
    public string CarrierName { get; set; }
    public int MCNumber { get; set; }
    public string PhoneNumber { get; set; }
    public string PrimaryContact { get; set; }
    public string Email { get; set; }
    public string HomeState { get; set; }
    public bool ValidInsurance { get; set; }
    public DateTime SetupDate { get; set; } = DateTime.Now;


    public List<Load> Loads { get; set; } = new List<Load>();
  }
}