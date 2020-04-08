using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InternsFeedback.Models;

namespace InternsFeedback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InternsController : ControllerBase
    {
        private readonly InternsFeedbackContext _context;

        public InternsController(InternsFeedbackContext context)
        {
            _context = context;
        }

        // GET: api/Interns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Intern>>> GetIntern()
        {
            return await _context.Intern.ToListAsync();
        }

        // GET: api/Interns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Intern>> GetIntern(int id)
        {
            var intern = await _context.Intern.FindAsync(id);

            if (intern == null)
            {
                return NotFound();
            }

            return intern;
        }

        // PUT: api/Interns/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIntern(int id, Intern intern)
        {
            if (id != intern.InternId)
            {
                return BadRequest();
            }

            _context.Entry(intern).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Interns
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Intern>> PostIntern(Intern intern)
        {
            _context.Intern.Add(intern);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIntern", new { id = intern.InternId }, intern);
        }

        // DELETE: api/Interns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Intern>> DeleteIntern(int id)
        {
            var intern = await _context.Intern.FindAsync(id);
            if (intern == null)
            {
                return NotFound();
            }

            _context.Intern.Remove(intern);
            await _context.SaveChangesAsync();

            return intern;
        }

        private bool InternExists(int id)
        {
            return _context.Intern.Any(e => e.InternId == id);
        }
    }
}
