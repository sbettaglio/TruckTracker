using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TruckTracker.Models;

namespace TruckTracker.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class CarriersController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public CarriersController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Carriers
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Carrier>>> GetCarriers()
    {
      return await _context.Carriers.ToListAsync();
    }

    // GET: api/Carriers/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Carrier>> GetCarrier(int id)
    {
      var carrier = await _context.Carriers.FindAsync(id);

      if (carrier == null)
      {
        return NotFound();
      }

      return carrier;
    }

    // PUT: api/Carriers/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<ActionResult<Carrier>> PutCarrier(int id, Carrier carrier)
    {
      if (id != carrier.Id)
      {
        return BadRequest();
      }
      var carrierToUpdate = _context.Carriers.FirstOrDefault(c => c.Id == id);
      if (carrier.PrimaryContact != "")
      {
        carrierToUpdate.PrimaryContact = carrier.PrimaryContact;
      }
      else if (carrier.PhoneNumber != "")
      {
        carrierToUpdate.PhoneNumber = carrier.PhoneNumber;
      }
      else if (carrier.Email != "")
      {
        carrierToUpdate.Email = carrier.Email;
      }
      await _context.SaveChangesAsync();
      return Ok(carrierToUpdate);
    }

    // POST: api/Carriers
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Carrier>> PostCarrier(Carrier carrier)
    {
      var carrierInSystem = _context.Carriers.Any(c => c.MCNumber == carrier.MCNumber);
      if (carrierInSystem == true)
      {
        return BadRequest("This MC Number is already registered, please try again.");
      }
      _context.Carriers.Add(carrier);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCarrier", new { id = carrier.Id }, carrier);
    }

    // DELETE: api/Carriers/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Carrier>> DeleteCarrier(int id)
    {
      var carrier = await _context.Carriers.FindAsync(id);
      if (carrier == null)
      {
        return NotFound();
      }

      _context.Carriers.Remove(carrier);
      await _context.SaveChangesAsync();

      return carrier;
    }

    private bool CarrierExists(int id)
    {
      return _context.Carriers.Any(e => e.Id == id);
    }
  }
}
