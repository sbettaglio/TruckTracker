using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TruckTracker.Models;

namespace TruckTracker.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LoadsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public LoadsController(DatabaseContext context)
    {
      _context = context;
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
      var load = _context.Loads.FirstOrDefault(l => l.Id == id);
      var carrier = _context.Carriers.FirstOrDefault(c => c.MCNumber == mCNumber);
      load.CarrierId = carrier.Id;
      await _context.SaveChangesAsync();
      return Ok(load.CarrierId);
    }

    // POST: api/Loads
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Load>> PostLoad(Load load)
    {
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
