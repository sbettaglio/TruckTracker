using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruckTracker.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace TruckTracker.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

  public class SearchController : ControllerBase
  {

    private DatabaseContext _context;



    public SearchController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet("loads")]
    public async Task<ActionResult> SearchTrails(string searchCity)
    {
      var results = _context.Loads.Where(w =>
        w.PickCity.ToLower().Contains(searchCity.ToLower()) ||
        w.DropCity.ToLower().Contains(searchCity.ToLower())
      );
      return Ok(await (results.ToListAsync()));
    }

    [HttpGet("carriers")]
    public async Task<ActionResult> GetCarrierByMc(int search)
    {
      var carrierInSystem = await _context.Carriers.FirstOrDefaultAsync(c => c.MCNumber == search);
      return Ok(carrierInSystem);

    }
    [HttpGet("carriers/name")]
    public async Task<ActionResult> GetCarrierByName(string search)
    {
      var carrierInSystem = await _context.Carriers.FirstOrDefaultAsync(c => c.CarrierName.ToLower().Contains(search.ToLower()));
      return Ok(carrierInSystem);
    }
    [HttpGet("loads/picktoday")]
    public async Task<ActionResult> GetTodaysPicks()
    {
      var userId = int.Parse(User.Claims.FirstOrDefault(u => u.Type == "id").Value);
      var todaysPicks = _context.Loads.Where(l => l.PickApp.Date == DateTime.Now.Date && l.UserId == userId);
      return Ok(await todaysPicks.ToListAsync());
    }
    [HttpGet("loads/droptoday")]
    public async Task<ActionResult> GetTodaysDrops()
    {

      var todaysDrops = _context.Loads.Where(l => l.DropApp.Date == DateTime.Now.Date);
      return Ok(await todaysDrops.ToListAsync());
    }
    [HttpGet("loads/late")]
    public async Task<ActionResult> GetLateTrucks()
    {

      var lateTrucks = _context.Loads.Where(l => l.LoadStatus == "Pick late" || l.LoadStatus == "Rolling Late");
      return Ok(await lateTrucks.ToListAsync());
    }
    [HttpGet("loads/available")]
    public async Task<ActionResult> GetAvailableLoads()
    {

      var availableLoads = _context.Loads.Where(l => l.CarrierId == null);
      return Ok(await availableLoads.ToListAsync());
    }

  }
}




