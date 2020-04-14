using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TruckTracker.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TruckTracker.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {

    private DatabaseContext _context;


    // Dependency Injection
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
      return Ok(await results.ToListAsync());
    }





  }
}