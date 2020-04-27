using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TruckTracker.Models;

namespace TruckTracker.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class LoadsController : ControllerBase
  {
    private readonly DatabaseContext _context;
    readonly private string _MAP_KEY;
    public LoadsController(DatabaseContext context, IConfiguration config)
    {
      _context = context;
      _MAP_KEY = config["MAP_KEY"];
    }

    // GET: api/Loads
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Load>>> GetLoads()
    {
      return await _context.Loads.ToListAsync();
    }

    // GET: api/Loads/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Load>> GetLoad(int id)
    {
      var load = await _context.Loads.FindAsync(id);

      if (load == null)
      {
        return NotFound();
      }

      return load;
    }

    // PUT: api/Loads/5/123456
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}/{mCNumber}")]
    public async Task<ActionResult<Load>> AddCarrierToLoad(int id, int mCNumber)
    {
      var userId = int.Parse(User.Claims.FirstOrDefault(u => u.Type == "id").Value);
      var carrierInSystem = _context.Carriers.Any(c => c.MCNumber == mCNumber);
      if (carrierInSystem != true)
      {
        return BadRequest("There is no carrier with that MC number in the system, please try again");
      }
      else
      {


        var carrier = _context.Carriers.FirstOrDefault(c => c.MCNumber == mCNumber);
        var loadToUpdate = _context.Loads.FirstOrDefault(l => l.Id == id);
        loadToUpdate.CarrierId = carrier.Id;
        loadToUpdate.LoadStatus = "Covered";
        await _context.SaveChangesAsync();
        return Ok(loadToUpdate.CarrierId);
      }
    }
    [HttpPut("{id}/update")]
    public async Task<ActionResult<Load>> UpdateLoadStatus(int id, Load load)
    {
      var userId = int.Parse(User.Claims.FirstOrDefault(u => u.Type == "id").Value);
      var loadToUpdate = _context.Loads.FirstOrDefault(l => l.Id == id);
      loadToUpdate.LoadStatus = load.LoadStatus;
      loadToUpdate.PickEta = load.PickEta;
      loadToUpdate.PickCheckIn = load.PickCheckIn;
      loadToUpdate.PickCheckOut = load.PickCheckOut;
      loadToUpdate.DropCheckIn = load.DropCheckIn;
      loadToUpdate.DropCheckOut = load.DropCheckOut;
      await _context.SaveChangesAsync();
      return Ok(loadToUpdate);
    }
    [HttpPatch("{id}/remove")]
    public async Task<ActionResult<Load>> RemoveCarrierFromLoad(int id)
    {
      var userId = int.Parse(User.Claims.FirstOrDefault(u => u.Type == "id").Value);
      var loadToUpdate = _context.Loads.FirstOrDefault(l => l.Id == id);
      loadToUpdate.CarrierId = null;
      loadToUpdate.LoadStatus = "available";
      await _context.SaveChangesAsync();
      return Ok(loadToUpdate);
    }

    // POST: api/Loads
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Load>> PostLoad(Load load)
    {
      // var client = new HttpClient();
      // var resp = await client.GetAsync($"https://maps.googleapis.com/maps/api/directions/json?origin={load.PickCity}&destination={load.DropApp}&key=");
      var userId = int.Parse(User.Claims.FirstOrDefault(u => u.Type == "id").Value);
      load.UserId = userId;
      _context.Loads.Add(load);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetLoad", new { id = load.Id }, load);
    }

    // DELETE: api/Loads/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Load>> DeleteLoad(int id)
    {
      var load = await _context.Loads.FindAsync(id);
      if (load == null)
      {
        return NotFound();
      }

      _context.Loads.Remove(load);
      await _context.SaveChangesAsync();

      return load;
    }

    private bool LoadExists(int id)
    {
      return _context.Loads.Any(e => e.Id == id);
    }
  }
}
